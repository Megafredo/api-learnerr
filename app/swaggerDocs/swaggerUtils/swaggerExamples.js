
//~ User SignUp
const authSignUpExample = {
  username: 'Yumedo',
  email: 'yumedo@survivor.com',
  password: 'N6y$Ozddzt=1aa',
  passwordConfirm: 'N6y$Ozddzt=1aa',
};

const authSignUpProperties = {
  username: { type: 'string' },
  email: { type: 'string' },
  password: { type: 'string' },
  passwordConfirm: { type: 'string' },
};

//~ User SignIn
const authSignInExample = {
  email: 'yumedo@survivor.com',
  password: 'N6y$Ozddzt=1aa',
};

const authSignInProperties = {
  email: { type: 'string' },
  password: { type: 'string' },
};


//~ Users

const userExample = {
  id: 'integer',
  username: 'string',
  email: 'string',
  password: 'string',
  is_active: 'boolean',
  title: 'string',
  presentation: 'string',
  profile_pic_url: 'string',
  linkedin_url: 'string',
  github_url: 'string',
  instagram_url: 'string',
  twitter_url: 'string',
  portfolio_url: 'string',
  role_id: 'integer',
  created_at: 'string',
  updated_at: 'string'
};

const usersProperties = {
  id: { type: 'integer'},
  username: { type: 'string' },
  email: { type: 'string' },
  password: { type: 'string' },
  is_active: { type: 'boolean' },
  title: { type: 'string' },
  presentation: { type: 'string' },
  profile_pic_url: { type: 'string' },
  linkedin_url: { type: 'string' },
  github_url: { type: 'string' },
  instagram_url: { type: 'string' },
  twitter_url: { type: 'string' },
  portfolio_url: { type: 'string' },
  role_id: { type: 'integer' },
  created_at: { type: 'string' },
  updated_at: { type: 'string' }
};

//~ Articles

const articleExample = {
  id: 'integer',
  title: 'string',
  abstract: 'string',
  content: 'string',
  user_id: 'integer',
  status_id: 'integer',
  created_at: 'string',
  updated_at: 'string'
};

const articlesProperties = {
  id: { type: 'integer' },
  title: { type: 'string' },
  abstract: { type: 'string' },
  content: { type: 'string' },
  user_id: { type: 'integer' },
  status_id: { type: 'integer' },
  created_at: { type: 'string' },
  updated_at: { type: 'string' }
};

//~ Error tickets

const errorTicketExample = {
  id: 'integer',
  error_snippet: 'string',
  title: 'string',
  abstract: 'string',
  content: 'string',
  user_id: 'integer',
  status_id: 'integer',
  error_comment_id: 'integer',
  created_at: 'string',
  updated_at: 'string'
};

const errorTicketsProperties = {
  id: { type: 'integer' },
  error_snippet: { type: 'string' },
  title: { type: 'string' },
  abstract: { type: 'string' },
  content: { type: 'string' },
  user_id: { type: 'integer' },
  status_id: { type: 'integer' },
  error_comment_id: { type: 'integer' },
  created_at: { type: 'string' },
  updated_at: { type: 'string' }
};

//~ Article comments

const articleCommentExample = {
  id: 'integer',
  content: 'string',
  user_id: 'integer',
  article_id: 'integer',
  created_at: 'string',
  updated_at: 'string'
};

const articleCommentsProperties = {
  id: { type: 'integer' },
  content: { type: 'string' },
  user_id: { type: 'integer' },
  article_id: { type: 'integer' },
  created_at: { type: 'string' },
  updated_at: { type: 'string' }
};

//~ Error ticket comments

const errorTicketCommentExample = {
  id: 'integer',
  content: 'string',
  user_id: 'integer',
  error_id: 'integer',
  created_at: 'string',
  updated_at: 'string'
};

const errorTicketCommentsProperties = {
  id: { type: 'integer' },
  content: { type: 'string' },
  user_id: { type: 'integer' },
  error_id: { type: 'integer' },
  created_at: { type: 'string' },
  updated_at: { type: 'string' }
};

//~ Category

const categoryExample = {
  id: 'integer',
  name: 'string',
  logo_svg: 'string'
};

const categoryProperties = {
  id: { type: 'integer' },
  name: { type: 'string' },
  logo_svg: { type: 'string' }
};

export {
  authSignUpExample,
  authSignUpProperties,

  authSignInExample,
  authSignInProperties,

  userExample,
  usersProperties,
  articleExample,
  articleCommentExample,
  errorTicketExample,
  errorTicketCommentExample,
  categoryExample,
  categoryProperties,
  articlesProperties,
  articleCommentsProperties,
  errorTicketsProperties,
  errorTicketCommentsProperties
};
