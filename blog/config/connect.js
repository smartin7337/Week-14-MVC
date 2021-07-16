const Sequelize = require("sequelize");
require("dotenv").config();
// create connection to db
const sequelize = process.env.JAWSDB_URL
  ? new Sequelize(process.env.JAWSDB_URL)
  : new Sequelize(process.env.DB_NAME, "root", process.env.DB_PW, {
      host: "localhost",
      dialect: "mysql",
      port: 3306,
    });
module.exports = sequelize;
