//I AM THE USER ROUTER! WOOOOO
const router = require('express').Router();
const User = require('./model');

//I control account creation, login, updating user info, and one more thing Claire is not thinking of.

router.post('/register', async (req, res, next)=>{
    try {
      //pull creds from req body
      const {
        
        email,
        password,
        first_name,
        last_name,
        phone_number
        } = req.body;
  
      //hash the passwordr! 
      //const hash = bcrypt.hashSync(password, 8); //pass the thing being hashed, then the number of passes
  
      //store in database !
      const newUser = {
        
        email,
        password,
        first_name,
        last_name,
        phone_number
        };

      const inserted = await User.add(newUser);
  
      //then, we respond
      res.status(200).json(inserted);

    } catch(err) {
      next(err); //error is going to postman because of this line. But the record is being created in the db. ARRRRRRRGGGGG
    }
  });

  module.exports = router;