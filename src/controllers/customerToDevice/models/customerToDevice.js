const Sequelize = require("sequelize");
const Customer = require('../../customer/models/customer')
const db = require('../../base/mysql/mysql');

const CustomerToDevice = db.sequelize.define('customerToDevice', {
    id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        primaryKey: true
    },
    deviceId: {
        type: Sequelize.STRING,
        allowNull: false,
        unique: true
    },
    customerId: {
        type: Sequelize.INTEGER,
        allowNull: false,
        unique: true
    },
});

Customer.hasMany(CustomerToDevice, {foreignKey: 'customerId', sourceKey: 'id'});
// Request.belongsTo(Customer, {foreignKey: 'phoneCustomer', targetKey: 'phone'});

module.exports = CustomerToDevice