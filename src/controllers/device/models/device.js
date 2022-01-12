const Sequelize = require("sequelize");

const db = require('../../base/mysql/mysql');

const Device = db.sequelize.define('device', {
    id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        primaryKey: true
    },
    deviceId: {
        type: Sequelize.STRING,
        allowNull: false
    },
    statusDevice: {
        type: Sequelize.ENUM('0','1','2','3'),
        allowNull: false,
        defaultValue: 0
    },
    customerId: {
        type: Sequelize.STRING,
        allowNull: false
    },
});

module.exports = Device