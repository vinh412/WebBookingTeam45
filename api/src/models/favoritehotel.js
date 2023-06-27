'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class FavoriteHotel extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  FavoriteHotel.init({
    customerID: DataTypes.INTEGER,
    hotelID: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'FavoriteHotel',
  });
  return FavoriteHotel;
};