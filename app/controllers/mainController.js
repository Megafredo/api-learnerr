//~ Import Debug 
import debug from 'debug'; 
const logger = debug('mainController');

//~ Controller
function swaggerDocsLink(req, res) {
    try {
        res.json({
            message: 'Welcome to Learn(Err) API',
            link: 'ICI LIEN SWAGGER DOCS'
        })
        
    } catch (err) {
        logger(err.message);
    }
}

export { swaggerDocsLink };