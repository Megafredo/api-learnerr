//~ Import modules
import { CoreDataMapper } from "./coreDataMapper.js";
import client from '../db/database.js';


class ErrorCommentDataMapper extends CoreDataMapper {
    tableName = 'error_comment';
    createFunctionName = 'create_error_comment';
    updateFunctionName = 'update_error_comment';

    //& Find all comments for 1 error
  async findAllCommentsByErrorTicket(errorId) {
    const preparedQuery = {
      text: `
            SELECT * FROM "${this.tableName}"
            WHERE "error_id" = $1;
            `,
      values: [errorId]
    };

    const result = await this.client.query(preparedQuery);

    if (!result.rows) return null;

    return result.rows;
  }
}

const ErrorComment = new ErrorCommentDataMapper(client);

export { ErrorComment };