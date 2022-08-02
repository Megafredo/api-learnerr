//~Import module
import request from 'supertest';
import { app } from '../../../index.js';

const path = '/api/v1/signout';

describe(`\x1b[1;107;34m📡  Integration Test - GET PATH \x1b[0m`, () => {

    it(`Should return expected status code received`, async () => {

        const { statusCode, text} = await request(app).get(`${path}`);
  
        statusCode === 400 ?
            (expect(statusCode).toEqual(400), expect(text).toContain('Aucun token trouvé')):
            expect(statusCode).toEqual(204);
    });
});

