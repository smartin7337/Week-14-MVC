const { Sequelize } = require("sequelize");

const sequelize = new Sequelize("ecommerce_db", "root", "", {
  host: "localhost",
  dialect: "mysql",
});

sequelize
  .authenticate()
  .then(() => {
    console.log("database connected successfully");
  })
  .catch(console.error);

module.exports = sequelize;
