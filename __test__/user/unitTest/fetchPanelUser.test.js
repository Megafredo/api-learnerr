//~Import module
import request from 'supertest';
import { app } from '../../../index.js';

const path = '/api/v1/users/1/panel';
const { body, statusCode } = await request(app).get(`${path}`);

import { extendToBeType, exist } from '../../utils/utils.js';

//& Unit test

describe(`\x1b[1;107;34m📡  Unit Test - GET ${path} \x1b[0m`, () => {
    //? Corresponding user type Object
    describe(`  \x1b[1;4;94mCorresponding users type\x1b[0m`, () => {
        it('Should return an array of users objects', async () => {
            expect(body).toBeType('object');

        });
    });

    //& user existing Properties
    describe(`  \x1b[1;4;93mShould return existing property for user\x1b[0m`, () => {
        //? Corresponding existing Properties of user
        it('Should return existing user property', async () => {
            const properties = [
                'id',
                'username',
                'title',
                'presentation',
                'profile_pic_url',
                'linkedin_url',
                'github_url',
                'instagram_url',
                'twitter_url',
                'portfolio_url',
                'last_4_articles_interactions',
                'last_4_errors_interactions',
                'user_articles',
                'user_errors'
            ];

            exist(body, properties);
        });
    });

    //? Corresponding type of property for a user
    describe(`  \x1b[1;4;94mCorresponding type of property for a user\x1b[0m`, () => {
        it(`Should return corresponding type of number for 'id'`, async () => {
            expect(body.id).toBeType('number');
        });
        it(`Should return corresponding type of string for 'username'`, async () => {
            expect(body.username).toBeType('string');
        });
        it(`Should return corresponding type of string for 'title'`, async () => {
            expect(body.title).toBeType('string');
        });
        it(`Should return corresponding type of string for 'presentation'`, async () => {
            expect(body.presentation).toBeType('string');
        });
        it(`Should return corresponding type of string for 'profile_pic_url'`, async () => {
            expect(body.profile_pic_url).toBeType('string');
        });
        it(`Should return corresponding type of string for 'linkedin_url'`, async () => {
            expect(body.linkedin_url).toBeType('string');
        });
        it(`Should return corresponding type of string for 'github_url'`, async () => {
            expect(body.github_url).toBeType('string');
        });
        it(`Should return corresponding type of string for 'instagram_url'`, async () => {
            expect(body.instagram_url).toBeType('string');
        });
        it(`Should return corresponding type of string for 'twitter_url'`, async () => {
            expect(body.twitter_url).toBeType('string');
        });
        it(`Should return corresponding type of string for 'portfolio_url'`, async () => {
            expect(body.portfolio_url).toBeType('string');
        });
    });

    //? Corresponding type of property for a last_4_articles_interactions
    describe(`  \x1b[1;4;94mCorresponding type of property for a last_4_articles_interactions\x1b[0m`, () => {
        //? Corresponding last_4_articles_interactions type Array
        describe(`  \x1b[1;4;94mCorresponding last_4_articles_interactions type\x1b[0m`, () => {
            it('Should return an array of last_4_articles_interactions array', async () => {
                expect(body['last_4_articles_interactions']).toBeType('array');
            });
        });

        //? Corresponding last_4_articles_interaction type Object
        describe(`  \x1b[1;4;94mCorresponding last_4_articles_interaction type\x1b[0m`, () => {
            it('Should return an object of last_4_articles_interaction objects', async () => {
                expect(body['last_4_articles_interactions'][0]).toBeType('object');
            });
        });

        //& user existing Properties
        describe(`  \x1b[1;4;93mShould return existing property for last_4_articles_interaction\x1b[0m`, () => {
            //? Corresponding existing Properties of last_4_articles_interaction
            it('Should return existing last_4_articles_interaction property', async () => {
                const properties = ['id', 'title', 'abstract', 'content', 'created_at', 'categories', 'cheers_count', 'user', 'comments', 'user_last_comment_id'];

                exist(body['last_4_articles_interactions'][0], properties);
            });
        });

        //? Corresponding type of property for a last_4_articles_interaction
        describe(`  \x1b[1;4;94mCorresponding type of property for a last_4_articles_interaction\x1b[0m`, () => {
            it(`Should return corresponding type of number for 'id'`, async () => {
                expect(body['last_4_articles_interactions'][0].id).toBeType('number');
            });
            it(`Should return corresponding type of string for 'title'`, async () => {
                expect(body['last_4_articles_interactions'][0].title).toBeType('string');
            });
            it(`Should return corresponding type of string for 'abstract'`, async () => {
                expect(body['last_4_articles_interactions'][0].abstract).toBeType('string');
            });
            it(`Should return corresponding type of string for 'content'`, async () => {
                expect(body['last_4_articles_interactions'][0].content).toBeType('string');
            });
            it(`Should return corresponding type of string for 'created_at'`, async () => {
                expect(body['last_4_articles_interactions'][0].created_at).toBeType('string');
            });

            //! categories
            describe(`  \x1b[1;4;94mCorresponding property for a last_4_articles_interaction / categories \x1b[0m`, () => {
                it(`Should return corresponding property array for 'categories'`, async () => {
                    expect(body['last_4_articles_interactions'][0].comments).toBeType('array'); // undefined
                });

                describe(`  \x1b[1;4;94mCorresponding type of property for a last_4_articles_interaction / categories \x1b[0m`, () => {
                    it(`Should return corresponding type of property for last_4_articles_interaction / 'categories'`, async () => {
                        typeof body['last_4_articles_interactions'][0].categories[0] === 'undefined'
                            ? expect(body['last_4_articles_interactions'][0].categories[0]).toBeType('undefined')
                            : expect(body['last_4_articles_interactions'][0].categories[0]).toBeType('string');
                    });
                });
            });

            it(`Should return corresponding type of number for 'cheers_count'`, async () => {
                expect(body['last_4_articles_interactions'][0].cheers_count).toBeType('number');
            });

            //! author
            describe(`  \x1b[1;4;94mCorresponding property for a last_4_articles_interaction / author \x1b[0m`, () => {
                it(`Should return corresponding type of object for 'user'`, async () => {
                    expect(body['last_4_articles_interactions'][0].user).toBeType('object');
                });

                //& user existing Properties
                describe(`  \x1b[1;4;93mShould return existing property for last_4_articles_interaction / user \x1b[0m`, () => {
                    //? Corresponding existing Properties of last_4_articles_interaction / user
                    it('Should return existing last_4_articles_interaction / user property', async () => {
                        const properties = ['id', 'username', 'title', 'profile_pic_url'];

                        exist(body['last_4_articles_interactions'][0].user, properties);
                    });
                });

                //? Corresponding type of property for a last_4_articles_interaction / user
                describe(`  \x1b[1;4;94mCorresponding type of property for a last_4_articles_interaction / user \x1b[0m`, () => {
                    it(`Should return corresponding type of number for 'id'`, async () => {
                        expect(body['last_4_articles_interactions'][0]['user'].id).toBeType('number');
                    });
                    it(`Should return corresponding type of string for 'title'`, async () => {
                        expect(body['last_4_articles_interactions'][0]['user'].username).toBeType('string');
                    });
                    it(`Should return corresponding type of string for 'abstract'`, async () => {
                        expect(body['last_4_articles_interactions'][0]['user'].title).toBeType('string');
                    });
                    it(`Should return corresponding type of string for 'content'`, async () => {
                        expect(body['last_4_articles_interactions'][0]['user'].profile_pic_url).toBeType('string');
                    });
                });
            });

            //! comments
            describe(`  \x1b[1;4;94mCorresponding property for a last_4_articles_interaction / comments \x1b[0m`, () => {
                it(`Should return corresponding type of array for 'comments'`, async () => {
                    expect(body['last_4_articles_interactions'][0].comments).toBeType('array');
                });

                describe(`  \x1b[1;4;94mCorresponding property for a last_4_articles_interaction / comments[0] \x1b[0m`, () => {
                    it(`Should return corresponding type of property of 'object'`, async () => {
                        expect(body['last_4_articles_interactions'][0].comments[0]).toBeType('object');
                    });

                    //& user existing Properties
                    describe(`  \x1b[1;4;93mShould return existing property for last_4_articles_interaction / comments[0] \x1b[0m`, () => {
                        //? Corresponding existing Properties of last_4_articles_interaction / comments[0]
                        it('Should return existing last_4_articles_interaction / comments[0] property', async () => {
                            const properties = ['id', 'content', 'created_at', 'cheers_count', 'user'];

                            exist(body['last_4_articles_interactions'][0].comments[0], properties);
                        });
                    });

                    //? Corresponding type of property for a last_4_articles_interaction / comments[0]
                    describe(`  \x1b[1;4;94mCorresponding type of property for a last_4_articles_interaction / comments[0] \x1b[0m`, () => {
                        it(`Should return corresponding type of number for 'id'`, async () => {
                            expect(body['last_4_articles_interactions'][0].comments[0].id).toBeType('number');
                        });
                        it(`Should return corresponding type of string for 'title'`, async () => {
                            expect(body['last_4_articles_interactions'][0].comments[0].content).toBeType('string');
                        });
                        it(`Should return corresponding type of string for 'abstract'`, async () => {
                            expect(body['last_4_articles_interactions'][0].comments[0].created_at).toBeType('string');
                        });
                        it(`Should return corresponding type of number for 'content'`, async () => {
                            expect(body['last_4_articles_interactions'][0].comments[0].cheers_count).toBeType('number');
                        });

                        //! Author comments (comments[0].user)
                        describe(`  \x1b[1;4;94mCorresponding property for a last_4_articles_interaction / comments[0].user \x1b[0m`, () => {
                            it(`Should return corresponding type of object for 'content'`, async () => {
                                expect(body['last_4_articles_interactions'][0].comments[0].user).toBeType('object');
                            });

                            //& user existing Properties
                            describe(`  \x1b[1;4;93mShould return existing property for last_4_articles_interaction / comments[0].user \x1b[0m`, () => {
                                //? Corresponding existing Properties of last_4_articles_interaction / comments[0].user
                                it('Should return existing last_4_articles_interaction / comments[0].user property', async () => {
                                    const properties = ['id', 'username', 'title', 'profile_pic_url'];

                                    exist(body['last_4_articles_interactions'][0].comments[0].user, properties);
                                });
                            });

                            //? Corresponding type of property for a last_4_articles_interaction / comments[0].user[0]
                            describe(`  \x1b[1;4;94mCorresponding type of property for a last_4_articles_interaction / comments[0].user \x1b[0m`, () => {
                                it(`Should return corresponding type of number for 'id'`, async () => {
                                    expect(body['last_4_articles_interactions'][0].comments[0]['user'].id).toBeType('number');
                                });
                                it(`Should return corresponding type of string for 'title'`, async () => {
                                    expect(body['last_4_articles_interactions'][0].comments[0]['user'].username).toBeType('string');
                                });
                                it(`Should return corresponding type of string for 'abstract'`, async () => {
                                    expect(body['last_4_articles_interactions'][0].comments[0]['user'].title).toBeType('string');
                                });
                                it(`Should return corresponding type of string for 'content'`, async () => {
                                    expect(body['last_4_articles_interactions'][0].comments[0]['user'].profile_pic_url).toBeType('string');
                                });
                            });
                        });
                    });
                });

                it(`Should return corresponding type of array for 'comments'`, async () => {
                    typeof body['last_4_articles_interactions'][0].comments === 'undefined' ? expect(body['last_4_articles_interactions'][0].comments).toBeType('undefined') : expect(body['last_4_articles_interactions'][0].comments).toBeType('array');
                });
            });

            it(`Should return corresponding type of string for 'user_last_comment_id'`, async () => {
                expect(body['last_4_articles_interactions'][0].user_last_comment_id).toBeType('number');
            });
        });
    });

    // check LAST ERROR TICKET
    //? Corresponding type of property for a last_4_errors_interactions
    describe(`  \x1b[1;4;94mCorresponding type of property for a last_4_errors_interactions\x1b[0m`, () => {



            //? Corresponding last_4_errors_interactions type Array
            describe(`  \x1b[1;4;94mCorresponding last_4_errors_interactions type\x1b[0m`, () => {
                it('Should return an array of last_4_errors_interactions array', async () => {
                    expect(body['last_4_errors_interactions']).toBeType('array');
                });
            });
    
            //? Corresponding last_4_errors_interactions type Object
            describe(`  \x1b[1;4;94mCorresponding last_4_errors_interactions type\x1b[0m`, () => {
                it('Should return an object of last_4_errors_interactions objects', async () => {
                    expect(body['last_4_errors_interactions'][0]).toBeType('object');
                });
            });
    
            //& user existing Properties
            describe(`  \x1b[1;4;93mShould return existing property for last_4_errors_interactions\x1b[0m`, () => {
                //? Corresponding existing Properties of last_4_errors_interactions
                it('Should return existing last_4_errors_interactions property', async () => {
                    const properties = ['id', 'title', 'abstract','error_snippet', 'content', 'created_at', 'categories', 'cheers_count', 'user', 'comments', 'user_last_comment_id'];
    
                    exist(body['last_4_errors_interactions'][0], properties);
                });
            });
    
            //? Corresponding type of property for a last_4_errors_interactions
            describe(`  \x1b[1;4;94mCorresponding type of property for a last_4_errors_interactions\x1b[0m`, () => {
                it(`Should return corresponding type of number for 'id'`, async () => {
                    expect(body['last_4_errors_interactions'][0].id).toBeType('number');
                });
                it(`Should return corresponding type of string for 'title'`, async () => {
                    expect(body['last_4_errors_interactions'][0].title).toBeType('string');
                });
                it(`Should return corresponding type of string for 'abstract'`, async () => {
                    expect(body['last_4_errors_interactions'][0].abstract).toBeType('string');
                });
                it(`Should return corresponding type of string for 'abstract'`, async () => {
                    expect(body['last_4_errors_interactions'][0].error_snippet).toBeType('string');
                });
                it(`Should return corresponding type of string for 'content'`, async () => {
                    expect(body['last_4_errors_interactions'][0].content).toBeType('string');
                });
                it(`Should return corresponding type of string for 'created_at'`, async () => {
                    expect(body['last_4_errors_interactions'][0].created_at).toBeType('string');
                });
    
                //! categories
                describe(`  \x1b[1;4;94mCorresponding property for a last_4_errors_interactions / categories \x1b[0m`, () => {
                    it(`Should return corresponding property array for 'categories'`, async () => {
                        expect(body['last_4_errors_interactions'][0].comments).toBeType('array'); // undefined
                    });
    
                    describe(`  \x1b[1;4;94mCorresponding type of property for a last_4_errors_interactions / categories \x1b[0m`, () => {
                        it(`Should return corresponding type of property for last_4_errors_interactions / 'categories'`, async () => {
                            typeof body['last_4_errors_interactions'][0].categories[0] === 'undefined'
                                ? expect(body['last_4_errors_interactions'][0].categories[0]).toBeType('undefined')
                                : expect(body['last_4_errors_interactions'][0].categories[0]).toBeType('string');
                        });
                    });
                });
    
                it(`Should return corresponding type of number for 'cheers_count'`, async () => {
                    expect(body['last_4_errors_interactions'][0].cheers_count).toBeType('number');
                });
    
                //! author
                describe(`  \x1b[1;4;94mCorresponding property for a last_4_errors_interactions / author \x1b[0m`, () => {
                    it(`Should return corresponding type of object for 'user'`, async () => {
                        expect(body['last_4_errors_interactions'][0].user).toBeType('object');
                    });
    
                    //& user existing Properties
                    describe(`  \x1b[1;4;93mShould return existing property for last_4_errors_interactions / user \x1b[0m`, () => {
                        //? Corresponding existing Properties of last_4_errors_interactions / user
                        it('Should return existing last_4_errors_interactions / user property', async () => {
                            const properties = ['id', 'username', 'title', 'profile_pic_url'];
    
                            exist(body['last_4_errors_interactions'][0].user, properties);
                        });
                    });
    
                    //? Corresponding type of property for a last_4_errors_interactions / user
                    describe(`  \x1b[1;4;94mCorresponding type of property for a last_4_errors_interactions / user \x1b[0m`, () => {
                        it(`Should return corresponding type of number for 'id'`, async () => {
                            expect(body['last_4_errors_interactions'][0]['user'].id).toBeType('number');
                        });
                        it(`Should return corresponding type of string for 'title'`, async () => {
                            expect(body['last_4_errors_interactions'][0]['user'].username).toBeType('string');
                        });
                        it(`Should return corresponding type of string for 'abstract'`, async () => {
                            expect(body['last_4_errors_interactions'][0]['user'].title).toBeType('string');
                        });
                        it(`Should return corresponding type of string for 'content'`, async () => {
                            expect(body['last_4_errors_interactions'][0]['user'].profile_pic_url).toBeType('string');
                        });
                    });
                });
    
                //! comments
                describe(`  \x1b[1;4;94mCorresponding property for a last_4_errors_interactions / comments \x1b[0m`, () => {
                    it(`Should return corresponding type of array for 'comments'`, async () => {
                        expect(body['last_4_errors_interactions'][0].comments).toBeType('array');
                    });
    
                    describe(`  \x1b[1;4;94mCorresponding property for a last_4_errors_interactions / comments[0] \x1b[0m`, () => {
                        it(`Should return corresponding type of property of 'object'`, async () => {
                            expect(body['last_4_errors_interactions'][0].comments[0]).toBeType('object');
                        });
    
                        //& user existing Properties
                        describe(`  \x1b[1;4;93mShould return existing property for last_4_errors_interactions / comments[0] \x1b[0m`, () => {
                            //? Corresponding existing Properties of last_4_error_interaction / comments[0]
                            it('Should return existing last_4_errors_interactions / comments[0] property', async () => {
                                const properties = ['id', 'content', 'created_at', 'cheers_count', 'user'];
    
                                exist(body['last_4_errors_interactions'][0].comments[0], properties);
                            });
                        });
    
                        //? Corresponding type of property for a last_4_errors_interactions / comments[0]
                        describe(`  \x1b[1;4;94mCorresponding type of property for a last_4_errors_interactions / comments[0] \x1b[0m`, () => {
                            it(`Should return corresponding type of number for 'id'`, async () => {
                                expect(body['last_4_errors_interactions'][0].comments[0].id).toBeType('number');
                            });
                            it(`Should return corresponding type of string for 'title'`, async () => {
                                expect(body['last_4_errors_interactions'][0].comments[0].content).toBeType('string');
                            });
                            it(`Should return corresponding type of string for 'abstract'`, async () => {
                                expect(body['last_4_errors_interactions'][0].comments[0].created_at).toBeType('string');
                            });
                            it(`Should return corresponding type of number for 'content'`, async () => {
                                expect(body['last_4_errors_interactions'][0].comments[0].cheers_count).toBeType('number');
                            });
    
                            //! Author comments (comments[0].user)
                            describe(`  \x1b[1;4;94mCorresponding property for a last_4_errors_interactions / comments[0].user \x1b[0m`, () => {
                                it(`Should return corresponding type of object for 'content'`, async () => {
                                    expect(body['last_4_errors_interactions'][0].comments[0].user).toBeType('object');
                                });
    
                                //& user existing Properties
                                describe(`  \x1b[1;4;93mShould return existing property for last_4_errors_interactions / comments[0].user \x1b[0m`, () => {
                                    //? Corresponding existing Properties of last_4_errors_interactions / comments[0].user
                                    it('Should return existing last_4_errors_interactions / comments[0].user property', async () => {
                                        const properties = ['id', 'username', 'title', 'profile_pic_url'];
    
                                        exist(body['last_4_errors_interactions'][0].comments[0].user, properties);
                                    });
                                });
    
                                //? Corresponding type of property for a last_4_errors_interaction / comments[0].user[0]
                                describe(`  \x1b[1;4;94mCorresponding type of property for a last_4_errors_interactions / comments[0].user \x1b[0m`, () => {
                                    it(`Should return corresponding type of number for 'id'`, async () => {
                                        expect(body['last_4_errors_interactions'][0].comments[0]['user'].id).toBeType('number');
                                    });
                                    it(`Should return corresponding type of string for 'title'`, async () => {
                                        expect(body['last_4_errors_interactions'][0].comments[0]['user'].username).toBeType('string');
                                    });
                                    it(`Should return corresponding type of string for 'abstract'`, async () => {
                                        expect(body['last_4_errors_interactions'][0].comments[0]['user'].title).toBeType('string');
                                    });
                                    it(`Should return corresponding type of string for 'content'`, async () => {
                                        expect(body['last_4_errors_interactions'][0].comments[0]['user'].profile_pic_url).toBeType('string');
                                    });
                                });
                            });
                        });
                    });
    
                    it(`Should return corresponding type of array for 'comments'`, async () => {
                        typeof body['last_4_errors_interactions'][0].comments === 'undefined' ? expect(body['last_4_errors_interactions'][0].comments).toBeType('undefined') : expect(body['last_4_errors_interactions'][0].comments).toBeType('array');
                    });
                });
    
                it(`Should return corresponding type of string for 'user_last_comment_id'`, async () => {
                    expect(body['last_4_errors_interactions'][0].user_last_comment_id).toBeType('number');
                });
            });
        });




    //? Corresponding type of property for a user_articles
    describe(`  \x1b[1;4;94mCorresponding type of property for a user_articles\x1b[0m`, () => {

        //? Corresponding user_articles type Array
        describe(`  \x1b[1;4;94mCorresponding users_articles type\x1b[0m`, () => {
            it('Should return an array of users_articles', async () => {
                expect(body['user_articles']).toBeType('array');
            });
        });

        //& user_articles[0] existing Properties
        describe(`  \x1b[1;4;93mShould return existing property for user_articles[0] \x1b[0m`, () => {
            //? Corresponding existing Properties of user_articles[0]
            it('Should return existing user_articles property', async () => {
                const properties = ['id', 'title', 'abstract', 'status_id', 'created_at', 'categories', 'comments_count', 'cheers_count'];

                exist(body['user_articles'][0], properties);
            });
        });


         //? Corresponding type of property for a user_articles
         describe(`  \x1b[1;4;94mCorresponding type of property for a user_articles \x1b[0m`, () => {
            it(`Should return corresponding type of number for 'id'`, async () => {
                expect(body['user_articles'][0].id).toBeType('number');
            });
            it(`Should return corresponding type of string for 'title'`, async () => {
                expect(body['user_articles'][0].title).toBeType('string');
            });
            it(`Should return corresponding type of string for 'abstract'`, async () => {
                expect(body['user_articles'][0].abstract).toBeType('string');
            });
            it(`Should return corresponding type of string for 'status_id'`, async () => {
                expect(body['user_articles'][0].status_id).toBeType('number');
            });
            it(`Should return corresponding type of string for 'created_at'`, async () => {
                expect(body['user_articles'][0].created_at).toBeType('string');
            });

             //! user_articles categories
             describe(`  \x1b[1;4;94mCorresponding property for a user_articles / categories \x1b[0m`, () => {
                it(`Should return corresponding property array for 'categories'`, async () => {
                    expect(body['user_articles'][0].categories).toBeType('array');
                });

                describe(`  \x1b[1;4;94mCorresponding type of property for a user_articles / categories \x1b[0m`, () => {
                    it(`Should return corresponding type of property for user_articles / 'categories'`, async () => {
                        typeof body['last_4_articles_interactions'][0].categories[0] === 'undefined'
                            ? expect(body['user_articles'][0].categories[0]).toBeType('undefined')
                            : expect(body['user_articles'][0].categories[0]).toBeType('string');
                    });
                });
            });

            it(`Should return corresponding type of string for 'cheers_count'`, async () => {
                expect(body['user_articles'][0].comments_count).toBeType('number');
            });

            it(`Should return corresponding type of string for 'cheers_count'`, async () => {
                expect(body['user_articles'][0].cheers_count).toBeType('number');
            });
        });

    });

    //? Corresponding type of property for a user_errors
    describe(`  \x1b[1;4;94mCorresponding type of property for a user_errors\x1b[0m`, () => {

         //? Corresponding user_errors type Array
         describe(`  \x1b[1;4;94mCorresponding users_errors type\x1b[0m`, () => {
            it('Should return an array of users_errors', async () => {
                expect(body['user_errors']).toBeType('array');
            });
        });

        //& user_errors[0] existing Properties
        describe(`  \x1b[1;4;93mShould return existing property for user_errors[0] \x1b[0m`, () => {
            //? Corresponding existing Properties of user_errors[0]
            it('Should return existing user_errors property', async () => {
                const properties = ['id', 'title', 'abstract','error_snippet', 'status_id', 'created_at', 'categories', 'comments_count', 'cheers_count'];

                exist(body['user_errors'][0], properties);
            });
        });


         //? Corresponding type of property for a user_errors
         describe(`  \x1b[1;4;94mCorresponding type of property for a user_errors \x1b[0m`, () => {
            it(`Should return corresponding type of number for 'id'`, async () => {
                expect(body['user_errors'][0].id).toBeType('number');
            });
            it(`Should return corresponding type of string for 'title'`, async () => {
                expect(body['user_errors'][0].title).toBeType('string');
            });
            it(`Should return corresponding type of string for 'abstract'`, async () => {
                expect(body['user_errors'][0].abstract).toBeType('string');
            });
            it(`Should return corresponding type of string for 'error_snippet'`, async () => {
                expect(body['user_errors'][0].error_snippet).toBeType('string');
            });
            it(`Should return corresponding type of string for 'status_id'`, async () => {
                expect(body['user_errors'][0].status_id).toBeType('number');
            });
            it(`Should return corresponding type of string for 'created_at'`, async () => {
                expect(body['user_errors'][0].created_at).toBeType('string');
            });

             //! user_errors categories
             describe(`  \x1b[1;4;94mCorresponding property for a user_errors / categories \x1b[0m`, () => {
                it(`Should return corresponding property array for 'categories'`, async () => {
                    expect(body['user_errors'][0].categories).toBeType('array');
                });

                describe(`  \x1b[1;4;94mCorresponding type of property for a user_errors / categories \x1b[0m`, () => {
                    it(`Should return corresponding type of property for user_errors / 'categories'`, async () => {
                        typeof body['last_4_errors_interactions'][0].categories[0] === 'undefined'
                            ? expect(body['user_errors'][0].categories[0]).toBeType('undefined')
                            : expect(body['user_errors'][0].categories[0]).toBeType('string');
                    });
                });
            });

            it(`Should return corresponding type of string for 'cheers_count'`, async () => {
                expect(body['user_errors'][0].comments_count).toBeType('number');
            });

            it(`Should return corresponding type of string for 'cheers_count'`, async () => {
                expect(body['user_errors'][0].cheers_count).toBeType('number');
            });
        });


    });
});