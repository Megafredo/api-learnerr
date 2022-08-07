//& ----------------------------------------- REQUIRED
const required = {

  //~ ---------------- User
  signUp: ['username', 'email', 'password', 'passwordConfirm'],
  signIn: ['email', 'password'],
  inactivateUser: ['is_active'],


  //~ ---------------- Article
  createArticle: ['title', 'abstract', 'content', 'user_id', 'status_id'],
  updateArticle: ['user_id'],
  lastestArticles: ['limitNb', 'offsetNb'],
  searchArticle: ['search'],


  //~ ---------------- ErrorTicket
  createErrorTicket: ['error_snippet', 'title', 'abstract', 'content', 'user_id', 'status_id'],
  updateErrorTicket: ['user_id'],
  searchErrorTickets: ['search'],
  lastestErrorTickets: ['limitNb', 'offsetNb'],


  //~ ---------------- Article Comment
  createArticleComment: ['user_id', 'content'],


  //~ ---------------- Error Comment
  createErrorComment: ['user_id', 'content'],


  //~ ---------------- Category
  createCategory: ['name'],
  

};

//& ----------------------------------------- EXAMPLE
const example = {
  //~ ---------------- SignUp
  signUp: {
    username: 'Yumedo',
    email: 'yumedo@survivor.com',
    password: 'N6y$Ozddzt=1aa',
    passwordConfirm: 'N6y$Ozddzt=1aa'
  },

  //~ ---------------- SignIn
  signIn: {
    email: 'yumedo@survivor.com',
    password: 'N6y$Ozddzt=1aa'
  },

  signInOk: {
    id: 'integer',
    username: 'string',
    title: 'string',
    profile_pic_url: 'string',
    role: 'string',
    accessToken: 'string',
    refreshToken: 'string'
  },

  //~ ---------------- RefreshToken
  refreshTokenOk: {
    accessToken: 'string',
    refreshToken: 'string'
  },

  //~ ---------------- UpdateUser
  updateUser: {
    username: 'Yumedo',
    email: 'yumedo@survivor.com',
    password: 'N6y$Ozddzt=1aa',
    passwordConfirm: 'N6y$Ozddzt=1aa',
    title: 'Super titre',
    presentation: 'Super présentation',
    profile_pic_url: 'https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/940.jpg',
    linkedin_url: 'https://linkedin-url.com/',
    github_url: 'https://github-url.com/',
    instagram_url: 'https://instagram-url.com/',
    twitter_url: 'https://twitter-url.com/',
    portfolio_url: 'https://portfolio-url.com/'
  },

  //~ ---------------- InactivateUser
  inactivateUser: {
    is_active: false
  },

  //~ ---------------- Create Article
  createArticle: {
    title: 'NodeJS et Express',
    abstract: 'Learn(Err) une expérience comme jamais',
    content:
      'Ea exercitationem at aut velit odio aut. Autem architecto corrupti adipisci praesentium harum quia. Vel reprehenderit asperiores consequatur. Magnam non eaque. Laboriosam itaque vitae',
    user_id: 12,
    status_id: 1,
    categories: [
      {id:1},
      {id:2},
      {id:3}
    ]
  },

  //~ ---------------- Update Article
  updateArticle: {
    title: 'React & TypeScript',
    abstract: "J'ai quitté le back depuis que j'ai connu Typescript",
    content:
      'Ea exercitationem at aut velit odio aut. Autem architecto corrupti adipisci praesentium harum quia. Vel reprehenderit asperiores consequatur. Magnam non eaque. Laboriosam itaque vitae',
    user_id: 12,
    status_id: 1
  },

  //~ ---------------- Lastest Article
  lastestArticles: {
    limitNb: 4,
    offsetNb: 0
  },

  //~ ---------------- Search Article
  searchArticle: {
    search: 'NodeJs'
  },

  //~ ---------------- Create Article Comment
  createArticleComment: {
    content: `Ceci est un super commentaire d'article o_O`,
    user_id: 1
  },

  //~ ---------------- Create Error Comment
  createErrorComment: {
    content: `Ceci est un super commentaire d'erreur o_O`,
    user_id: 1
  },

  //~ ---------------- Lastest ErrorTickets
  lastestErrorTickets: {
    limitNb: 4,
    offsetNb: 0
  },

  //~ ---------------- Search ErrorTickets
  searchErrorTickets: {
    search: 'NodeJs'
  },

   //~ ---------------- create ErrorTickets
   createErrorTicket: {
    error_snippet: 'FAILED--Further testing stopped: Cannot continue: connection failed',
    title: 'Help me !',
    abstract: "Autem architecto corrupti adipisci praesentium harum quia. Magnam non eaque",
    content:
      'Ea exercitationem at aut velit odio aut. Autem architecto corrupti adipisci praesentium harum quia. Vel reprehenderit asperiores consequatur. Magnam non eaque. Laboriosam itaque vitae',
    user_id: 12,
    status_id: 1,
    categories: [
      {id:1},
      {id:2},
      {id:3}
    ]
  },

  //~ ---------------- update ErrorTickets
  updateErrorTicket: {
    error_snippet: 'FAILED--Further testing stopped: Cannot continue: connection failed',
    title: 'Help me !',
    abstract: "Autem architecto corrupti adipisci praesentium harum quia. Magnam non eaque",
    content:
      'Ea exercitationem at aut velit odio aut. Autem architecto corrupti adipisci praesentium harum quia. Vel reprehenderit asperiores consequatur. Magnam non eaque. Laboriosam itaque vitae',
    user_id: 12,
    status_id: 1
  },
  //~ ---------------- Category
  createCategory: {
    name: "Yumedo"
  },
};

