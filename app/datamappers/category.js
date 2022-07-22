//~ Import modules
import { CoreDataMapper } from "./coreDataMapper.js";
import client from '../db/database.js';


class CategoryDataMapper extends CoreDataMapper {
    tableName = 'category';
    createFunctionName = 'create_category';
    updateFunctionName = 'update_category';
}

const Category = new CategoryDataMapper(client);

export { Category };