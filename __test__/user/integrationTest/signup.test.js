//~Import module
import request from 'supertest';
import { app } from '../../../index.js';

const path = '/api/v1/signup';

const data = {
    username: 'Yumedo',
    email: 'yumedo100@survivor.com',
    password: 'N6y$t=1aa',
    passwordConfirm: 'N6y$Ozddzt=1aa'
};

describe(`\x1b[1;103m💌  Integration Test - POST ${path} \x1b[0m`, () => {

    it(`Should return expected status code received`, async () => {

        const { statusCode, text } = await request(app).post(`${path}`).send(data);

        statusCode === 401 ?
            (expect(statusCode).toEqual(401), expect([ `L'utilisateur existe déjà !`,`Les mots de passe ne sont pas identiques`]).toContain(JSON.parse(text).message)) : 
            (statusCode === 201 ?
                (expect(statusCode).toEqual(201), expect(text).toContain(`L'utilisateur a bien été créé`)) :
                (expect(statusCode).toEqual(400), expect(text).toContain('Donnée non valide')));
    });
});

