//~Import module
import request from 'supertest';
import { app } from '../index.js';

// //~ Testing user
// describe('user', () => {
//     describe('get user route', () => {

//         describe('given the users does exist', () => {
//             it('should return a 200 status and the product', async () => {
//                 const { statusCode } = await request(app).get(`/api/v1/users`);
//                 expect(statusCode).toBe(200);
//             });
//         });

//         describe('given one user does exist', () => {
//             it('should return a 200 status and the product', async () => {
//                 const oneUser = 1;
//                 const { statusCode } = await request(app).get(`/api/v1/users/${oneUser}`);
//                 console.log("request: ", request);

//                 expect(statusCode).toBe(403);
//             });
//         });

//     });

// });

describe('user', () => {
    describe('user route', () => { 
        describe('user route exist', () => { }
        )
        describe('user route status', () => { })
    }
    )

    describe('user function', () => { 
        describe('user', () => { })
    }
    
    )

    describe('user fetch', () => {
        describe('user', () => { })
     })
 })

// describe('category', () => {
//   describe('get category route', () => {
//     describe("given the category doesn't exist", () => {
//       it('should return a 404', async () => {
//         const categoryId = '1234';

//           const { statusCode, body } = await supertest(app).get(`/api/v1/categories/${categoryId}`);

//           expect(statusCode).toBe(500);
//       });
//     });
//   });
// });



//~ Test si l'username "Yumedo" existe
    it('should return a 200 status and the product', async () => {
        const { body } = await request(app).get(`/api/v1/users`);
        // console.log('body: ', body[10]);
        expect(body[10].username).toContain('Yumedo');
    });


    //~ Test si l'username "Yumedo" existe
    it('should return true if username "Yumedo" exist', async () => {
        const { body } = await request(app).get(`/api/v1/users`);
        
        const user = {
            "id": 11,
            "username": "Yumedo"
            // "title": null,
            // "presentation": null,
            // "profile_pic_url": null,
            // "linkedin_url": null,
            // "github_url": null,
            // "instagram_url": null,
            // "twitter_url": null,
            // "portfolio_url": null
          }

        // contrairement à toEgal toMatchObject return true même s'il n'a qu'une propriété indiqué tant qu'elle existe
        expect(body[10]).toMatchObject(user);
        // expect(body[10]).toEqual(user);
    });


    
    // Création d'une extend expect personnalisée pour pouvoir vérifier différents type (Array, Object, String, Number, function)
    // https://github.com/facebook/jest/issues/3457
    // https://www.npmjs.com/package/jest-tobetype
    expect.extend({
        toBeType(received, argument) {
            const initialType = typeof received;
            const type = initialType === "object" ? Array.isArray(received) ? "array" : initialType : initialType;
            return type === argument ? {
                message: () => `expected ${received} to be type ${argument}`,
                pass: true
            } : {
                message: () => `expected ${received} to be type ${argument}`,
                pass: false
            };
        }
    });

    // https://stackoverflow.com/questions/46103811/how-to-check-for-object-properties-match-for-an-object-using-jest
    it('t', async () => {
        const { body } = await request(app).get(`/api/v1/users`);
        
        // expect(body[10]).toEqual(
        //     expect.objectContaining({ 
        //         id: expect.any(Number),
        //         title: expect.any(String),
        //         presentation: expect.any(String),
        //         profile_pic_url: expect.any(String),
        //         linkedin_url: expect.any(String),
        //         github_url: expect.any(String),
        //         instagram_url: expect.any(String),
        //         twitter_url: expect.any(String),
        //         portfolio_url: expect.any(String),
        //     }))

        expect(body[10]).toBeType('object');
        expect(body[10].id).toBeType('number');
        expect(body[10].username).toBeType('string');
        // expect(body[10].title).toBeType('string');
        // expect(body[10].presentation).toBeType('string');
        // expect(body[10].profile_pic_url).toBeType('string');
        // expect(body[10].linkedin_url).toBeType('string');
        // expect(body[10].github_url).toBeType('string');
        // expect(body[10].instagram_url).toBeType('string');
        // expect(body[10].portfolio_url).toBeType('string');

    });





//~ Test la longueur d'un tableau
    it('should return the length of an array', async () => {
        const { body } = await request(app).get(`/api/v1/users`);
        // console.log('body: ', body.length);
        expect(body).toHaveLength(12);
    });




//~ Test une route avec une méthode POST
test('POST /api/v1/signup ', async () => {


    const data = {
        "username": "Yumedo",
        "email": "yumedo10@survivor.com",
        "password": "N6y$Ozddzt=1aa",
        "passwordConfirm": "N6y$Ozddzt=1aa"
    };

    
    try {
        const result = await request(app)
        .post(`/api/v1/signup`)
        .send(data)
        // .expect(200)
        // console.log("result: ", result);
        console.log("\x1b[1;35mResult:\x1b[0m ", result.text); // return message
        console.log("\x1b[1;35mResult:\x1b[0m ", result.req.method); // return POST
        console.log("\x1b[1;35mResult:\x1b[0m ", result.req.path); // return '/api/v1/signup'
        console.log("\x1b[1;35mResult:\x1b[0m ", result.statusCode); // return ex: 401

        // expect(statusCode).toBe(200);
        expect(result.statusCode).toBe(1000);
    } catch (err) {
        console.log(`${err}`)
    }

});









// ------------------------------------------------------------
// describe('POST /api/v1/signup', function() {
//     it('user', async function(done) {
//       await request(app)
//       .post('/api/v1/signup')
//       .send({
//             "username": "Yumedo",
//             "email": "yumedo9@survivor.com",
//             "password": "N6y$Ozddzt=1aa",
//             "passwordConfirm": "N6y$Ozddzt=1aa"
//         })
//         .set('Accept', 'application/json')
//         .expect(function(res) {
//             res.body.username = "Yumedo";
//             res.body.email = "yumedo9@survivor.com";
//             res.body.password = "N6y$Ozddzt=1aa";
//             res.body.passwordConfirm = "N6y$Ozddzt=1aa";
//         })
//         .expect(200, {
//             username : "Yumedo",
//             email : "yumedo9@survivor.com",
//             password : "N6y$Ozddzt=1aa",
//             passwordConfirm : "N6y$Ozddzt=1aa"
//         }, done);

//     });
//   });

// ------------------------------------

//Jest has detected the following 1 open handle potentially keeping Jest from exiting:
//● TCPSERVERWRAP
// -----> --forceExit or config : "forceExit" : true

//Jest has detected the following 1 open handle potentially keeping Jest from exiting:
//●  bound-anonymous-fn

//●  TCPWRAP
