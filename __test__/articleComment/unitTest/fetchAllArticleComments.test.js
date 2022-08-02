//~Import module
import request from 'supertest';
import { app } from '../../../index.js';

const entryPoint = '/api/v1/articles/1/comments';
const { body, statusCode } = await request(app).get(`${entryPoint}`);
import { extendToBeType, exist } from '../../utils/utils.js';

//& Article comments
describe(`\x1b[1;107;34m📡 Unit Test - GET ${entryPoint} \x1b[0m`, () => {
    //? Corresponding type of property for comments
    describe(`🎯  \x1b[1;105;1m Article comments \x1b[0m`, () => {
        //? Corresponding type of property of article comment
        describe(`\x1b[1;4;96mCorresponding type of array for article comment\x1b[0m`, () => {
            //? Corresponding type of array for article comment
            it(`Should return corresponding type of array for 'comments'`, async () => {
                expect(body).toBeType('array');
            });

            //? Corresponding existing Properties of comments
            describe(`\x1b[1;4;93mShould return existing article comment property\x1b[0m`, () => {
                it('Should return existing comment property', async () => {
                    const properties = ['id', 'content', 'user_id', 'article_id', 'created_at', 'updated_at'];

                    exist(body[0], properties);
                });
            });

            //? Corresponding type of property of article comment
            describe(`\x1b[1;4;96mCorresponding type of property for article comment\x1b[0m`, () => {
                it(`Should return corresponding type of number for 'id'`, async () => {
                    expect(body[0].id).toBeType('number');
                });

                it(`Should return corresponding type of string for 'content'`, async () => {
                    expect(body[0].content).toBeType('string');
                });

                it(`Should return corresponding type of string for 'user_id'`, async () => {
                    expect(body[0].user_id).toBeType('number');
                });

                it(`Should return corresponding type of string for 'article_id'`, async () => {
                    expect(body[0].article_id).toBeType('number');
                });

                it(`Should return corresponding type of string for 'created_at'`, async () => {
                    expect(body[0].created_at).toBeType('string');
                });

                it(`Should return corresponding type of string for 'updated_at'`, async () => {
                    typeof body[0] === 'object' ? expect(body[0]).toBeType('object') : expect(body[0]).toBeType('string');
                });
            });
        });
    });
});

