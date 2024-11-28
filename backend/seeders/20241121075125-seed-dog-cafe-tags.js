'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert(
      "dog_cafe_tags",
      [
        { name: "店内OK", createdAt: new Date(), updatedAt: new Date() },
        { name: "テラス席OK", createdAt: new Date(), updatedAt: new Date() },
        { name: "大型犬OK", createdAt: new Date(), updatedAt: new Date() },
        { name: "駐車場あり", createdAt: new Date(), updatedAt: new Date() },
        { name: "わんこメニューあり", createdAt: new Date(), updatedAt: new Date() },
      ])
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete("dog_cafe_tags", null, {});
  }
};
