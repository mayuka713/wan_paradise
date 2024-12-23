'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    // reviews テーブルにデータを追加 dogrun review list
    await queryInterface.bulkInsert('reviews', [
      {
        store_id: 1,
        rating: 5,
        comment: '良い体験ができました',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        store_id: 2,
        rating: 4,
        comment: '良い体験ができました。',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        store_id: 3,
        rating: 4,
        comment: '良い体験ができました。',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        store_id: 4,
        rating: 3,
        comment: '良い体験ができました。',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        store_id: 5,
        rating: 3,
        comment: '良い体験ができました。',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        store_id: 6,
        rating: 5,
        comment: '良い体験ができました。',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        store_id: 7,
        rating: 3,
        comment: '良い体験ができました。',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        store_id: 8,
        rating: 4,
        comment: '良い体験ができました。',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ]);
  },

  async down(queryInterface, Sequelize) {
    // reviews テーブルのデータを削除
    await queryInterface.bulkDelete('reviews', null, {});
  },
};
