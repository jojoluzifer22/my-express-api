const jwt = require('jsonwebtoken');
const jwtSecret = require('../config/env');


const authMiddleware = (req, res, next)=>{

    const token = req.cookies.token;
    if(!token) return res.status(401).json({message: "No token provided"});

    try{
        const user = jwt.verify(token, jwtSecret);
        req.user = user;
        next();

    }catch(err){
      res.status(401).json({message: "Invalid Token"});
    }
}

module.exports = authMiddleware;