//& ----------------------------------------- PROPERTIES
const properties = {
  //~ ---------------- SignUp
  signUp: {
    username: { type: 'string' },
    email: { type: 'string' },
    password: { type: 'string' },
    passwordConfirm: { type: 'string' }
  },

  //~ ---------------- SignIn
  signIn: {
    email: { type: 'string' },
    password: { type: 'string' }
  },

  //~ ---------------- SignIn Ok
  signInOk: {
    id: { type: 'integer' },
    username: { type: 'string' },
    title: { type: 'string' },
    profile_pic_url: { type: 'string' },
    accessToken: { type: 'string' },
    refreshToken: { type: 'string' }
  },

  //~ ---------------- RefreshToken
  refreshTokenOk: {
    accessToken: { type: 'string' },
    refreshToken: { type: 'string' }
  },

  //~ ---------------- UpdateUser
  updateUser: {
    username: { type: 'string' },
    email: { type: 'string' },
    password: { type: 'string' },
    passwordConfirm: { type: 'string' },
    title: { type: 'string' },
    presentation: { type: 'string' },
    profile_pic_url: { type: 'string' },
    linkedin_url: { type: 'string' },
    github_url: { type: 'string' },
    instagram_url: { type: 'string' },
    twitter_url: { type: 'string' },
    portfolio_url: { type: 'string' }
  },

  //~ ---------------- InactivateUser
  inactivateUser: {
    is_active: { type: 'boolean' }
  },

  //~ ---------------- Create Article
  createArticle: {
    title: { type: 'string' },
    abstract: { type: 'string' },
    content: { type: 'string' },
    user_id: { type: 'integer' },
    status_id: { type: 'integer' },
    comments: {
      type: 'array',
      maxItems: 3,
      items: {
        type: 'object',
        properties: {
          id: { type: 'integer' }
        }
      }
    }  
  },

  //~ ---------------- Update Article
  updateArticle: {
    title: { type: 'string' },
    abstract: { type: 'string' },
    content: { type: 'string' },
    user_id: { type: 'integer' },
    status_id: { type: 'integer' }
  },

  //~ ---------------- Lastest Article
  lastestArticles: {
    limitNb: { type: 'integer' },
    offsetNb: { type: 'integer' }
  },

  //~ ---------------- Search Article
  searchArticle: {
    search: { type: 'string' }
  },

  //~ ---------------- Create Article Comment
  createArticleComment: {
    content: { type: 'string' },
    user_id: { type: 'integer' }
  },

  //~ ---------------- Create Error Comment
  createErrorComment: {
    content: { type: 'string' },
    user_id: { type: 'integer' }
  },

  //~ ---------------- create ErrorTickets
  createErrorTicket: {
    error_snippet: { type: 'string' },
    title: { type: 'string' },
    abstract: { type: 'string' },
    content: { type: 'string' },
    user_id: { type: 'integer' },
    status_id: { type: 'integer' },
    comments: {
      type: 'array',
      maxItems: 3,
      items: {
        type: 'object',
        properties: {
          id: { type: 'integer' }
        }
      }
    }    
  },

  //~ ---------------- update ErrorTickets
  updateErrorTicket: {
    error_snippet: { type: 'string' },
    title: { type: 'string' },
    abstract: { type: 'string' },
    content: { type: 'string' },
    user_id: { type: 'integer' },
    status_id: { type: 'integer' }
  },

  //~ ---------------- Category
  createCategory: {
    name: { type: 'string' },
  },
};



