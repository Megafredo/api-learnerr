//~import module that generate fake data
// import { faker } from '@faker-js/faker';
import { faker } from '@faker-js/faker/locale/fr';
// connect to db - be where dotenv is configured
import 'dotenv/config';
import pg from 'pg';
const client = new pg.Client();
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
    randomFakeNumber: Math.floor(Math.random() * this.maxFakeNumber) + 1,
    randomArticleId: Math.floor(Math.random() * this.articles.length) + 1, // 10 articles -> 1 - 10
    randomErrorId: Math.floor(Math.random() * this.errors.length) + 1,
    randomCategoryId: Math.floor(Math.random() * this.categories.length) + 1,

    //~ colums by table
    userColumns: `"username", "email", "password", "is_active", "title", "presentation", "profile_pic_url", "linkedin_url", "github_url", "instagram_url", "twitter_url", "portfolio_url", "role_id"`,
    articleColumns: `"title", "abstract", "content", "user_id", "status_id"`,
    errorColumns: `"title", "abstract", "content", "user_id", "status_id", "error_comment_id"`,
    articleCommentColumns: `"content", "user_id", "article_id"`,
    errorCommentColumns: `"content", "user_id", "error_id"`,
    roleColumns: `"name"`,
    statusColumns: `"name"`,
    categoryColumns: `"name", "logo_svg"`,
    badWordColumns: `"word"`,
    articleHasCategoryColumns: `"error_id", "category_id"`,
    errorHasCategoryColumns: `"article_id", "category_id"`,

    //^ INIT
    init() {
        this.generateRandomUsers();
        console.table(this.users);
        this.ImportDataUser();
    },

    //^ METHODS

    //~ Random Pwd with bcrypt
    async generateRandomPwd() {
        //~encrypt password
        let password = faker.internet.password(10);
        const salt = await bcrypt.genSalt(10);
        password = await bcrypt.hash(password, salt);

        return password;
    },

    //~ Random users
    generateRandomUsers() {
        for (let counter = 0; counter < this.maxFakeNumber; counter++) {
            fakeData.users.push({
                username: faker.internet.userName(),
                email: faker.internet.email(),
                password: this.generateRandomPwd(),
                title: faker.lorem.sentence(5),
                presentation: faker.lorem.paragraphs(5),
                profile_pic_url: faker.internet.avatar(),
                linkedin_url: faker.internet.url(),
                github_url: faker.internet.url(),
                instagram_url: faker.internet.url(),
                twitter_url: faker.internet.url(),
                portfolio_url: faker.internet.url(),
                role_id: 3
            });
        }
    },

    //~ Random articles
    generateRandomArticles() {
        for (let counter = 0; counter < this.maxFakeNumber; counter++) {
            fakeData.articles.push({
                title: faker.lorem.sentence(5),
                abstract: faker.lorem.paragraphs(2),
                content: faker.lorem.paragraphs(10),
                user_id: this.randomFakeNumber,
                status_id: this.status[Math.floor(Math.random() * this.status.length)]
            });
        }
    },

    //~ Random errors
    generateRandomErrors() {
        for (let counter = 0; counter < this.maxFakeNumber; counter++) {
            fakeData.errors.push({
                title: faker.lorem.sentence(5),
                abstract: faker.lorem.paragraphs(2),
                content: faker.lorem.paragraphs(10),
                user_id: this.randomFakeNumber,
                status_id: this.status[Math.floor(Math.random() * this.status.length)]
            });
        }
    },

    //~ Random articleComments
    generateRandomArticleComments() {
        for (let counter = 0; counter < this.maxFakeNumber; counter++) {
            fakeData.articleComments.push({
                content: faker.lorem.paragraphs(6),
                user_id: this.randomFakeNumber,
                article_id: this.randomFakeNumber
            });
        }
    },

    //~ Random errorComments
    generateRandomErrorComments() {
        for (let counter = 0; counter < this.maxFakeNumber; counter++) {
            fakeData.errorComments.push({
                content: faker.lorem.paragraphs(6),
                user_id: this.randomFakeNumber,
                error_id: this.randomFakeNumber
            });
        }
    },
    
    //~ Bad Words
    generateBadWords() {
        for (let counter = 0; counter < this.badWords.length; counter++) {
            this.badWords.push({
                word: this.badWords[counter]
            });
        }
    },

    //~ Role
    generateRoles(){
        for (let counter = 0; counter < this.roles.length; counter++) {
            this.roles.push({
                name: this.roles[counter]
            });
        }
    },
    
    //~ Status
    generateStatus(){
        for (let counter = 0; counter < this.status.length; counter++) {
            this.status.push({
                name: this.status[counter]
            });
        }
    },

    //~ Category
    generateCategory(){
        for (let counter = 0; counter < this.categories.length; counter++) {
            this.categories.push({
                name: this.categories[counter].name
            });
        }
    },

    //~ Article has category
    generateArticleHasCategory(){
        for (let counter = 0; counter < this.articles.length; counter++) {
            this.articleHasCategory.push({
                article_id: this.randomArticleId,
                category_id:this.randomCategoryId,
            });
        }
    },
    
    //~ Error has category
    generateErrorHasCategory(){
        for (let counter = 0; counter < this.errors.length; counter++) {
            this.errorHasCategory.push({
                error_id: this.randomErrorId,
                category_id:this.randomCategoryId,
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
                    '${users[0].is_active}',
                    '${users[0].title}',
                    '${users[0].presentation}',
                    '${users[0].profile_pic_url}',
                    '${users[0].linkedin_url}',
                    '${users[0].github_url}',
                    '${users[0].instagram_url}',
                    '${users[0].twitter_url}',
                    '${users[0].portfolio_url}',
                    '${users[0].role_id}'
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
                        '${users[counter].portfolio_url}',
                        '${users[counter].role_id}')`;
        }

        query += ';';

        // await client.query(query);

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

        // await client.query(query);

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
                    '${errors[0].title}',
                    '${errors[0].abstract}',
                    '${errors[0].content}',
                    '${errors[0].user_id}',
                    '${errors[0].status_id}'
                )`;

        for (let counter = 1; counter < errors.length; counter++) {
            query += `,(
                        '${errors[counter].title}',
                        '${errors[counter].abstract}',
                        '${errors[counter].content}',
                        '${errors[counter].user_id}',
                        '${errors[counter].status_id}'
                    )`;
        }

        query += ';';

        // await client.query(query);

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

        // await client.query(query);

        // console.timeEnd('Import data');

        client.end();
    },
    //~ Do Import Data Error comment
    async importDataErrorComment() {
        await client.connect();

        // console.time('Import data');
        const errorComments = this.errorComments;

        let query = `INSERT INTO "error_comment"(${this.errorComments}) VALUES `;

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

        // await client.query(query);

        // console.timeEnd('Import data');

        client.end();
    },

    //~ Do Import Data Role
    async importDataRole() {
        await client.connect();

        // console.time('Import data');
        const roles = this.roles;

        let query = `INSERT INTO "role"(${this.roleColumns}) VALUES `;

        query += `('${roles[0].name}')`;

        for (let counter = 1; counter < roles.length; counter++) {
            query += `,('${roles[counter].name}')`;
        }

        query += ';';

        // await client.query(query);

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
                    '${badWords[0].word}'
                )`;

        for (let counter = 1; counter < badWords.length; counter++) {
            query += `,('${badWords[counter].word}')`;
        }

        query += ';';

        // await client.query(query);

        // console.timeEnd('Import data');

        client.end();
    },
    //~ Do Import Data status
    async importDataStatus() {
        await client.connect();

        // console.time('Import data');
        const status = this.status;

        let query = `INSERT INTO "status"(${this.statusColumns}) VALUES `;

        query += `('${status[0].name}')`;

        for (let counter = 1; counter < status.length; counter++) {
            query += `,('${status[counter].name}')`;
        }

        query += ';';

        // await client.query(query);

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

        for (let counter = 1; counter < categories.length; counter++) {
            query += `,('${categories[counter].name}')`;
        }

        query += ';';

        // await client.query(query);

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

        // await client.query(query);

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
                    '${errorHasCategory[0].category_id}',
                )`;

        for (let counter = 1; counter < errorHasCategory.length; counter++) {
            query += `,(
                        '${errorHasCategory[counter].error_id}',
                        '${errorHasCategory[counter].category_id}'
                    )`;
        }

        query += ';';

        // await client.query(query);

        // console.timeEnd('Import data');

        client.end();
    }
};

fakeData.init();
