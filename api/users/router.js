//I AM THE USER ROUTER! WOOOOO
const router = require('express').Router();
const User = require('./model');
const {checkPassword} = require('./middlewares');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const { JWT_SECRET } = require('./secret');

//must build token logic!

function buildToken(user){ //...how does this work again???
  const payload = {
    subject: user.id,
    email: user.email,
   
  };

  const options = {
    expiresIn: '1d',
  };

  return jwt.sign(payload, JWT_SECRET, options);
}

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

      const hash = bcrypt.hashSync(password, 8);
  
      //store in database !
      const newUser = { //CHECK setting password to hash here works!
        email,
        password: hash,
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

  router.post('/login', async (req, res, next)=>{ //TODO: PASS checkPassword here, once built!
      try {
        const {email, password} = req.body;
        const [user] = await User.findByFilter({email}); //TODO: BUILD AND TEST!

        if (bcrypt.compareSync(password, user.password)){
          const token = buildToken(req.body);
          res.status(200).json({message:`Welcome, ${user.first_name}.`, token});
        } else {
          res.status(403).json({message: 'Bad credentials supplied.'}); //TODO: REFACTOR TO CALL NEXT HERE.
        }

      } catch (err) {
        next(err); //do something else
      }
      //returns a token to be used by application.
  })

  // router.post('/logout', async, (req, res, next)=>{
  //   //destroy / invalidate token of user.
  //   //passed in req.headers.authorization
  // })

  module.exports = router;