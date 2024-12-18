'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
  await queryInterface.bulkInsert('favorites', [
    {
      user_id: 1,
      store_id: 1,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {
      user_id: 1,
      store_id: 2,
      created_at: new Date(),
      updated_at: new Date(),
    },
  ])
  },

  async down (queryInterface, Sequelize) {
    // 挿入したデータを削除
    await queryInterface.bulkDelete('favorites', null, {});
  }
};
