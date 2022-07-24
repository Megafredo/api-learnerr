//~import module that generate fake data
// import { faker } from '@faker-js/faker';
import { faker } from '@faker-js/faker/locale/en';
// connect to db - be where dotenv is configured
import 'dotenv/config';
import pg from 'pg';
const client = new pg.Pool(
    {
        // connectionString: process.env.DATABASE_URL,
        // ssl: { rejectUnauthorized: false }
    }
);
// french bad world
import list from 'french-badwords-list';
// techstack list
import techstack from '@shiroi-shi/techstack';
// Bcrypt
import bcrypt from 'bcrypt';

//
const fakeData = {
    //^ VARIABLES

    users: [],
    articles: [],
    errors: [],
    articleComments: [],
    errorComments: [],
    //
    roles: ['admin', 'author', 'user'],
    status: ['pending', 'draft', 'published', 'rejected'],
    categories: techstack.all,
    badWords: list.array,
    //
    articleHasCategory: [],
    errorHasCategory: [],
    //
    maxFakeNumber: 10,

    //~ colums by table
    userColumns: `"username", "email", "password", "title", "presentation", "profile_pic_url", "linkedin_url", "github_url", "instagram_url", "twitter_url", "portfolio_url"`,
    articleColumns: `"title", "abstract", "content", "user_id", "status_id"`,
    errorColumns: `"error_snippet", "title", "abstract", "content", "user_id", "status_id"`,
    articleCommentColumns: `"content", "user_id", "article_id"`,
    errorCommentColumns: `"content", "user_id", "error_id"`,
    roleColumns: `"name"`,
    statusColumns: `"name"`,
    categoryColumns: `"name"`,
    badWordColumns: `"word"`,
    articleHasCategoryColumns: `"article_id", "category_id"`,
    errorHasCategoryColumns: `"error_id", "category_id"`,

    //^ INIT
    async init() {
        
        //~ Fake Role
        // fakeData.importDataRole();

        //~ Fake Status
        // this.importDataStatus();

        //~ Fake Bad word
        // this.importDataBadWord();

        //~ Fake Category
        // this.importDataCategory();

        //~ Fake User
        // await this.generateRandomUsers();
        // this.importDataUser();

        //~ Fake Article
        // this.generateRandomArticles();
        // this.importDataArticle();

        //~ Fake Error
        // this.generateRandomErrors();
        // this.importDataError();

        //~ Fake Article Comment
        // this.generateRandomArticleComments();
        // this.importDataArticleComment();

        //~ Fake Error Comment
        // this.generateRandomErrorComments();
        // this.importDataErrorComment();

        //~ Fake Article Has Category
        // this.generateRandomArticles();
        // this.generateArticleHasCategory();
        // this.importDataArticleHasCategory(); //active generate article

        //~ Fake Error Has Category
        // this.generateRandomErrors();
        // this.generateErrorHasCategory();
        // this.importDataErrorHasCategory(); //active generate error
        
    },

    //^ METHODS

    //~ Random numbers

    randomFakeNumber() {
        const randomFakeNumber = Math.floor(Math.random() * fakeData.maxFakeNumber) + 1;
        return randomFakeNumber;
    },

    randomArticleId() {
        const randomArticleId = Math.floor(Math.random() * fakeData.articles.length) + 1;
        return randomArticleId;
    },

    randomErrorId() {
        const randomErrorId = Math.floor(Math.random() * fakeData.errors.length) + 1;
        return randomErrorId;
    },

    randomCategoryId() {
        const randomCategoryId = Math.floor(Math.random() * fakeData.categories.length) + 1;
        return randomCategoryId;
    },

    //~ Random Pwd with bcrypt
    async generateRandomPwd() {
        //~encrypt password
        let password = faker.internet.password(10);
        const salt = await bcrypt.genSalt(10);
        password = await bcrypt.hash(password, salt);

        return password;
    },

    //~ Random users
    async generateRandomUsers() {
        for (let counter = 0; counter < this.maxFakeNumber; counter++) {
            fakeData.users.push({
                username: faker.internet.userName(),
                email: faker.internet.email(),
                password: await fakeData.generateRandomPwd(),
                title: faker.lorem.sentence(5),
                presentation: faker.lorem.paragraphs(5),
                profile_pic_url: faker.internet.avatar(),
                linkedin_url: faker.internet.url(),
                github_url: faker.internet.url(),
                instagram_url: faker.internet.url(),
                twitter_url: faker.internet.url(),
                portfolio_url: faker.internet.url()
            });
        }
    },

    //~ Random articles
    generateRandomArticles() {
        for (let counter = 0; counter < fakeData.maxFakeNumber; counter++) {
            fakeData.articles.push({
                title: faker.lorem.sentence(5),
                abstract: faker.lorem.paragraphs(2),
                content: faker.lorem.paragraphs(10),
                user_id: fakeData.randomFakeNumber(),
                status_id: Math.floor(Math.random() * fakeData.status.length + 1)
            });
        }
    },

    //~ Random errors
    generateRandomErrors() {
        for (let counter = 0; counter < fakeData.maxFakeNumber; counter++) {
            fakeData.errors.push({
                error_snippet: faker.lorem.sentence(10),
                title: faker.lorem.sentence(5),
                abstract: faker.lorem.paragraphs(2),
                content: faker.lorem.paragraphs(10),
                user_id: fakeData.randomFakeNumber(),
                status_id: Math.floor(Math.random() * fakeData.status.length + 1)
            });
        }
    },

    //~ Random articleComments
    generateRandomArticleComments() {
        for (let counter = 0; counter < fakeData.maxFakeNumber; counter++) {
            fakeData.articleComments.push({
                content: faker.lorem.paragraphs(6),
                user_id: fakeData.randomFakeNumber(),
                article_id: fakeData.randomFakeNumber()
            });
        }
    },

    //~ Random errorComments
    generateRandomErrorComments() {
        for (let counter = 0; counter < fakeData.maxFakeNumber; counter++) {
            fakeData.errorComments.push({
                content: faker.lorem.paragraphs(6),
                user_id: fakeData.randomFakeNumber(),
                error_id: fakeData.randomFakeNumber()
            });
        }
    },

    //~ Article has category
    generateArticleHasCategory() {
        for (let counter = 0; counter < fakeData.articles.length; counter++) {
            fakeData.articleHasCategory.push({
                article_id: fakeData.randomArticleId(),
                category_id: fakeData.randomCategoryId()
            });
        }
    },

    //~ Error has category
    generateErrorHasCategory() {
        for (let counter = 0; counter < fakeData.errors.length; counter++) {
            fakeData.errorHasCategory.push({
                error_id: fakeData.randomErrorId(),
                category_id: fakeData.randomCategoryId()
            });
        }
    },

    //~ Do Import Data User
    async importDataUser() {
        await client.connect();

        // console.time('Import data');
        const users = this.users;

        let query = `INSERT INTO "user"(${this.userColumns}) VALUES `;

        query += `(
                    '${users[0].username}',
                    '${users[0].email}',
                    '${users[0].password}',
                    '${users[0].title}',
                    '${users[0].presentation}',
                    '${users[0].profile_pic_url}',
                    '${users[0].linkedin_url}',
                    '${users[0].github_url}',
                    '${users[0].instagram_url}',
                    '${users[0].twitter_url}',
                    '${users[0].portfolio_url}'
                )`;

        for (let counter = 1; counter < users.length; counter++) {
            query += `,('${users[counter].username}',
                        '${users[counter].email}',
                        '${users[counter].password}',
                        '${users[counter].title}',
                        '${users[counter].presentation}',
                        '${users[counter].profile_pic_url}',
                        '${users[counter].linkedin_url}',
                        '${users[counter].github_url}',
                        '${users[counter].instagram_url}',
                        '${users[counter].twitter_url}',
                        '${users[counter].portfolio_url}'
                        )`;
        }

        query += ';';

        await client.query(query);
        console.log('IMPORT DATA USER => ok');

        // console.timeEnd('Import data');

        client.end();
    },

    //~ Do Import Data Article
    async importDataArticle() {
        await client.connect();

        // console.time('Import data');
        const articles = this.articles;

        let query = `INSERT INTO "article"(${this.articleColumns}) VALUES `;

        query += `(
                    '${articles[0].title}',
                    '${articles[0].abstract}',
                    '${articles[0].content}',
                    '${articles[0].user_id}',
                    '${articles[0].status_id}'
                    
                    )`;

        for (let counter = 1; counter < articles.length; counter++) {
            query += `,(
                    '${articles[counter].title}',
                    '${articles[counter].abstract}',
                    '${articles[counter].content}',
                    '${articles[counter].user_id}',
                    '${articles[counter].status_id}'
                    )`;
        }

        query += ';';

        await client.query(query);
        console.log('IMPORT DATA ARTICLE => ok');

        // console.timeEnd('Import data');

        client.end();
    },
    //~ Do Import Data Error
    async importDataError() {
        await client.connect();

        // console.time('Import data');
        const errors = this.errors;

        let query = `INSERT INTO "error"(${this.errorColumns}) VALUES `;

        query += `(
                    '${errors[0].error_snippet}',
                    '${errors[0].title}',
                    '${errors[0].abstract}',
                    '${errors[0].content}',
                    '${errors[0].user_id}',
                    '${errors[0].status_id}'
                )`;

        for (let counter = 1; counter < errors.length; counter++) {
            query += `,(
                        '${errors[counter].error_snippet}',
                        '${errors[counter].title}',
                        '${errors[counter].abstract}',
                        '${errors[counter].content}',
                        '${errors[counter].user_id}',
                        '${errors[counter].status_id}'
                    )`;
        }

        query += ';';

        await client.query(query);
        console.log('IMPORT DATA ERROR => ok');

        // console.timeEnd('Import data');

        client.end();
    },
    //~ Do Import Data Article comment
    async importDataArticleComment() {
        await client.connect();

        // console.time('Import data');
        const articleComments = this.articleComments;

        let query = `INSERT INTO "article_comment"(${this.articleCommentColumns}) VALUES `;

        query += `(
                    '${articleComments[0].content}',
                    '${articleComments[0].user_id}',
                    '${articleComments[0].article_id}'
                )`;

        for (let counter = 1; counter < articleComments.length; counter++) {
            query += `,('${articleComments[counter].content}',
                        '${articleComments[counter].user_id}',
                        '${articleComments[counter].article_id}')`;
        }

        query += ';';

        await client.query(query);
        console.log('IMPORT DATA ARTICLE COMMENTS => ok');
        // console.timeEnd('Import data');

        client.end();
    },
    //~ Do Import Data Error comment
    async importDataErrorComment() {
        await client.connect();

        // console.time('Import data');
        const errorComments = this.errorComments;

        let query = `INSERT INTO "error_comment"(${this.errorCommentColumns}) VALUES `;

        query += `(
                    '${errorComments[0].content}',
                    '${errorComments[0].user_id}',
                    '${errorComments[0].error_id}'
                )`;

        for (let counter = 1; counter < errorComments.length; counter++) {
            query += `,('${errorComments[counter].content}',
                        '${errorComments[counter].user_id}',
                        '${errorComments[counter].error_id}')`;
        }

        query += ';';

        await client.query(query);
        console.log('IMPORT DATA ERROR COMMENTS => ok');

        // console.timeEnd('Import data');

        client.end();
    },

    //~ Do Import Data Role
    async importDataRole() {
        await client.connect();

        // console.time('Import data');
        const roles = this.roles;

        let query = `INSERT INTO "role"(${this.roleColumns}) VALUES `;

        query += `('${roles[0]}')`;

        for (let counter = 1; counter < roles.length; counter++) {
            query += `,('${roles[counter]}')`;
        }

        query += ';';

        await client.query(query);
        console.log('IMPORT DATA ROLE => ok');
        // console.timeEnd('Import data');

        client.end();
    },

    //~ Do Import Data bad words
    async importDataBadWord() {
        await client.connect();

        // console.time('Import data');
        const badWords = this.badWords;

        let query = `INSERT INTO "bad_word"(${this.badWordColumns}) VALUES `;

        query += `(
                    '${badWords[0]}'
                )`;

        for (let counter = 1; counter < badWords.length; counter++) {
            query += `,('${badWords[counter]}')`;
        }

        query += ';';

        await client.query(query);
        console.log('IMPORT DATA BAD WORDS => ok');

        // console.timeEnd('Import data');

        client.end();
    },
    //~ Do Import Data status
    async importDataStatus() {
        await client.connect();

        // console.time('Import data');
        const status = this.status;

        let query = `INSERT INTO "status"(${this.statusColumns}) VALUES `;

        query += `('${status[0]}')`;

        for (let counter = 1; counter < status.length; counter++) {
            query += `,('${status[counter]}')`;
        }

        query += ';';

        await client.query(query);

        console.log('IMPORT DATA STATUS => ok');
        // console.timeEnd('Import data');

        client.end();
    },

    //~ Do Import Data category
    async importDataCategory() {
        await client.connect();

        // console.time('Import data');
        const categories = this.categories;

        let query = `INSERT INTO "category"(${this.categoryColumns}) VALUES `;

        query += `('${categories[0].name}')`;

        for (let counter = 1; counter < 332; counter++) {
            if (counter !== 164) {
                query += `,('${categories[counter].name}')`;
            }
        }

        query += ';';

        await client.query(query);
        console.log('IMPORT DATA CATEGORY => ok');

        // console.timeEnd('Import data');

        client.end();
    },

    //~ Do Import Data article has category
    async importDataArticleHasCategory() {
        await client.connect();

        // console.time('Import data');
        const articleHasCategory = this.articleHasCategory;

        let query = `INSERT INTO "article_has_category"(${this.articleHasCategoryColumns}) VALUES `;

        query += `(
                    '${articleHasCategory[0].article_id}',
                    '${articleHasCategory[0].category_id}'
                    )`;

        for (let counter = 1; counter < articleHasCategory.length; counter++) {
            query += `,(
                        '${articleHasCategory[counter].article_id}',
                        '${articleHasCategory[counter].category_id}'
                    )`;
        }

        query += ';';

        await client.query(query);
        console.log('IMPORT DATA ARTICLE HAS CATEGORY => ok');
        // console.timeEnd('Import data');

        client.end();
    },
    //~ Do Import Data Error has category
    async importDataErrorHasCategory() {
        await client.connect();

        // console.time('Import data');
        const errorHasCategory = this.errorHasCategory;

        let query = `INSERT INTO "error_has_category"(${this.errorHasCategoryColumns}) VALUES `;

        query += `(
                    '${errorHasCategory[0].error_id}',
                    '${errorHasCategory[0].category_id}'
                )`;

        for (let counter = 1; counter < errorHasCategory.length; counter++) {
            query += `,(
                        '${errorHasCategory[counter].error_id}',
                        '${errorHasCategory[counter].category_id}'
                    )`;
        }

        query += ';';

        await client.query(query);
        console.log('IMPORT DATA ERROR HAS CATEGORY => ok');

        // console.timeEnd('Import data');

        client.end();
    }
};

fakeData.init();
