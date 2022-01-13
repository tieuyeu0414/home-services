const Sequelize = require("sequelize");

const db = require('../../base/mysql/mysql');

const Service = db.sequelize.define('service', {
    id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        primaryKey: true
    },
    nameService: {
        type: Sequelize.STRING,
        allowNull: false
    },
});

module.exports = Service