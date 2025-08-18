const jwt = require("jsonwebtoken");
const { jwtSecret} = require("../config/env");

const generateToken = (user)=>{
    return jwt.sign(
        { id: user.id, name: user.name, email: user.email, role: user.role, dob: user.dob} ,
        jwtSecret,
        {expiresIn: '3h'}
    );
}

module.exports = { generateToken};