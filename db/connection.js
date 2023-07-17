const { Sequelize } = require('sequelize');

const isProduction = process.env.NODE_ENV === 'production';
let sequelize;

if (isProduction) {
  sequelize = new Sequelize(process.env.JAWSDB_URL, {
    dialect: 'mysql'
  });
} else {
  sequelize = new Sequelize('', 'root', '', {
    host: 'localhost',
    dialect: 'mysql'
  });
}

module.exports = sequelize;