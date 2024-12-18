'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    // comment カラムを追加
    await queryInterface.addColumn('reviews', 'comment', {
      type: Sequelize.TEXT,
      allowNull: false, // 必須項目
      defaultValue: 'Default comment', // 初期値を設定してエラー回避
    });
  },

  async down(queryInterface, Sequelize) {
    // comment カラムを削除
    await queryInterface.removeColumn('reviews', 'comment');
  },
};
