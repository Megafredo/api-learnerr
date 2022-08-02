//~Import module
import request from 'supertest';
import { app } from '../../../index.js';

const path = '/api/v1/users/1';

const data = { is_active: false };

const { statusCode, text } = await request(app).put(`${path}`).send(data);

//& Put integration test
describe(`\x1b[1;42;34m🩺  Integration Test - PUT PATH \x1b[0m`, () => {

    it(`Should return correct status code received \x1b[1;32m${statusCode}\x1b[0m  : 200(OK)/400(BAD REQUEST)`, async () => {
        
        console.log("\x1b[1;103m statusCode & text: ", statusCode, text, '\x1b[0m')
        
        statusCode === 400 ?
            (expect(statusCode).toEqual(400),
                expect(['Aucun utilisateur trouvé', `L'id doit être un nombre`, `Aucun token trouvé`, `L'information is_active doit être renseigné`]).toContain(JSON.parse(text).message)) :
            (expect(statusCode).toEqual(200),
                expect([`L'utilisateur a bien été activé`, `L'utilisateur a bien été désactivé`]).toContain(JSON.parse(text)));
    });
});


