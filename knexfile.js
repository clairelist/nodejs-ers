require('dotenv').config();

module.exports = {
    development: {
    client: 'pg',
    connection: {
      host : `${process.env.DB_URL}`,
      port : 5432,
      user : `${process.env.DB_USERNAME}`,
      password : `${process.env.DB_PASS}`,
      database : 'postgres'
    },
    pool: { min: 0, max: 7 },
    migrations: {directory: './data/migrations'},
    seeds: {directory: './data/seeds'}
  }};
