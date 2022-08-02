//~Import module
import request from 'supertest';
import { app } from '../../../index.js';

const entryPoint = '/api/v1/articles';
const { body, statusCode } = await request(app).get(`${entryPoint}`);
import { extendToBeType, exist } from '../../utils/utils.js';


//& Integration test

//? StatusCode 200
test('fetchAllArticles StatusCode 200', async () => {
    expect(statusCode).toEqual(200);
});