//~ Import modules
import { CoreDataMapper } from './coreDataMapper.js';
import client from '../db/database.js';

class ArticleDataMapper extends CoreDataMapper {
    tableName = 'article';
    createFunctionName = 'create_article';
    updateFunctionName = 'update_article';
    articleByCategoryFunctionName = 'article_by_category'
    columns = '*';

    //& Fetch all article by category
    async fetchByCategory(categoryId) {
        const preparedQuery = {
            text: `
            SELECT ${this.columns} FROM ${this.errorByCategoryFunctionName}($1);
            `,
            values: [categoryId]
        };

        const result = await this.client.query(preparedQuery);

        if (!result.rows[0]) return null;

        return result.rows[0];
    };

    //& Fetch all article by user

    //& Fetch lastest articles

    //check rajouter la route dans notre docs
    //& Search all articles
}

const Article = new ArticleDataMapper(client);

export { Article };
