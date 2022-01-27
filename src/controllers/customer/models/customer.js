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
    avatar: {
        type: Sequelize.STRING,
        allowNull: true
    },
    city: {
        type: Sequelize.STRING,
        allowNull: false
    },
    district: {
        type: Sequelize.STRING,
        allowNull: false
    },
    wards: {
        type: Sequelize.STRING,
        allowNull: false
    },
    detailAddress: {
        type: Sequelize.STRING,
        allowNull: false
    },
    status: {
        type: Sequelize.BOOLEAN,
        allowNull: false,
        defaultValue: true
    },
});
module.exports = Customer