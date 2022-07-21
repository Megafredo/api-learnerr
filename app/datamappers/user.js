//~ Import modules
import { CoreDataMapper } from "./coreDataMapper.js";
import client from '../db/database.js';


class User extends CoreDataMapper {
    tableName = 'user';
    // functionName = ;
}

const user = new User(client);

export { user };