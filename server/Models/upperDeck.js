const sequelize = require("../util/database");
const Sequelize = require("sequelize");

const UpperDeck = sequelize.define(
  "bus-upper",
  {
    id: {
      type: Sequelize.INTEGER,
      primaryKey: true,
    },
    price: {
      type: Sequelize.INTEGER,
      allowNull: false,
    },
    reserved: {
      type: Sequelize.STRING,
    },
    isBooked: {
      type: Sequelize.BOOLEAN,
      allowNull: true,
    },
  },
  {
    timestamps: false,
  }
);

module.exports = UpperDeck;
