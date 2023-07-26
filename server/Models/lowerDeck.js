const sequelize = require("../util/database");
const Sequelize = require("sequelize");

const LowerDeck = sequelize.define("bus", {
  id: {
    type: Sequelize.INTEGER,
    primaryKey: true,
  },
  price: {
    type: Sequelize.INTEGER,
    allowNull: false,
  },
  reserved : {
    type : Sequelize.STRING
  },
  isBooked: {
    type: Sequelize.BOOLEAN,
    allowNull: true,
  },
}, {
  timestamps: false,
});
    
module.exports = LowerDeck;
