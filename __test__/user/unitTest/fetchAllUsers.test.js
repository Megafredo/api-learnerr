//~Import module
import request from 'supertest';
import { app } from '../../../index.js';

const path = '/api/v1/users';
const { body, statusCode } = await request(app).get(`${path}`);
import { extendToBeType, exist } from '../../utils/utils.js';

//& Unit test

describe(`\x1b[1;107;34m📡  Unit Test - GET ${path} \x1b[0m`, () => {
    //? Corresponding user type
    describe(`  \x1b[1;4;94mCorresponding users type\x1b[0m`, () => {
        it('Should return an array of users objects', async () => {
            expect(body).toBeType('array');
        });
    });

    //? Corresponding user property
    describe(`  \x1b[1;4;94mCorresponding user property\x1b[0m`, () => {
        it('Should return an user object', async () => {
            expect(body[0]).toBeType('object');
        });
    });

    //& user existing Properties
    describe(`  \x1b[1;4;93mShould return existing property for user\x1b[0m`, () => {
        //? Corresponding existing Properties of user
        it('Should return existing user property', async () => {
            const properties = ['id', 'username', 'title', 'presentation', 'profile_pic_url', 'linkedin_url', 'github_url', 'instagram_url', 'twitter_url', 'portfolio_url'];

            exist(body[0], properties);
        });
    });

    //? Corresponding type of property for a user
    describe(`  \x1b[1;4;94mCorresponding type of property for a user\x1b[0m`, () => {
        it(`Should return corresponding type of number for 'id'`, async () => {
            expect(body[0].id).toBeType('number');
        });
        it(`Should return corresponding type of string for 'username'`, async () => {
            expect(body[0].username).toBeType('string');
        });
        it(`Should return corresponding type of string for 'title'`, async () => {
            expect(body[0].title).toBeType('string');
        });
        it(`Should return corresponding type of string for 'presentation'`, async () => {
            expect(body[0].presentation).toBeType('string');
        });
        it(`Should return corresponding type of string for 'profile_pic_url'`, async () => {
            expect(body[0].profile_pic_url).toBeType('string');
        });
        it(`Should return corresponding type of string for 'linkedin_url'`, async () => {
            expect(body[0].linkedin_url).toBeType('string');
        });
        it(`Should return corresponding type of string for 'github_url'`, async () => {
            expect(body[0].github_url).toBeType('string');
        });
        it(`Should return corresponding type of string for 'instagram_url'`, async () => {
            expect(body[0].instagram_url).toBeType('string');
        });
        it(`Should return corresponding type of string for 'twitter_url'`, async () => {
            expect(body[0].twitter_url).toBeType('string');
        });
        it(`Should return corresponding type of string for 'portfolio_url'`, async () => {
            expect(body[0].portfolio_url).toBeType('string');
        });
    });
});

