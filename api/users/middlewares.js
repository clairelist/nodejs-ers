//import user model stuff, for checking password below

function checkPassword(req){
    if (req.body.password !== passFromDB){
        next(err);
    } 
    next(req.body);
}

module.exports = {
    checkPassword,
}