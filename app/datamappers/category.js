//~ Import modules
import { CoreDataMapper } from './coreDataMapper.js';
import client from '../db/database.js';

class CategoryDataMapper extends CoreDataMapper {
  tableName = 'category';
  createFunctionName = 'create_category';
  updateFunctionName = 'update_category';
  categoriesArticleFunctionName = 'categories_by_article';
  categoriesErrorFunctionName = 'categories_by_error';
  columns = '*';

  //& All categories By Article
  async byArticle(articleId) {
    const preparedQuery = {
      text: `SELECT * FROM ${this.categoriesArticleFunctionName}($1);`,
      values: [articleId]
    };

    const result = await this.client.query(preparedQuery);
    return result.rows;
  }

  //& All categories By Error ticket
  async byError(errorId) {
    const preparedQuery = {
      text: `SELECT * FROM ${this.categoriesErrorFunctionName}($1);`,
      values: [errorId]
    };

    const result = await this.client.query(preparedQuery);
    return result.rows;
  }
}

const Category = new CategoryDataMapper(client);

export { Category };
