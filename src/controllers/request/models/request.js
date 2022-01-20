const Sequelize = require("sequelize");
const Customer = require('../../customer/models/customer')
const Device = require('../../device/models/device')
const db = require('../../base/mysql/mysql');
const Staff = require('../../admin/models/staff')

const Request = db.sequelize.define('request', {
    id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        primaryKey: true
    },
    customerPhone: {
        type: Sequelize.STRING,
        allowNull: false
    },
    deviceId: {
        type: Sequelize.STRING,
        allowNull: false,
    },
    services: {
        type: Sequelize.ENUM,
        values: ['1', '2', '3', '4', '5'],
        comment: "1:Điều hòa, 2:Máy lọc nước, 3:Tủ lạnh, 4:Bình nóng lạnh, 5:Dịch vụ",
        defaultValue: "5"
    },
    note: {
        type: Sequelize.TEXT,
        allowNull: false,
    },
    status: {
        type: Sequelize.ENUM('0','1','2','3'),
        allowNull: false,
        defaultValue: "0"
    },
    staffId: {
        type: Sequelize.STRING,
        allowNull: false,
    },
});


Customer.hasMany(Request, {foreignKey: 'customerPhone', sourceKey: 'phone'});
Request.belongsTo(Customer, {foreignKey: 'customerPhone', targetKey: 'phone'});
Device.hasMany(Request, {foreignKey: 'deviceId', sourceKey: 'deviceId'});
Request.belongsTo(Device, {foreignKey: 'deviceId', targetKey: 'deviceId'});
Staff.hasMany(Request, {foreignKey: 'staffId', sourceKey: 'staffId'});
Request.belongsTo(Staff, {foreignKey: 'staffId', targetKey: 'staffId'})

module.exports = Request