//~ Import modules
import { CoreDataMapper } from "./coreDataMapper.js";
import client from '../db/database.js';


class Article extends CoreDataMapper {
    tableName = 'article';
    createFunctionName = 'create_article';
    updateFunctionName = 'update_article';
}

const article = new Article(client);

export { article };