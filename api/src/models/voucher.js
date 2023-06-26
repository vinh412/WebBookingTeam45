'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Voucher extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Voucher.init({
    code: DataTypes.STRING,
    discountValue: DataTypes.INTEGER,
    expiryDate: DataTypes.DATE,
    voucherQuantity: DataTypes.INTEGER,
    minimumBookingValue: DataTypes.INTEGER,
    maximumDiscount: DataTypes.INTEGER,
    usageCount: DataTypes.INTEGER,
    status: DataTypes.INTEGER,
    description: DataTypes.STRING,
    voucherType: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'Voucher',
  });
  return Voucher;
};