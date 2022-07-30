//~ Import modules
import { CoreDataMapper } from './coreDataMapper.js';
import client from '../db/database.js';

class UserDataMapper extends CoreDataMapper {
  tableName = 'user';
  //functions
  createFunctionName = 'create_user';
  updateFunctionName = 'update_user';
  userIdentity = 'user_identity';
  userDetails = 'user_detailed';

  columns = `"id","username","title", "presentation", "profile_pic_url", "linkedin_url","github_url","instagram_url","twitter_url","portfolio_url"`;

  //& Find user
  async findUser(email) {
    const preparedQuery = {
      text: `
            SELECT ${this.columns},"password" FROM "${this.tableName}"
            WHERE "email" = $1;
            `,
      values: [email]
    };

    const result = await this.client.query(preparedQuery);

    if (!result.rows[0]) return null;

    return result.rows[0];
  }

  //& Find identity
  async findUserIdentity(email) {
    const preparedQuery = {
      text: `
              SELECT * FROM "${this.userIdentity}"($1);
              `,
      values: [email]
    };

    const result = await this.client.query(preparedQuery);
    if (!result.rows[0]) return null;
    return result.rows[0];
  }

  //& Panel user detailed
  async findAllDetails(userId) {
    const preparedQuery = {
      text: `
            SELECT U_detailed FROM "${this.userDetails}"($1);
            `,
      values: [userId]
    };

    const result = await this.client.query(preparedQuery);

    if (!result.rows[0]) return null;

    return result.rows[0];
  }
}

const User = new UserDataMapper(client);

export { User };
