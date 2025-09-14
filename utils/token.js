const jwt = require("jsonwebtoken");
const { jwtSecret} = require("../config/env");

const generateToken = (user)=>{
    console.log('jwtSecret type:', typeof jwtSecret, 'value:', jwtSecret?.toString?.().slice?.(0,20));
    return jwt.sign(
        { id: user.id, name: user.name, email: user.email, role: user.role, dob: user.dob} ,
        jwtSecret,
        {expiresIn: '3h'}
    );
}

module.exports = { generateToken};