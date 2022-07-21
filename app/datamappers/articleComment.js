//~ Import modules
import { CoreDataMapper } from "./coreDataMapper.js";
import client from '../db/database.js';


class ArticleComment extends CoreDataMapper {
    tableName = 'article_comment';
    createFunctionName = 'create_article_comment';
    updateFunctionName = 'update_article_comment';
}

const articleComment = new ArticleComment(client);
export { articleComment };