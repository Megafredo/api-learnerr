//~ Import modules
import { CoreDataMapper } from "./coreDataMapper.js";
import client from '../db/database.js';


class UserDataMapper extends CoreDataMapper {
    tableName = 'user';
    createFunctionName = 'create_user' ;
    updateFunctionName = 'update_user';
    columns = `"id","username","title", "presentation", "profile_pic_url", "linkedin_url","github_url","instagram_url","twitter_url","portfolio_url"`;
}

const User = new UserDataMapper(client);

export { User };