//~ Import modules
import { CoreDataMapper } from "./coreDataMapper.js";
import client from '../db/database.js';


class UserDataMapper extends CoreDataMapper {
    tableName = 'user';
    createFunctionName = 'create_user' ;
    updateFunctionName = 'update_user';
}

const User = new UserDataMapper(client);

export { User };