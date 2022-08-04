//~Import module
import request from 'supertest';
import { app } from '../../../index.js';

const entryPoint = '/api/v1/categories';
const { body, statusCode } = await request(app).get(`${entryPoint}`);
import { extendToBeType, exist } from '../../utils/utils.js';

//~ Category

//& Unit test
describe(`\x1b[1;107;34m📡 Unit Test - GET ${entryPoint} \x1b[0m`, () => {
    //? Corresponding type
    describe(`  \x1b[1;4;94mCorresponding category type\x1b[0m`, () => {
        it('Should return an array of category objects', async () => {
            expect(body).toBeType('array');
        });
    });

    //? Corresponding 1 category property
    describe(`  \x1b[1;4;94mCorresponding category property\x1b[0m`, () => {
        it('Should return existing category property', async () => {
            expect(body[0]).toBeType('object');
        });
    });

    //& Category existing Properties
    describe(`  \x1b[1;4;93mShould return existing property for a category\x1b[0m`, () => {
        //? Corresponding existing Properties of category
        it('Should return existing category property', async () => {
            const properties = ['id', 'name', 'logo'];
            exist(body[0], properties);
        });
    });

    //? Corresponding type of property
    describe(`  \x1b[1;4;94mCorresponding type of property for an category\x1b[0m`, () => {
        it(`Should return corresponding type of number for 'id'`, async () => {
            expect(body[0].id).toBeType('number');
        });

        it(`Should return corresponding type of string for 'name'`, async () => {
            expect(body[0].name).toBeType('string');
        });

        it(`Should return corresponding type of string for 'logo'`, async () => {
            typeof body[0] === 'object' ? expect(body[0]).toBeType('object') : expect(body[0]).toBeType('string');
        });
    });
});