//& ---------------- Tables SQL
const tableSql = {
  //~ ---------------- Table User
  user: {
    id: { type: 'INT GENERATED ALWAYS AS IDENTITY PRIMARY KEY' },
    username: { type: 'TEXT NOT NULL' },
    email: { type: 'EMAIL NOT NULL UNIQUE' },
    password: { type: 'PWD NOT NULL' },
    is_active: { type: 'BOOLEAN NOT NULL DEFAULT TRUE' },
    title: { type: 'TEXT NULL' },
    presentation: { type: 'TEXT NULL' },
    profile_pic_url: { type: 'LINK_URL NULL' },
    linkedin_url: { type: 'LINK_URL NULL' },
    github_url: { type: 'LINK_URL NULL' },
    instagram_url: { type: 'LINK_URL NULL' },
    twitter_url: { type: 'LINK_URL NULL' },
    portfolio_url: { type: 'LINK_URL NULL' },
    role_id: { type: 'INTEGER NOT NULL DEFAULT 3' },
    created_at: { type: 'TIMESTAMPTZ NOT NULL DEFAULT NOW()' },
    updated_at: { type: 'TIMESTAMPTZ' }
  },

  //~ ---------------- Table Article
  article: {
    id: { type: 'INT GENERATED ALWAYS AS IDENTITY PRIMARY KEY' },
    title: { type: 'TEXT NOT NULL' },
    abstract: { type: 'TEXT NOT NULL' },
    content: { type: 'TEXT NOT NULL' },
    user_id: { type: 'INTEGER NOT NULL' },
    status_id: { type: 'INTEGER NOT NULL' },
    created_at: { type: 'TIMESTAMPTZ NOT NULL DEFAULT NOW()' },
    updated_at: { type: 'TIMESTAMPTZ' }
  },

  //~ ---------------- Table Error
  error: {
    id: { type: 'INT GENERATED ALWAYS AS IDENTITY PRIMARY KEY' },
    error_snippet: { type: 'TEXT NOT NULL' },
    title: { type: 'TEXT NOT NULL' },
    abstract: { type: 'TEXT NOT NULL' },
    content: { type: 'TEXT NOT NULL' },
    user_id: { type: 'INTEGER NOT NULL' },
    status_id: { type: 'INTEGER NOT NULL' },
    error_comment_id: { type: 'INTEGER NULL' },
    created_at: { type: 'TIMESTAMPTZ NOT NULL DEFAULT NOW()' },
    updated_at: { type: 'TIMESTAMPTZ' }
  },

  //~ ---------------- Table Article Comment
  articleComment: {
    id: { type: 'INT GENERATED ALWAYS AS IDENTITY PRIMARY KEY' },
    content: { type: 'TEXT NOT NULL' },
    user_id: { type: 'INTEGER NOT NULL' },
    article_id: { type: 'INTEGER NOT NULL' },
    created_at: { type: 'TIMESTAMPTZ NOT NULL DEFAULT NOW()' },
    updated_at: { type: 'TIMESTAMPTZ' }
  },

  //~ ---------------- Table Error Comment
  errorComment: {
    id: { type: 'INT GENERATED ALWAYS AS IDENTITY PRIMARY KEY' },
    content: { type: 'TEXT NOT NULL' },
    user_id: { type: 'INTEGER NOT NULL' },
    error_id: { type: 'INTEGER NOT NULL' },
    created_at: { type: 'TIMESTAMPTZ NOT NULL DEFAULT NOW()' },
    updated_at: { type: 'TIMESTAMPTZ' }
  },

  //~ ---------------- Table Role
  role: {
    id: { type: 'INT GENERATED ALWAYS AS IDENTITY PRIMARY KEY' },
    name: { type: 'TEXT NOT NULL' }
  },

  //~ ---------------- Table Bad Word
  badWord: {
    id: { type: 'INT GENERATED ALWAYS AS IDENTITY PRIMARY KEY' },
    word: { type: 'TEXT NOT NULL' }
  },

  //~ ---------------- Table Status
  status: {
    id: { type: 'INT GENERATED ALWAYS AS IDENTITY PRIMARY KEY' },
    name: { type: 'TEXT NOT NULL' }
  },

  //~ ---------------- Table Category
  category: {
    id: { type: 'INT GENERATED ALWAYS AS IDENTITY PRIMARY KEY' },
    name: { type: 'TEXT NOT NULL' },
    logo: { type: 'TEXT NULL' }
  }
};

