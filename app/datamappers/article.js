//~ Import modules
import { CoreDataMapper } from "./coreDataMapper.js";
import client from '../db/database.js';


class Article extends CoreDataMapper {
    tableName = 'article';
    // functionName = ;
}

const article = new Article(client);

export { article };