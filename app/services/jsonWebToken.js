//~ Import Debug 
import debug from 'debug'; 
const logger = debug('Jwt');

//~ Import modules
import jwt from 'jsonwebtoken';

import {ErrorApi} from './errorHandler.js';


//~  Jwt Access_Token
function generateAccessToken(user) {
    return jwt.sign(user, process.env.ACCESS_TOKEN_SECRET, { expiresIn: '1d' }); // 1d => one day, 60m => 60 minutes
}
  
function generateRefreshToken(user, req) {
    //* -- register refresh tokens
    req.session.refreshToken = [];
    const token = req.session.refreshToken;
  
    const refreshToken = jwt.sign(user, process.env.REFRESH_TOKEN_SECRET, { expiresIn: '20m' }); // 1d => one day, 60m => 60 minutes
  
    token.push(refreshToken);
  
    return refreshToken;
}

//~ Get refresh token
function getRefreshToken(req, res, next) {
    try {
      //get token from header
      const authHeader = req.headers['authorization'];
  
      if (authHeader === undefined) throw new ErrorApi('No token found', req, res, 400);
      
    //   header contains token "Bearer <token>", split the string and get the 2nd part of the array
      let refreshToken = authHeader.split(' ')[1];
      
      jwt.verify(refreshToken, process.env.REFRESH_TOKEN_SECRET, (err, user) => {
  
        if (err) {
          throw new ErrorApi('Token is invalid !', req, res, 403);
        }
        // reset refresh token in session
        req.session.refreshToken = [];
  
        return refreshToken;
  
      });
    } catch (err) {
      logger(err.message);
    }
  }
  
//~  Jwt Refresh_Token
function refreshToken(req, res) {
    
    getRefreshToken(req, res);

    if (req.session.refreshToken?.length === 0) {

      //delete old token and replace with new token
      const accessToken = generateAccessToken({ user: req.body.email });
      const refreshToken = generateRefreshToken({ user: req.body.email }, req);
  
      //generate a new accessToken and refreshToken
      return res.status(200).json({ accessToken, refreshToken });
    }

  }

  export {generateAccessToken, generateRefreshToken, refreshToken};