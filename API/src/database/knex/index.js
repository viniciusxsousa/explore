const config = require('../../../knexfile');
const knex = require('knex');

const connection = knex(config);

module.exports = connection;