'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('Customer', [{
      phone: "0123456789",
      name: "Quynh",
      deviceId:"12",
      avatar:"asdasdasd",
      city:"HCM",
      district:"Q10",
      wards:"DB",
      status:1,
      createdAt: new Date(),
      updatedAt: new Date()
    }]);
  },

  down: async (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('Customer', null, {});
  }
};
