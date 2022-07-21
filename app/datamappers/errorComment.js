//~ Import modules
import { CoreDataMapper } from "./coreDataMapper.js";
import client from '../db/database.js';


class ErrorComment extends CoreDataMapper {
    tableName = 'error_comment';
    createFunctionName = 'create_error_comment';
    updateFunctionName = 'update_error_comment';
}

const errorComment = new ErrorComment(client);

export { errorComment };