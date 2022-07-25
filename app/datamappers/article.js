//~ Import modules
import { CoreDataMapper } from './coreDataMapper.js';
import client from '../db/database.js';

class ArticleDataMapper extends CoreDataMapper {
  tableName = 'article';
  createFunctionName = 'create_article';
  updateFunctionName = 'update_article';

  articleByCategoryFunctionName = 'article_by_category';
  articleByUserFunctionName = 'article_by_user';
  lastestFunctionName = 'lastest_articles';
  searchFunctionName = 'search_articles';

  columns = '*';

  //& Fetch all article by category
  async fetchByCategory(categoryId) {

    const preparedQuery = {
      text: `
            SELECT ${this.columns} FROM ${this.articleByCategoryFunctionName}($1);
            `,
      values: [categoryId]
    };

    const result = await this.client.query(preparedQuery);

    if (!result.rows[0]) return null;

    return result.rows[0];
  }

  //& Fetch all article by user
  async fetchByUser(userId) {
    const preparedQuery = {
      text: `
            SELECT ${this.columns} FROM ${this.articleByUserFunctionName}($1);
            `,
      values: [userId]
    };

    const result = await this.client.query(preparedQuery);

    if (!result.rows[0]) return null;

    return result.rows[0];
  }
}

const Article = new ArticleDataMapper(client);

export { Article };
