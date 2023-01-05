const knex = require('knex');
const { development } = require('../knexfile');
const knexfile = require('../knexfile');

//const env = process.env.NODE_ENV || 'development';
//USED FOR PRODUCTION! for now, call knexfile[development], below.

const configOptions = knexfile[development];

module.exports = knex(configOptions);