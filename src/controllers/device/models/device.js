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
    customerPhone: {
        type: Sequelize.STRING,
        allowNull: false,
    },
});

Device.hasMany(Request, {foreignKey: 'deviceId', sourceKey: 'deviceId'});
Request.belongsTo(Device, {foreignKey: 'deviceId', sourceKey: 'deviceId'})
Customer.hasMany(Device, {foreignKey: 'customerPhone', sourceKey: 'phone'});
Device.belongsTo(Customer, {foreignKey: 'customerPhone', targetKey: 'phone'});

module.exports = Device