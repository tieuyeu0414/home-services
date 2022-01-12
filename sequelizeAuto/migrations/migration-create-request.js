'use strict';
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('request', {
    //     customerId: DataTypes.INTEGER,
    // deviceId: DataTypes.STRING,
    // serviceId: DataTypes.STRING,
    // note: DataTypes.STRING,
    // status: DataTypes.BOOLEAN,
    // staffId: DataTypes.STRING
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      customerId: {
        type: Sequelize.INTEGER
      },
      deviceId: {
        type: Sequelize.STRING
      },
      serviceId: {
        type: Sequelize.INTEGER
      },
      note: {
        type: Sequelize.STRING
      },
      status: {
        type: Sequelize.BOOLEAN
      },
      staffId: {
        type: Sequelize.INTEGER
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('request');
  }
};