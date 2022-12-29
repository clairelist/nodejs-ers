//I YAM THE DB MODEL -- I COMMUNICATE WITH THE DATABASE ACTUAL!
const lego = require('../../knexfile'); //THIS is giving us an issue. 'x is not a function'

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