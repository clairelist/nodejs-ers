//I YAM THE DB MODEL -- I COMMUNICATE WITH THE DATABASE ACTUAL!
const lego = require('../../data/db-config'); //must get from db-config, which configures how to use our knexfile !

function findById(user_id) {
    return lego('users')
      .where('user_id', user_id )
      .first();
}

function add(user) {
  //POSTGRESQL USES A DIFFERENT SYNTAX, BECAUSE OF FUCKING COURSE IT DOES.
    return lego('users').insert(user, '*'); //RETURNING * IE 
  }

  module.exports = {
    add,
    findById,
  }