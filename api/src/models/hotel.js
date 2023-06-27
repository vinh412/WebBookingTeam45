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
      Hotel.hasMany(models.Photo, {
        foreignKey: "hotelID",
        as: "images"
      });

      Hotel.hasMany(models.Room, {
        foreignKey: "hotelID",
        as: "rooms"
      });

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
    longitude: DataTypes.DOUBLE,
    latitude: DataTypes.DOUBLE,
    evaluate: DataTypes.FLOAT,
    numberReview: DataTypes.INTEGER,
    description: DataTypes.STRING,
    status: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'Hotel',
  });
  return Hotel;
};