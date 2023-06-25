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
    name: DataTypes.STRING,
    revenua: DataTypes.INTEGER,
    fee: DataTypes.INTEGER,
    phoneNumber: DataTypes.STRING,
    type: DataTypes.INTEGER,
    address: DataTypes.STRING,
    longitude: DataTypes.FLOAT,
    latitude: DataTypes.FLOAT,
    evaluate: DataTypes.FLOAT,
    numberReview: DataTypes.INTEGER,
    description: DataTypes.TEXT,
    minCost: DataTypes.INTEGER,
    saleMax: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'Hotel',
  });
  return Hotel;
};