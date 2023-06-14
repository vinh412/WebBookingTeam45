'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class TypeRoom extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  TypeRoom.init({
    category: DataTypes.INTEGER,
    occupancy: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'TypeRoom',
  });
  return TypeRoom;
};