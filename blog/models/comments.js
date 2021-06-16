const { DataTypes } = require("sequelize/types");
const Sequelize = require("sequelize");
const db = require("../DB");

const Comment = db.define("Comment", {
  body: {
    type: DataTypes.TEXT,
    allowNull: false,
  },
  user_id: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
  post_id: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
  timeStamp: {
    type: DataTypes.DATE,
    defaultValue: Sequelize.NOW,
  },
});

module.exports = Comment;
