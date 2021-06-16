const { DataTypes } = require("sequelize/types");
const Sequelize = require("sequelize");
const db = require("../DB");
const Post = db.define("Post", {
  body: {
    type: DataTypes.TEXT,
    allowNull: false,
  },
  user_id: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
  timeStamp: {
    type: DataTypes.DATE,
    defaultValue: Sequelize.NOW,
  },
  title: {
    type: DataTypes.STRING,
    allowNull: false,
  },
});

module.exports = Post;
