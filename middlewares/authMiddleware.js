const jwt = require('jsonwebtoken');
const jwtSecret = require('../config/env');


const authMiddleware = (req, res, next)=>{

    const token = req.cookies.token;
    if(!token) return res.status(400).json({message: "Unauthorized"});

    try{
        const user = jwt.verify(token, jwtSecret);
        req.user = user;
        next();

    }catch(err){
      res.json({message: "Invalid Token"});
    }
}

module.exports = authMiddleware;