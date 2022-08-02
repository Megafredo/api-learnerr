//~Import module
import request from 'supertest';
import { app } from '../../../index.js';

const path = '/api/v1/users/1';

const data = {
    username: 'Yumedo',
    email: 'yumeeyuzfgzeut0@survivor.com',
    password: 'N6yaa',
    passwordConfirm: 'N6yaa'
};

describe(`\x1b[1;42;34m🩺  Integration Test - PATCH PATH \x1b[0m`, () => {

        it(`Should return expected status code received`, async () => {
            const { statusCode, text } = await request(app).patch(`${path}`).send(data);

            console.log('\x1b[1;103m statusCode & text: ', statusCode, text, '\x1b[0m');

            if (statusCode === 400) {
                expect(statusCode).toEqual(400);
                expect([`L'id doit être un nombre`, `Aucun utilisateur trouvé`, 'Donnée non valide', 'Aucun token trouvé']).toContain(JSON.parse(text).message);
            }

            if (statusCode === 401) {
                expect(statusCode).toEqual(401);
                expect(text).toContain(`Les mots de passe ne sont pas identiques`);
            }

            if (statusCode === 200) {
                expect(statusCode).toEqual(200);
                expect(text).toContain(`Les informations ont bien été mis à jour`);
            }
        });

});
