'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert(
      "tags_facility",
      [
        { name: "おしっこじょうろあり", createdAt: new Date(), updatedAt: new Date() },
        { name: "うんち袋あり", createdAt: new Date(), updatedAt: new Date() },
        { name: "ゴミ箱あり(うんち)", createdAt: new Date(), updatedAt: new Date() },
        { name: "洗い場あり", createdAt: new Date(), updatedAt: new Date() },
        { name: "トイレあり（人間用）", createdAt: new Date(), updatedAt: new Date() },
        { name: "水飲み場あり", createdAt: new Date(), updatedAt: new Date() },
      ],
      {}
    );
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete("tags_facility", null, {});
  }
};
