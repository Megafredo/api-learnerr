//~Import module
import request from 'supertest';
import { app } from '../../../index.js';

const entryPoint = '/api/v1/errors/1/comments';
const { body, statusCode } = await request(app).get(`${entryPoint}`);
import { extendToBeType, exist } from '../../utils/utils.js';


//& Integration test

//? StatusCode 200
test('fetchAllerrorComment StatusCode 200', async () => {
    expect(statusCode).toEqual(200);
});