//& ---------------- Schemas Joi
const schemaJoi = {
  //~ ---------------- SchemaJoi User SignIn
  signIn: {
    email: { type: 'string' },
    password: { type: 'string' }
  },

  //~ ---------------- SchemaJoi User signUp
  signUp: {
    username: { type: 'string' },
    email: { type: 'string' },
    password: { type: 'string' },
    passwordConfirm: { type: 'string' }
  },

  //~ ---------------- SchemaJoi User updateUser
  updateUser: {
    username: { type: 'string' },
    email: { type: 'string' },
    password: { type: 'string' },
    passwordConfirm: { type: 'string' },
    title: { type: 'string' },
    presentation: { type: 'string' },
    profile_pic_url: { type: 'string' },
    linkedin_url: { type: 'string' },
    github_url: { type: 'string' },
    instagram_url: { type: 'string' },
    twitter_url: { type: 'string' },
    portfolio_url: { type: 'string' }
  },

  //~ ---------------- SchemaJoi User inactivateUser
  inactivateUser: {
    is_active: { type: 'boolean' }
  },

  //~ ---------------- SchemaJoi Create Article
  createArticle: {
    title: { type: 'string' },
    abstract: { type: 'string' },
    content: { type: 'string' },
    user_id: { type: 'integer' },
    status_id: { type: 'integer' }
  },

  //~ ---------------- SchemaJoi Update Article
  updateArticle: {
    title: { type: 'string' },
    abstract: { type: 'string' },
    content: { type: 'string' },
    user_id: { type: 'integer' },
    status_id: { type: 'integer' }
  },

  //~ ---------------- SchemaJoi Create Article
  createErrorTicket: {
    error_snippet: { type: 'string' },
    title: { type: 'string' },
    abstract: { type: 'string' },
    content: { type: 'string' },
    user_id: { type: 'integer' },
    status_id: { type: 'integer' },
    error_comment_id: { type: 'integer' }
  },

  //~ ---------------- SchemaJoi Update Article
  updateErrorTicket: {
    error_snippet: { type: 'string' },
    title: { type: 'string' },
    abstract: { type: 'string' },
    content: { type: 'string' },
    user_id: { type: 'integer' },
    status_id: { type: 'integer' },
    error_comment_id: { type: 'integer' }
  },

  //~ ---------------- SchemaJoi Create / Update Article Comment
  articleComment: {
    content: { type: 'string' },
    user_id: { type: 'integer' }
  },

  //~ ---------------- SchemaJoi Create / Update Error Comment
  errorComment: {
    content: { type: 'string' },
    user_id: { type: 'integer' }
  },

  //~ ---------------- SchemaJoi Create Category
  createCategory: {
    name: { type: 'string' },
    logo: { type: 'string' }
  }
};

