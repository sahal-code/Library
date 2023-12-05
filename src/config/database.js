
const { Sequelize } = require('sequelize');

const sequelize = new Sequelize('library', 'test', 'root', {
  host: 'localhost',
  dialect: 'postgres',
});

module.exports = sequelize;
