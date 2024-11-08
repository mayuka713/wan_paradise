'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert('tags', [
      { name: '自然芝生', createdAt: new Date(), updatedAt: new Date() },
      { name: '人工芝生', createdAt: new Date(), updatedAt: new Date() },
      { name: '全種利用可能', createdAt: new Date(), updatedAt: new Date() },
      { name: '小型犬エリアあり', createdAt: new Date(), updatedAt: new Date() }
    ], {});
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete('tags', null, {});
  }
};
