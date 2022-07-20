//~ Import Debug 
import debug from 'debug'; 
const logger = debug('Pool');

//~ Import pg
import pg from 'pg';
// Deployement
// const pool = new pg.Pool({
//   connectionString: process.env.DATABASE_URL,
//   ssl: { rejectUnauthorized: true }
// });
const pool = new pg.Pool();

pool.connect()
  .then( () => logger('DB connected') )
  .catch((err) => logger('DB connection failed', err));

export { pool };
