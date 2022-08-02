//~Import module
import request from 'supertest';
import { app } from '../../../index.js';

const path = '/api/v1/users';
const { body, statusCode } = await request(app).get(`${path}`);

//& Integration test

//? StatusCode 200
describe(`\x1b[1;107;34m📡 Integration Test - GET ${path} \x1b[0m`, () => {
    it(`Should return correct status code received \x1b[1;32m${statusCode}\x1b[0m  : 200(OK)/400(BAD REQUEST)`, async () => {
        body.length === 0 ? (expect(statusCode).toEqual(400), expect(text).toContain('Aucun utilisateur trouvé')) : expect(statusCode).toEqual(200);
    });
});



// The HTTP status code
// The response payload
// The response headers
// The API performance/response time
