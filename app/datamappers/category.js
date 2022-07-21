//~ Import modules
import { CoreDataMapper } from "./coreDataMapper.js";
import client from '../db/database.js';


class Category extends CoreDataMapper {
    tableName = 'category';
    createFunctionName = 'create_category';
    updateFunctionName = 'update_category';
}

const category = new Category(client);

export { category };