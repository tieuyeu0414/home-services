const Sequelize = require("sequelize");

const db = require('../../base/mysql/mysql');

const Customer = db.sequelize.define('customer', {
    id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        primaryKey: true
    },
    phone: {
        type: Sequelize.STRING,
        allowNull: false,
        unique: true
    },
    name: {
        type: Sequelize.STRING,
        allowNull: false,
        validate: {
            len: {
                args: [6, 30],
                msg: 'Name display must be between 5 and 30 characters in length'
            }
        }
    },
    deviceId: {
        type: Sequelize.UUID,
        allowNull: false,
        unique: true,
        defaultValue: Sequelize.UUIDV4
    },
    avatar: {
        type: Sequelize.STRING,
        allowNull: true
    },
    city: Sequelize.STRING,
    district: Sequelize.STRING,
    wards: Sequelize.STRING,
    detailAdress: Sequelize.STRING,
    status: {
        type: Sequelize.BOOLEAN,
        allowNull: false,
        defaultValue: true
    },
});

module.exports = Customer