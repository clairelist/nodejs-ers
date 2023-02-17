//restricted, which does not allow access if req.headers.auth token is not supplied
// --> view own tix, create ticket
const jwt = require('jsonwebtoken');
const { JWT_SECRET } = require('./secret');

function restricted(req, res, next){
    //this is for a restricted route
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
   


//checkRole, prevents non-managers from updating tickets --> updateTicket, viewByStatus ?

//checkOwner, restricts access to updating own ticket --> updateTicket <put into restricted middleware??>

module.exports = {
    restricted,
}