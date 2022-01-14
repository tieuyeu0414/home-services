const Sequelize = require("sequelize");

const db = require('../../base/mysql/mysql');
const Staff = require('../../admin/models/staff')

const Request = db.sequelize.define('request', {
    id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        primaryKey: true
    },
    customerId: {
        type: Sequelize.INTEGER,
        allowNull: false
    },
    deviceId: {
        type: Sequelize.STRING,
        allowNull: false
    },
    serviceId: {
        type: Sequelize.INTEGER,
        allowNull: false
    },
    note: {
        type: Sequelize.TEXT,
    },
    status: {
        type: Sequelize.ENUM('0','1','2','3'),
        allowNull: false,
        defaultValue: "0"
    },
    staffId: {
        type: Sequelize.INTEGER,
        allowNull: false
    },
});

Request.belongsTo(Staff);
Staff.hasOne(Request)


module.exports = Request