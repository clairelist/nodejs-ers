//import user model stuff, for checking password below
const User = require('./model');
const jwt = require('jsonwebtoken');
const { JWT_SECRET } = require('./secret');


//checkLogin, checks login details provided by user are equal to details in DB

//checkEmailValid, checks that email is unique in DB on registration. Seperate from below!!!

//validate, validates information on registration (password is acceptable length, character reqs?, no field is blank or contains whitespaces --> chekc with command re: edge cases of names having spaces "von Tscharner", etc)


function checkPassword(req, res, next){

    let token = req.headers.authorization;

    if (!token){ //error checking...
        res.status(401).json({message: "A TOKEN is REQUIRED."})
    } else {
        jwt.verify(token, JWT_SECRET, (error, decoded)=>{
            if (error) {
                res.status(401).json({message: "TOKEN is INVALID."})
            } else {
                req.decoded = decoded;
                next();
            }
        })
    }
}

module.exports = {
    checkPassword,
}