const Sequelize = require("sequelize");
const Request = require('../../request/models/request') 
const Customer = require('../../customer/models/customer') 
const db = require('../../base/mysql/mysql');

const Device = db.sequelize.define('device', {
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
    statusDevice: {
        type: Sequelize.ENUM('0','1','2','3'),
        allowNull: false,
        defaultValue: "0"
    },
    customerId: {
        type: Sequelize.INTEGER,
        allowNull: false,
    },
    phoneCustomer: {
        type: Sequelize.STRING,
        allowNull: false,
    }
});

Device.hasMany(Request, {foreignKey: 'deviceId', sourceKey: 'deviceId'});
Request.belongsTo(Device, {foreignKey: 'deviceId', sourceKey: 'deviceId'})
Customer.hasMany(Device, {foreignKey: 'customerId', sourceKey: 'id'});
Device.belongsTo(Customer, {foreignKey: 'customerId', sourceKey: 'id'})

module.exports = Device