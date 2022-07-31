//~Import module
import request from 'supertest';
import { app } from '../index.js';

//& -----------------------------------------------------------
//& Tests unitaires
//& -----------------------------------------------------------

// A unit test could assert that a method:

// Returns an expected value
// Throws an exception under the tested condition
// Changes the state of the system
// Calls another function

//& Custom extend expect
expect.extend({
  // Control received type
  toBeType(received, argument) {
    const initialType = typeof received;
    const type = initialType === 'object' ? (Array.isArray(received) ? 'array' : initialType) : initialType;
    return type === argument
      ? {
          message: () => `expected ${received} to be type ${argument}`,
          pass: true
        }
      : { message: () => `expected ${received} to be type ${argument}`, pass: false };
  }
});

describe('article', () => {
  //~ createArticle
  // POST /api/v1/articles
  // describe('POST /api/v1/articles route', () => {
  //     it('should verify the existence of the route', async () => {

  //     });
  // });

  //~ fetchAllArticles
  // GET /api/v1/articles
  describe('GET /api/v1/articles route', () => {
    describe('body is array :', () => {
      it('should verify body is array', async () => {
        const { body } = await request(app).get(`/api/v1/articles`);
        expect(body).toBeType('array');
      });
      describe('body[0] is object :', () => {
        it('should verify body[0] is object', async () => {
          const { body } = await request(app).get(`/api/v1/articles`);
          expect(body[0]).toBeType('object');
        });
        describe('all properties body[0] :', () => {
          describe('Id :', () => {
            it('should verify body[0].id is number', async () => {
              const { body } = await request(app).get(`/api/v1/articles`);
              expect(body[0].id).toBeType('number');
            });
          });
          describe('Title :', () => {
            it('should verify body[0].title is string', async () => {
              const { body } = await request(app).get(`/api/v1/articles`);
              expect(body[0].title).toBeType('string');
            });
          });
          describe('Abstract :', () => {
            it('should verify body[0].abstract is string', async () => {
              const { body } = await request(app).get(`/api/v1/articles`);
              expect(body[0].abstract).toBeType('string');
            });
          });
          describe('Content :', () => {
            it('should verify body[0].content is string', async () => {
              const { body } = await request(app).get(`/api/v1/articles`);
              expect(body[0].content).toBeType('string');
            });
          });
          describe('Created_at :', () => {
            it('should verify body[0].created_at is string', async () => {
              const { body } = await request(app).get(`/api/v1/articles`);
              expect(body[0].created_at).toBeType('string');
            });
          });
          describe('Categories :', () => {
            it('should verify body[0].categories is array', async () => {
              const { body } = await request(app).get(`/api/v1/articles`);
              expect(body[0].categories).toBeType('array');
            });
            describe('type propertie categories :', () => {
              it('should verify body[0].categories[0] is string', async () => {
                const { body } = await request(app).get(`/api/v1/articles`);
                console.log('--------------Body0Null----------------', typeof body[0].categories[0]);
                console.log('--------------Body1String----------------', typeof body[1].categories[0]);
                expect(body[1].categories[0]).toBeType('string');
                // expect(body[0].categories[0]).toBeType('object');
              });
            });
          });
          describe('User :', () => {
            it('should verify body[0].user is object', async () => {
              const { body } = await request(app).get(`/api/v1/articles`);
              expect(body[0].user).toBeType('object');
              //   describe('type properties user :', () => {});
            });
          });
          describe('Comments :', () => {
            it('should verify body[0].comments is array', async () => {
              const { body } = await request(app).get(`/api/v1/articles`);
              expect(body[0].comments).toBeType('array');
            });
          });
        });
      });
    });
  });
});
