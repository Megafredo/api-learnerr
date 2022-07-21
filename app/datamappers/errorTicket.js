//~ Import modules
import { CoreDataMapper } from "./coreDataMapper.js";
import client from '../db/database.js';


class ErrorTicket extends CoreDataMapper {
    tableName = 'error';
    createFunctionName = 'create_error';
    updateFunctionName = 'update_error';
}

const errorTicket = new ErrorTicket(client);

export { errorTicket };