//~ Import modules
import { CoreDataMapper } from "./coreDataMapper.js";
import client from '../db/database.js';


class ErrorComment extends CoreDataMapper {
    tableName = 'error_comment';
    // functionName = ;
}

const errorComment = new ErrorComment(client);

export { errorComment };