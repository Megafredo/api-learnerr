//~ Import Debug
import debug from 'debug';
const logger = debug('Controller');

//~ Controller
function swaggerDocsLink(req, res) {
  try {
    res.json({
      message: 'Welcome to Learn(Err) API',
      link: ''
    });
  } catch (err) {
    logger(err.message);
  }
}

export { swaggerDocsLink };
