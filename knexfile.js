//I don't think I NEED migrations, as table creation is being done through dbeaver
//I just need to connect to the database!
//this file is then required in wherever we make our actual queries (gonna be model files)

//IE, this is for all intents and purposes our db-config.

require('dotenv').config();

const knex = require('knex')({
    client: 'pg',
    connection: {
      host : `${process.env.DB_URL}`,
      port : 5432,
      user : `${process.env.DB_USERNAME}`,
      password : `${process.env.DB_PASS}`,
      database : 'postgres'
    },
    pool: { min: 0, max: 7 }
  });

  module.exports = {knex};