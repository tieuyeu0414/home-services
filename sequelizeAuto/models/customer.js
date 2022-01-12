'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Customer extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  };
  Customer.init({
    phone: DataTypes.STRING,
    name: DataTypes.STRING,
    deviceId:DataTypes.JSON,
    avatar:DataTypes.STRING,
    city:DataTypes.STRING,
    district:DataTypes.STRING,
    wards:DataTypes.STRING,
    status:DataTypes.BOOLEAN,
  }, {
    sequelize,
    modelName: 'Customer',
  });
  return Customer;
};