//& ---------------- Info return
const infoReturn = {

  //^ ---------------- USER
  //~ ---------------- All Users
  allUsers: {
    id: { type: 'integer' },
    username: { type: 'string' },
    title: { type: 'string' },
    presentation: { type: 'string' },
    profile_pic_url: { type: 'string' },
    linkedin_url: { type: 'string' },
    github_url: { type: 'string' },
    instagram_url: { type: 'string' },
    twitter_url: { type: 'string' },
    portfolio_url: { type: 'string' }
  },

  //~ ---------------- One User
  oneUser: {
    id: { type: 'integer' },
    username: { type: 'string' },
    title: { type: 'string' },
    presentation: { type: 'string' },
    profile_pic_url: { type: 'string' },
    linkedin_url: { type: 'string' },
    github_url: { type: 'string' },
    instagram_url: { type: 'string' },
    twitter_url: { type: 'string' },
    portfolio_url: { type: 'string' }
  },

  //~ ---------------- Sign In User
  signInUser: {
    id: { type: 'integer' },
    username: { type: 'string' },
    title: { type: 'string' },
    profile_pic_url: { type: 'string' },
    role: { type: 'string' },
    accessToken: { type: 'string' },
    refreshToken: { type: 'string' }
  },

  //~ ---------------- PanelUser
  panelUser: {
    id: { type: 'integer' },
    username: { type: 'string' },
    title: { type: 'string' },
    presentation: { type: 'string' },
    profile_pic_url: { type: 'string' },
    linkedin_url: { type: 'string' },
    github_url: { type: 'string' },
    instagram_url: { type: 'string' },
    twitter_url: { type: 'string' },
    portfolio_url: { type: 'string' },

    last_4_articles_interactions: {
      type: 'array',
      items: {
        type: 'object',
        properties: {
          id: { type: 'integer' },
          title: { type: 'string' },
          abstract: { type: 'string' },
          content: { type: 'string' },
          created_at: { type: 'string' },
          categories: {
            type: 'array',
            maxItems: 3,
            items: { type: 'string', type: 'string', type: 'string' }
          },
          cheers_count: { type: 'integer' },
          user: {
            type: 'object',
            properties: {
              id: { type: 'integer' },
              username: { type: 'string' },
              title: { type: 'string' },
              profile_pic_url: { type: 'string' }
            }
          },
          comments: {
            type: 'array',
            items: {
              type: 'object',
              properties: {
                id: { type: 'integer' },
                content: { type: 'string' },
                created_at: { type: 'string' },
                cheers_count: { type: 'integer' },
                user: {
                  type: 'object',
                  properties: {
                    id: { type: 'integer' },
                    username: { type: 'string' },
                    title: { type: 'string' },
                    profile_pic_url: { type: 'string' }
                  }
                }
              }
            }
          },
          user_last_comment_id: { type: 'integer' }
        }
      }
    },

    last_4_errors_interactions: {
      type: 'array',
      items: {
        type: 'object',
        properties: {
          id: { type: 'integer' },
          title: { type: 'string' },
          abstract: { type: 'string' },
          error_snippet: { type: 'string' },
          content: { type: 'string' },
          created_at: { type: 'string' },
          categories: {
            type: 'array',
            maxItems: 3,
            items: { type: 'string', type: 'string', type: 'string' }
          },
          cheers_count: { type: 'integer' },
          user: {
            type: 'object',
            properties: {
              id: { type: 'integer' },
              username: { type: 'string' },
              title: { type: 'string' },
              profile_pic_url: { type: 'string' }
            }
          },
          comments: {
            type: 'array',
            items: {
              type: 'object',
              properties: {
                id: { type: 'integer' },
                content: { type: 'string' },
                created_at: { type: 'string' },
                cheers_count: { type: 'integer' },
                user: {
                  type: 'object',
                  properties: {
                    id: { type: 'integer' },
                    username: { type: 'string' },
                    title: { type: 'string' },
                    profile_pic_url: { type: 'string' }
                  }
                }
              }
            }
          },
          user_last_comment_id: { type: 'integer' }
        }
      }
    },
    user_articles: {
      type: 'array',
      items: {
        type: 'object',
        properties: {
          id: { type: 'integer' },
          title: { type: 'string' },
          abstract: { type: 'string' },
          status_id: { type: 'integer' },
          created_at: { type: 'string' },
          categories: {
            type: 'array',
            maxItems: 3,
            items: { type: 'string', type: 'string', type: 'string' }
          },
          comments_count:{ type: 'integer' },
          cheers_count: { type: 'integer' }
        }
      }
    },

    user_errors: {
      type: 'array',
      items: {
        type: 'object',
        properties: {
          id: { type: 'integer' },
          title: { type: 'string' },
          abstract: { type: 'string' },
          status_id: { type: 'integer' },
          created_at: { type: 'string' },
          categories: {
            type: 'array',
            maxItems: 3,
            items: { type: 'string', type: 'string', type: 'string' }
          },
          comments_count:{ type: 'integer' },
          cheers_count: { type: 'integer' }
        }
      }
    }
  },

  //^ ---------------- ARTICLE
  //~ ---------------- All Articles
  allArticles: {
    id: { type: 'integer' },
    title: { type: 'string' },
    abstract: { type: 'string' },
    content: { type: 'string' },
    created_at: { type: 'string' },
    categories: { type: 'array', maxItems: 3, items: { type: 'string', type: 'string', type: 'string' } },
    user: {
      type: 'object',
      properties: { id: { type: 'integer' }, username: { type: 'string' }, title: { type: 'string' }, profile_pic_url: { type: 'string' } }
    },
    comments: {
      type: 'array',
      items: {
        type: 'object',
        properties: {
          id: { type: 'integer' },
          content: { type: 'string' },
          created_at: { type: 'string' },
          cheers_count: { type: 'integer' },
          user: {
            type: 'object',
            properties: { id: { type: 'integer' }, username: { type: 'string' }, title: { type: 'string' }, profile_pic_url: { type: 'string' } }
          }
        }
      }
    }
  },

  //~ ---------------- One Article
  oneArticle: {
    id: { type: 'integer' },
    title: { type: 'string' },
    abstract: { type: 'string' },
    content: { type: 'string' },
    created_at: { type: 'string' },
    categories: { type: 'array', maxItems: 3, items: { type: 'string', type: 'string', type: 'string' } },
    user: {
      type: 'object',
      properties: { id: { type: 'integer' }, username: { type: 'string' }, title: { type: 'string' }, profile_pic_url: { type: 'string' } }
    },
    comments: {
      type: 'array',
      items: {
        type: 'object',
        properties: {
          id: { type: 'integer' },
          content: { type: 'string' },
          created_at: { type: 'string' },
          cheers_count: { type: 'integer' },
          user: {
            type: 'object',
            properties: { id: { type: 'integer' }, username: { type: 'string' }, title: { type: 'string' }, profile_pic_url: { type: 'string' } }
          }
        }
      }
    }
  },

  //~ ---------------- All Articles By Category
  allArticlesByCategory: {
    articles: { type: 'array', items: { type: 'object', properties: { title: { type: 'string' }, abstract: { type: 'string' } } } },
    category_id: { type: 'integer' },
    category: { type: 'string' }
  },

  //~ ---------------- All Articles By User
  allArticlesByUser: {
    articles: { type: 'array', items: { type: 'object', properties: { title: { type: 'string' }, abstract: { type: 'string' }, content: { type: 'string' } } }},
    user_id: { type: 'integer' },
    user_email: { type: 'string' } 
  },
  //~ ---------------- Lastest Articles
  lastestArticles: {
    id: { type: 'integer' },
    title: { type: 'string' },
    abstract: { type: 'string' },
    content: { type: 'string' },
    user_id: { type: 'integer' },
    created_at: { type: 'string' }
  },
  //~ ---------------- Search Articles
  searchArticle: {
    id: { type: 'integer' },
    title: { type: 'string' },
    abstract: { type: 'string' },
    content: { type: 'string' },
    created_at: { type: 'string' },
    categories: { type: 'array', maxItems: 3, items: { type: 'string', type: 'string', type: 'string' } },
    user: {
      type: 'object',
      properties: { id: { type: 'integer' }, username: { type: 'string' }, title: { type: 'string' }, profile_pic_url: { type: 'string' } }
    },
    comments: {
      type: 'array',
      items: {
        type: 'object',
        properties: {
          id: { type: 'integer' },
          content: { type: 'string' },
          created_at: { type: 'string' },
          cheers_count: { type: 'integer' },
          user: {
            type: 'object',
            properties: { id: { type: 'integer' }, username: { type: 'string' }, title: { type: 'string' }, profile_pic_url: { type: 'string' } }
          }
        }
      }
    }
  },





  //^ ---------------- ERROR TICKET
  //~ ---------------- All Error tickets
  allErrorTickets: {
    id: { type: 'integer' },
    title: { type: 'string' },
    abstract: { type: 'string' },
    error_snippet: { type: 'string' },
    content: { type: 'string' },
    created_at: { type: 'string' },
    error_comment_id: { type: 'integer' },
    categories: { type: 'array', maxItems: 3, items: { type: 'string', type: 'string', type: 'string' } },
    user: {
      type: 'object',
      properties: { id: { type: 'integer' }, username: { type: 'string' }, title: { type: 'string' }, profile_pic_url: { type: 'string' } }
    },
    comments: {
      type: 'array',
      items: {
        type: 'object',
        properties: {
          id: { type: 'integer' },
          content: { type: 'string' },
          created_at: { type: 'string' },
          cheers_count: { type: 'integer' },
          user: {
            type: 'object',
            properties: { id: { type: 'integer' }, username: { type: 'string' }, title: { type: 'string' }, profile_pic_url: { type: 'string' } }
          }
        }
      }
    }
  },
  //~ ---------------- One Error ticket
  oneErrorTicket:{
    id: { type: 'integer' },
    title: { type: 'string' },
    abstract: { type: 'string' },
    error_snippet: { type: 'string' },
    content: { type: 'string' },
    created_at: { type: 'string' },
    error_comment_id: { type: 'integer' },
    categories: { type: 'array', maxItems: 3, items: { type: 'string', type: 'string', type: 'string' } },
    user: {
      type: 'object',
      properties: { id: { type: 'integer' }, username: { type: 'string' }, title: { type: 'string' }, profile_pic_url: { type: 'string' } }
    },
    comments: {
      type: 'array',
      items: {
        type: 'object',
        properties: {
          id: { type: 'integer' },
          content: { type: 'string' },
          created_at: { type: 'string' },
          cheers_count: { type: 'integer' },
          user: {
            type: 'object',
            properties: { id: { type: 'integer' }, username: { type: 'string' }, title: { type: 'string' }, profile_pic_url: { type: 'string' } }
          }
        }
      }
    }
  },
  //~ ---------------- All Error tickets By Category
  allErrorTicketsByCategory:{
    error_tickets: { type: 'array', items: { type: 'object', properties: { error_snippet: { type: 'string' }, title: { type: 'string' }, abstract: { type: 'string' } } } },
    category_id: { type: 'integer' },
    category: { type: 'string' }
  },
  //~ ---------------- All Error tickets By User
  allErrorTicketsByUser:{
    error_tickets: { type: 'array', items: { type: 'object', properties: { error_snippet: { type: 'string' }, title: { type: 'string' }, abstract: { type: 'string' }, content : { type: 'string' } } } },
    user_id: { type: 'integer' },
    user_email: { type: 'string' }
  },
  //~ ---------------- Lastest Error ticket
  lastestErrorTickets:{
    id: { type: 'integer' },
    error_snippet: { type: 'string' }, 
    title: { type: 'string' },
    abstract: { type: 'string' },
    content: { type: 'string' },
    user_id: { type: 'integer' },
    created_at: { type: 'string' }
  },
  //~ ---------------- Search Error ticket
  searchErrorTicket:{
    id: { type: 'integer' },
    error_snippet: { type: 'string' },
    title: { type: 'string' },
    abstract: { type: 'string' },
    content: { type: 'string' },
    created_at: { type: 'string' },
    categories: { type: 'array', maxItems: 3, items: { type: 'string', type: 'string', type: 'string' } },
    user: {
      type: 'object',
      properties: { id: { type: 'integer' }, username: { type: 'string' }, title: { type: 'string' }, profile_pic_url: { type: 'string' } }
    },
    comments: {
      type: 'array',
      items: {
        type: 'object',
        properties: {
          id: { type: 'integer' },
          content: { type: 'string' },
          created_at: { type: 'string' },
          cheers_count: { type: 'integer' },
          user: {
            type: 'object',
            properties: { id: { type: 'integer' }, username: { type: 'string' }, title: { type: 'string' }, profile_pic_url: { type: 'string' } }
          }
        }
      }
    }
  },





  //^ ---------------- ARTICLE COMMENT
  //~ ---------------- All Article Comments
  allArticleComments: {
    id: { type: 'integer' },
    content: { type: 'string' },
    user_id: { type: 'integer' },
    article_id: { type: 'integer' },
    created_at: { type: 'string' },
    updated_at: { type: 'string' }
  },

  //~ ---------------- All Article Comment By User
  allArticleCommentsByUser: {
    user_id: { type: 'integer' },
    username: { type: 'string' },
    article_id: { type: 'integer' },
    article_title: { type: 'integer' },
    article_created_at: { type: 'string' },
    comments_content: { type: 'array', items: { type: 'object', properties: { content: { type: 'string' } } } }
  },

  //^ ---------------- ERROR TICKET COMMENT
  //~ ---------------- All Error Comments
  allErrorComments: {
      id: { type: 'integer' },
      content: { type: 'string' },
      user_id: { type: 'integer' },
      error_id: { type: 'integer' },
      created_at: { type: 'string' },
      updated_at: { type: 'string' }
  },

  //~ ---------------- All Error Comments By User
  allErrorCommentsByUser: {
      user_id: { type: 'integer' },
      username: { type: 'string' },
      error_id: { type: 'integer' },
      error_title: { type: 'integer' },
      error_created_at: { type: 'string' },
      comments_content: {  type: 'array', items: { type: 'object', properties: { content: { type: 'string'}}}}
  },


  //^ ---------------- CATEGORIES
  //~ ---------------- All Categories
  allCategories: {
    id: { type: 'integer' },
    name: { type: 'string' },
    logo: { type: 'string' }
  },
  //~ ---------------- All Categories By Article
  allCategoriesByArticle: {
    category: {
        type : 'array', 
        items: { type: 'object', 
        properties: {
            category_name: { type: 'string' },
            logo: { type: 'string' }
         }}
    },
    article_title: { type: 'string' },
    article_id: { type: 'integer' },
  },
  //~ ---------------- All Categories By Error Ticket
  allCategoriesByErrorTicket: {
    category: {
        type : 'array', 
        items: { type: 'object', 
        properties: {
            category_name: { type: 'string' },
            logo: { type: 'string' }
         }}
    },
    error_title: { type: 'string' },
    error_id: { type: 'integer' },
  }




};


export {
  required,
  example,
  properties,
  tableSql,
  schemaJoi,
  infoReturn
};
