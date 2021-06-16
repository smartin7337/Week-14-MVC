const { DataTypes } = require("sequelize/types");
const db = require("../DB");
const User = db.define("User", {
  username: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  password: {
    type: DataTypes.STRING,
    allowNull: false,
  },
});

module.exports = User;
