//~Import module
import request from 'supertest';
import { app } from '../index.js';

const entryPoint = '/api/v1/errors/1/comments';
const { body } = await request(app).get(`${entryPoint}`);
import {extendToBeType} from './extend.js';



  //& ErrorTicket comments
  //? Corresponding type of property for error ticket comments
  describe(`🎯  \x1b[1;105;1m Error ticket comments \x1b[0m`, () => {
    
             
    //? Corresponding type of property of error ticket comment
    describe(`\x1b[1;4;96mCorresponding type of array for error ticket comment\x1b[0m`, () => {
        //? Corresponding type of array for error ticket comment
        it(`Should return corresponding type of array for 'comments'`, async () => {
        expect(body).toBeType('array');
        });
    
    
     //? Corresponding existing Properties of comments
    describe(`\x1b[1;4;93mShould return existing error comment property\x1b[0m`, () => {
      it('Should return existing comment property', async () => {
          expect(body[0]).toHaveProperty('id');
          expect(body[0]).toHaveProperty('content');
          expect(body[0]).toHaveProperty('user_id');
          expect(body[0]).toHaveProperty('error_id');
          expect(body[0]).toHaveProperty('created_at');
          expect(body[0]).toHaveProperty('updated_at');
      });
     });


        
    //? Corresponding type of property of error ticket comment
    describe(`\x1b[1;4;96mCorresponding type of property for error ticket comment\x1b[0m`, () => {

        it(`Should return corresponding type of number for 'id'`, async () => {
            expect(body[0].id).toBeType('number');
        });
            
        it(`Should return corresponding type of string for 'content'`, async () => {
            expect(body[0].content).toBeType('string');
        });

        it(`Should return corresponding type of number for 'user_id'`, async () => {
            expect(body[0].user_id).toBeType('number');
        });

        it(`Should return corresponding type of number for 'error_id'`, async () => {
            expect(body[0].error_id).toBeType('number');
        });
    
        it(`Should return corresponding type of string for 'created_at'`, async () => {
            expect(body[0].created_at).toBeType('string');
        });

        it(`Should return corresponding type of object or string for 'updated_at'`, async () => {

            typeof body[0].updated_at === 'object' ?
                expect(body[0].updated_at).toBeType('object') :
                expect(body[0].updated_at).toBeType('string');
        });

    });         
});
});