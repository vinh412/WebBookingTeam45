'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Hotel extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Hotel.init({
    accountID: DataTypes.INTEGER,
    nameHotel: DataTypes.STRING,
    revenua: DataTypes.INTEGER,
    fee: DataTypes.INTEGER,
    phoneNumber: DataTypes.STRING,
    type: DataTypes.INTEGER,
    address: DataTypes.STRING,
    evaluate: DataTypes.INTEGER,
    numberReview: DataTypes.INTEGER,
    description: DataTypes.STRING,
    minCost: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'Hotel',
  });
  return Hotel;
};