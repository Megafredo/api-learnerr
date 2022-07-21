//~ Import modules
import { CoreDataMapper } from "./coreDataMapper.js";
import client from '../db/database.js';


class ArticleComment extends CoreDataMapper {
    tableName = 'article_comment';
    // functionName = ;
}

const articleComment = new ArticleComment(client);
export { articleComment };