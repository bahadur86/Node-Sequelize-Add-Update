const Sequelize = require('sequelize');

const sequelize = new Sequelize('node-mysql', 'root', 'password', {
    dialect: 'mysql',
    host: 'localhost'
});

module.exports = sequelize;