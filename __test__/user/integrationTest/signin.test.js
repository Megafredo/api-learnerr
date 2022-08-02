//~Import module
import request from 'supertest';
import { app } from '../../../index.js';
import { extendToBeType, exist } from '../../utils/utils.js';

const path = '/api/v1/signin';

const data = {
    email: 'yumedo100@survivor.com',
    password: 'N6y$Ozddzt=1aa'
};

describe(`\x1b[1;103m💌  Integration Test - POST ${path} \x1b[0m`, () => {

    it(`Should return expected status code received`, async () => {

        const { statusCode, text, body } = await request(app).post(`${path}`).send(data);

        statusCode === 401 ?
            (expect(statusCode).toEqual(401), expect([`L'utilisateur non reconnu !`, `L'email ou le mot de passe n'est pas valide`]).toContain(JSON.parse(text).message)) : 
            (statusCode === 200 ?
                (expect(statusCode).toEqual(200), expect(body).toBeType(`object`)) :
                (expect(statusCode).toEqual(400), expect(text).toContain('Donnée non valide')));
    });
});