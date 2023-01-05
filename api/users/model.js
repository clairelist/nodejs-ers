//I YAM THE DB MODEL -- I COMMUNICATE WITH THE DATABASE ACTUAL!
const lego = require('../../data/db-config'); //must get from db-config, which configures how to use our knexfile !

function findById(user_id) {
    return lego('users')
      .where('user_id', user_id )
      .first();
}

async function add(user) {
    const [id] = await lego('users').insert(user);
    return findById(id);
  }

  module.exports = {
    add,
    findById,
  }