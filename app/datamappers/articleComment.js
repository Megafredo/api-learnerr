//~ Import modules
import { CoreDataMapper } from './coreDataMapper.js';
import client from '../db/database.js';

class ArticleCommentDataMapper extends CoreDataMapper {
  tableName = 'article_comment';
  createFunctionName = 'create_article_comment';
  updateFunctionName = 'update_article_comment';

  //& Find all comments for 1 article
  async findAllCommentsByArticle(articleId) {
    const preparedQuery = {
      text: `
            SELECT * FROM "${this.tableName}"
            WHERE "article_id" = $1;
            `,
      values: [articleId]
    };

    const result = await this.client.query(preparedQuery);

    if (!result.rows) return null;

    return result.rows;
  }
}

const ArticleComment = new ArticleCommentDataMapper(client);
export { ArticleComment };
