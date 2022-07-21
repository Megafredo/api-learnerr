//~ Import modules
import { CoreDataMapper } from "./coreDataMapper.js";
import client from '../db/database.js';


class Category extends CoreDataMapper {
    tableName = 'category';
    // functionName = ;
}

const category = new Category(client);

export { category };