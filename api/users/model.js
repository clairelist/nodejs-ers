//I YAM THE DB MODEL -- I COMMUNICATE WITH THE DATABASE ACTUAL!
const lego = require('../../data/db-config'); //must get from db-config, which configures how to use our knexfile !

function findById(user_id) {
    return lego('users')
      .where('user_id', user_id )
      .first();
}

async function add(user) {
  //AT LEAST NOW WE ARE GETTING A DIF ERROR, INVALID INPUT TYPE FOR INT BELOW (ID)
    const [id] = await lego('users').insert(user);
    console.log(findById(id));
    //return findById(id);
  }

  module.exports = {
    add,
    findById,
  }