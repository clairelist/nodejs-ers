//I AM THE USER ROUTER! WOOOOO
const router = require('express').Router();
const User = require('./model');
const {checkPassword} = require('./middlewares');

//I control account creation, login, updating user info, and one more thing Claire is not thinking of.

router.post('/register', async (req, res, next)=>{
    try {
      //pull creds from req body
      const {
        email,
        password,
        first_name,
        last_name,
        phone_number,
        role
        } = req.body;
  
      //hash the passwordr! 
      //const hash = bcrypt.hashSync(password, 8); //pass the thing being hashed, then the number of passes
  
      //store in database !
      const newUser = {
        email,
        password,
        first_name,
        last_name,
        phone_number,
        role
        };

      const inserted = await User.add(newUser);
  
      //then, we respond
      res.status(201).json(inserted);

    } catch(err) {
      next(err); 
    }
  });

  router.post('/login', async, checkPassword, (req, res, next)=>{
      //hash the passwordr! 
      //const hash = bcrypt.hashSync(password, 8); //pass the thing being hashed, then the number of passes

      //returns a token to be used by application.
  })

  router.post('/logout', async, (req, res, next)=>{
    //destroy / invalidate token of user.
    //passed in req.headers.authorization
  })

  module.exports = router;