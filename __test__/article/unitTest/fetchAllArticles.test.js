//~Import module
import request from 'supertest';
import { app } from '../../../index.js';

const entryPoint = '/api/v1/articles';
const { body, statusCode } = await request(app).get(`${entryPoint}`);
import { extendToBeType, exist } from '../../utils/utils.js';

//& Unit test
describe(`\x1b[1;107;34m📡 Unit Test - GET ${entryPoint} \x1b[0m`, () => {
    //? Corresponding article type
    describe(`  \x1b[1;4;94mCorresponding articles type\x1b[0m`, () => {
        it('Should return an array of articles objects', async () => {
            expect(body).toBeType('array');
        });
    });

    //? Corresponding article property
    describe(`  \x1b[1;4;94mCorresponding article property\x1b[0m`, () => {
        it('Should return existing article property', async () => {
            expect(body[0]).toBeType('object');
        });
    });

    //& Article existing Properties
    describe(`  \x1b[1;4;93mShould return existing property for article\x1b[0m`, () => {
        //? Corresponding existing Properties of articles
        it('Should return existing article property', async () => {
            const properties = ['id', 'title', 'abstract', 'content', 'created_at', 'categories', 'user', 'comments'];

            exist(body[0], properties);
        });
    });

    //& Corresponding Article type of Properties
    //? Corresponding type of property
    describe(`  \x1b[1;4;94mCorresponding type of property for an article\x1b[0m`, () => {
        it(`Should return corresponding type of number for 'id'`, async () => {
            expect(body[0].id).toBeType('number');
        });

        it(`Should return corresponding type of string for 'title'`, async () => {
            expect(body[0].title).toBeType('string');
        });

        it(`Should return corresponding type of string for 'abstract'`, async () => {
            expect(body[0].abstract).toBeType('string');
        });

        it(`Should return corresponding type of string for 'content'`, async () => {
            expect(body[0].content).toBeType('string');
        });

        it(`Should return corresponding type of string for 'created_at'`, async () => {
            expect(body[0].created_at).toBeType('string');
        });

        //& Article - categories
        //? Corresponding type of property for category
        describe(`🎯  \x1b[1;105;1m Category of an article \x1b[0m`, () => {
            //? Corresponding category type
            describe(`\x1b[1;4;96mCorresponding category type\x1b[0m`, () => {
                it(`Should return corresponding type of array for 'categories'`, async () => {
                    expect(body[0].categories).toBeType('array');
                });
            });
            //? Corresponding type of property for category
            describe(`\x1b[1;4;96mCorresponding type of property for category\x1b[0m`, () => {
                it(`Should return corresponding type of string for element in 'category'`, async () => {
                    typeof body[1].categories[0] === 'undefined' ? expect(body[1].categories[0]).toBeType('undefined') : expect(body[1].categories[0]).toBeType('string');
                });
            });
        });

        //& Article - author
        //? Corresponding type of property for author
        describe(`🎯  \x1b[1;105;1m Article author \x1b[0m`, () => {
            //? Corresponding type of object for article author
            describe(`\x1b[1;4;96mCorresponding type of object for article author\x1b[0m`, () => {
                it(`Should return corresponding type of object for 'author'`, async () => {
                    expect(body[0]['user']).toBeType('object');
                });

                //? Corresponding existing Properties of author
                describe(`\x1b[1;4;93mShould return existing property for article author\x1b[0m`, () => {
                    it('Should return existing author property', async () => {
                        const properties = ['id', 'username', 'title', 'profile_pic_url'];

                        exist(body[0]['user'], properties);
                    });
                });

                //? Corresponding type of property of article author
                describe(`\x1b[1;4;96mCorresponding type of property for article author\x1b[0m`, () => {
                    it(`Should return corresponding type of number for 'id'`, async () => {
                        expect(body[0]['user'].id).toBeType('number');
                    });

                    it(`Should return corresponding type of string for 'username'`, async () => {
                        expect(body[0]['user'].username).toBeType('string');
                    });

                    it(`Should return corresponding type of string for 'title'`, async () => {
                        expect(body[0]['user'].title).toBeType('string');
                    });

                    it(`Should return corresponding type of string for 'profile_pic_url'`, async () => {
                        expect(body[0]['user'].profile_pic_url).toBeType('string');
                    });
                });
            });
        });

        //& Article comments
        //? Corresponding type of property for comments
        describe(`🎯  \x1b[1;105;1m Article comments \x1b[0m`, () => {
            //? Corresponding type of property of article comment
            describe(`\x1b[1;4;96mCorresponding type of array for article comment\x1b[0m`, () => {
                //? Corresponding type of array for article comment
                it(`Should return corresponding type of array for 'comments'`, async () => {
                    expect(body[0]['comments']).toBeType('array');
                });

                //? Corresponding existing Properties of comments
                describe(`\x1b[1;4;93mShould return existing article comment property\x1b[0m`, () => {
                    it('Should return existing comment property', async () => {
                        const properties = ['id', 'content', 'created_at', 'user'];

                        exist(body[0]['comments'][0], properties);
                    });
                });

                //? Corresponding type of property of article comment
                describe(`\x1b[1;4;96mCorresponding type of property for article comment\x1b[0m`, () => {
                    it(`Should return corresponding type of number for 'id'`, async () => {
                        expect(body[0]['comments'][0].id).toBeType('number');
                    });

                    it(`Should return corresponding type of string for 'content'`, async () => {
                        expect(body[0]['comments'][0].content).toBeType('string');
                    });

                    it(`Should return corresponding type of string for 'created_at'`, async () => {
                        expect(body[0]['comments'][0].created_at).toBeType('string');
                    });
                });
            });

            //& Article - comments - user
            //? Corresponding type of property for user comment
            describe(`🎯  \x1b[1;105;1m Article user comment \x1b[0m`, () => {
                //? Corresponding type of property of user comment
                describe(`\x1b[1;4;96mCorresponding type of object for user comment\x1b[0m`, () => {
                    it(`Should return corresponding type of object for 'user'`, async () => {
                        expect(body[0]['comments'][0]['user']).toBeType('object');
                    });

                    //? Corresponding existing Properties of user comment
                    describe(`\x1b[1;4;93mShould return existing user's comment property\x1b[0m`, () => {
                        it('Should return existing user comment property', async () => {
                            const properties = ['id', 'username', 'title', 'profile_pic_url'];

                            exist(body[0]['comments'][0]['user'], properties);
                        });
                    });

                    //? Corresponding type of property of user comment
                    describe(`\x1b[1;4;96mCorresponding type of property for user comment\x1b[0m`, () => {
                        it(`Should return corresponding type of number for 'id'`, async () => {
                            expect(body[0]['comments'][0]['user'].id).toBeType('number');
                        });

                        it(`Should return corresponding type of string for 'username'`, async () => {
                            expect(body[0]['comments'][0]['user'].username).toBeType('string');
                        });

                        it(`Should return corresponding type of string for 'title'`, async () => {
                            expect(body[0]['comments'][0]['user'].title).toBeType('string');
                        });

                        it(`Should return corresponding type of string for 'profile_pic_url'`, async () => {
                            expect(body[0]['comments'][0]['user'].profile_pic_url).toBeType('string');
                        });
                    });
                });
            });
        });
    });
});