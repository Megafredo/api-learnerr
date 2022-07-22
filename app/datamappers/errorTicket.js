//~ Import modules
import { CoreDataMapper } from "./coreDataMapper.js";
import client from '../db/database.js';


class ErrorTicketDataMapper extends CoreDataMapper {
    tableName = 'error';
    createFunctionName = 'create_error';
    updateFunctionName = 'update_error';
}

const ErrorTicket = new ErrorTicketDataMapper(client);

export { ErrorTicket };