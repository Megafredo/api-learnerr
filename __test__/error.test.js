//~Import module
import request from 'supertest';
import { app } from '../index.js';

const entryPoint = '/api/v1/errors';
const { body } = await request(app).get(`${entryPoint}`);
import {extendToBeType} from './extend.js';

//& Unit test 
describe(`\x1b[1;107;34m🧪  GET ${entryPoint} \x1b[0m`, () => {

  //? Corresponding article type
    describe(`  \x1b[1;4;94mCorresponding errors type\x1b[0m`, () => {
        it('Should return an array of errors objects', async () => {
            expect(body).toBeType('array');
        });
    });

  //? Corresponding article property
  describe(`  \x1b[1;4;94mCorresponding error property\x1b[0m`, () => {
  it('Should return existing error property', async () => {
    expect(body[0]).toBeType('object');
  });
});

  //& ErrorTicket existing Properties
    describe(`  \x1b[1;4;93mShould return existing property for errorTicket\x1b[0m`, () => {
      
      //? Corresponding existing Properties of articles
      it('Should return existing error property', async () => {
        expect(body[0]).toHaveProperty('id');
        expect(body[0]).toHaveProperty('title');
        expect(body[0]).toHaveProperty('abstract');
        expect(body[0]).toHaveProperty('error_snippet');
        expect(body[0]).toHaveProperty('content');
        expect(body[0]).toHaveProperty('created_at');
        expect(body[0]).toHaveProperty('categories');
        expect(body[0]).toHaveProperty('user');
        expect(body[0]).toHaveProperty('comments');
      });
  });

  //& Corresponding errorTicket type of Properties
  //? Corresponding type of property
    describe(`  \x1b[1;4;94mCorresponding type of property for an errorTicket\x1b[0m`, () => {
      
  it(`Should return corresponding type of number for 'id'`, async () => {
      expect(body[0].id).toBeType('number');
  });

  it(`Should return corresponding type of string for 'title'`, async () => {
      expect(body[0].title).toBeType('string');
  });

  it(`Should return corresponding type of string for 'abstract'`, async () => {
      expect(body[0].abstract).toBeType('string'); 
  });

  it(`Should return corresponding type of string for 'error_snippet'`, async () => {
    expect(body[0].error_snippet).toBeType('string'); 
});

  it(`Should return corresponding type of string for 'content'`, async () => {
      expect(body[0].content).toBeType('string');
  });

  it(`Should return corresponding type of string for 'created_at'`, async () => {
      expect(body[0].created_at).toBeType('string');
  });

  //& ErrorTicket - categories
  //? Corresponding type of property for category
  describe(`🎯  \x1b[1;105;1m Category of an error ticket \x1b[0m`, () => {

      //? Corresponding category type
      describe(`\x1b[1;4;96mCorresponding category type\x1b[0m`, () => {
          it(`Should return corresponding type of array for 'categories'`, async () => {
              expect(body[0].categories).toBeType('array');
          });
      });
      //? Corresponding type of property for category
      describe(`\x1b[1;4;96mCorresponding type of property for category\x1b[0m`, () => {
        it(`Should return corresponding type of string for element in 'category'`, async () => {
            expect(body[1].categories[0]).toBeType('string');
        });
      });
  });
    

    //& ErrorTicket - author
    //? Corresponding type of property for author
    describe(`🎯  \x1b[1;105;1m Error ticket author \x1b[0m`, () => {
      
 
      //? Corresponding existing Properties of author
      describe(`\x1b[1;4;93mShould return existing property for error ticket author\x1b[0m`, () => {
        it('Should return existing author property', async () => {
            expect(body[0]['user']).toHaveProperty('id');
            expect(body[0]['user']).toHaveProperty('username');
            expect(body[0]['user']).toHaveProperty('title');
            expect(body[0]['user']).toHaveProperty('profile_pic_url');
        });
      });
      
 
      //? Corresponding type of object for error ticket author
      describe(`\x1b[1;4;96mCorresponding type of object for error ticket author\x1b[0m`, () => {
        it(`Should return corresponding type of object for 'author'`, async () => {
            expect(body[0]['user']).toBeType('object');
        });


      //? Corresponding type of property of error ticket author
      describe(`\x1b[1;4;96mCorresponding type of property for error ticket author\x1b[0m`, () => {

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
    


  //& ErrorTicket comments
  //? Corresponding type of property for error ticket comments
  describe(`🎯  \x1b[1;105;1m Error ticket comments \x1b[0m`, () => {
        
        
         //? Corresponding existing Properties of comments
        describe(`\x1b[1;4;93mShould return existing error comment property\x1b[0m`, () => {
          it('Should return existing comment property', async () => {
              expect(body[0]['comments'][0]).toHaveProperty('id');
              expect(body[0]['comments'][0]).toHaveProperty('content');
              expect(body[0]['comments'][0]).toHaveProperty('created_at');
              expect(body[0]['comments'][0]).toHaveProperty('user');
          });
         });
   
            
        //? Corresponding type of property of error ticket comment
        describe(`\x1b[1;4;96mCorresponding type of array for error ticket comment\x1b[0m`, () => {
          //? Corresponding type of array for error ticket comment
          it(`Should return corresponding type of array for 'comments'`, async () => {
          expect(body[0]['comments']).toBeType('array');
          });
            
            
        //? Corresponding type of property of error ticket comment
        describe(`\x1b[1;4;96mCorresponding type of property for error ticket comment\x1b[0m`, () => {

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

  
      //& ErrorTicket - comments - user
      //? Corresponding type of property for user comment
      describe(`🎯  \x1b[1;105;1m Error ticket user comment \x1b[0m`, () => {


      //? Corresponding existing Properties of user comment
      describe(`\x1b[1;4;93mShould return existing user's comment property\x1b[0m`, () => {

          it('Should return existing user comment property', async () => {
              expect(body[0]['comments'][0]['user']).toHaveProperty('id');
              expect(body[0]['comments'][0]['user']).toHaveProperty('username');
              expect(body[0]['comments'][0]['user']).toHaveProperty('title');
              expect(body[0]['comments'][0]['user']).toHaveProperty('profile_pic_url');
          });
      });

      

      //? Corresponding type of property of user comment
      describe(`\x1b[1;4;96mCorresponding type of object for user comment\x1b[0m`, () => {
          it(`Should return corresponding type of object for 'user'`, async () => {
              expect(body[0]['comments'][0]['user']).toBeType('object');
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


