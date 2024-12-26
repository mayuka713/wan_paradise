'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    // commentカラムの型変更
    await queryInterface.changeColumn('reviews', 'comment', {
      type: Sequelize.TEXT,
      allowNull: false,
    });
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.removeColumn('reviews', 'comment', {
      type: Sequelize.STRING,
      allowNull: true,
    });
  },
};
