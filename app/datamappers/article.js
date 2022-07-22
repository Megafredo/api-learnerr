//~ Import modules
import { CoreDataMapper } from "./coreDataMapper.js";
import client from '../db/database.js';


class ArticleDataMapper extends CoreDataMapper {
    tableName = 'article';
    createFunctionName = 'create_article';
    updateFunctionName = 'update_article';
}

const Article = new ArticleDataMapper(client);

export { Article };