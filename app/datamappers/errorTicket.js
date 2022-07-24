//~ Import modules
import { CoreDataMapper } from './coreDataMapper.js';
import client from '../db/database.js';

class ErrorTicketDataMapper extends CoreDataMapper {
    tableName = 'error';
    createFunctionName = 'create_error';
    updateFunctionName = 'update_error';

    errorByCategoryFunctionName = 'error_by_category';
    errorByUserFunctionName = 'error_by_user';
    lastestErrorTicketsFunctionName = 'lastest_error_tickets';
    searchErrorsFunctionName = 'search_errors';
    
    columns = '*';

    //& Fetch all error ticket by category
    async fetchByCategory(categoryId) {
        const preparedQuery = {
            text: `
            SELECT ${this.columns} FROM ${this.errorByCategoryFunctionName}($1);
            `,
            values: [categoryId]
        };

        const result = await this.client.query(preparedQuery);

        if (!result.rows[0]) return null;

        return result.rows[0];
    };

    //& Fetch all error ticket by user
    async fetchByUser(userId) {
        const preparedQuery = {
            text: `
            SELECT ${this.columns} FROM ${this.errorByUserFunctionName}($1);
            `,
            values: [userId]
        };

        const result = await this.client.query(preparedQuery);

        if (!result.rows[0]) return null;

        return result.rows[0];
    };
    
    //& Fetch lastest error ticket
    async fetchLastest(number) {
        const preparedQuery = {
            text: `
            SELECT ${this.columns} FROM ${this.lastestErrorTicketsFunctionName}($1);
            `,
            values: [number]
        };

        const result = await this.client.query(preparedQuery);

        if (!result.rows) return null;

        return result.rows;
    };
    

    //& Search all error ticket
    async search(inputData) {
        const preparedQuery = {
            text: `
            SELECT ${this.columns} FROM ${this.searchErrorsFunctionName}($1);
            `,
            values: [inputData]
        };

        const result = await this.client.query(preparedQuery);

        if (!result.rows) return null;

        return result.rows;
    };
}

const ErrorTicket = new ErrorTicketDataMapper(client);

export { ErrorTicket };
