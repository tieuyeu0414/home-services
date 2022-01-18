const Sequelize = require("sequelize");
// const Customer = require('../../customer/models/customer')
const db = require('../../base/mysql/mysql');

const Request = db.sequelize.define('request', {
    id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        primaryKey: true
    },
    phoneCustomer: {
        type: Sequelize.STRING,
        allowNull: false
    },
    deviceId: {
        type: Sequelize.STRING,
        allowNull: false,
        unique: true
    },
    services: {
        type: Sequelize.ENUM,
        values: ['1', '2', '3', '4', '5'],
        comment: "1:Điều hòa, 2:Máy lọc nước, 3:Tủ lạnh, 4:Bình nóng lạnh, 5:Dịch vụ"
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
        type: Sequelize.STRING,
        allowNull: false,
        unique: true
    },
});

// Request.belongsTo(Customer, {foreignKey: 'phoneCustomer', targetKey: 'phone'});

module.exports = Request