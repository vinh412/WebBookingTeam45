'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Room extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Room.init({
    name: DataTypes.STRING,
    hotelID: DataTypes.INTEGER,
    cost: DataTypes.INTEGER,
    quantity: DataTypes.INTEGER,
    emptyRoom: DataTypes.INTEGER,
    salePrice: DataTypes.INTEGER,
    area:DataTypes.INTEGER,
    singleBed:DataTypes.INTEGER,
    doubleBed:DataTypes.INTEGER,


  }, {
    sequelize,
    modelName: 'Room',
  });
  return Room;
};