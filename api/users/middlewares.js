//import user model stuff, for checking password below



//checkLogin, checks login details provided by user are equal to details in DB

//checkEmailValid, checks that email is unique in DB on registration. Seperate from below!!!

//validate, validates information on registration (password is acceptable length, character reqs?, no field is blank or contains whitespaces --> chekc with command re: edge cases of names having spaces "von Tscharner", etc)


function checkPassword(req){
    if (req.body.password !== passFromDB){
        next(err);
    } 
    next(req.body);
}

module.exports = {
    checkPassword,
}