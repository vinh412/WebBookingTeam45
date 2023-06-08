'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class BankAccount extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  BankAccount.init({
    CustomerID: DataTypes.INTEGER,
    bankNumber: DataTypes.STRING,
    bankName: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'BankAccount',
  });
  return BankAccount;
};