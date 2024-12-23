'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    // stores テーブルに prefecture_id カラムを追加
    await queryInterface.addColumn('stores', 'prefecture_id', {
      type: Sequelize.INTEGER,
      allowNull: true,
      references: {
        model: 'prefectures',
        key: 'id',
      },
      onUpdate: 'CASCADE',
      onDelete: 'SET NULL',
    });

    // stores テーブルに tag_id カラムを追加
    await queryInterface.addColumn('stores', 'tag_id', {
      type: Sequelize.INTEGER,
      allowNull: true,
      references: {
        model: 'tags', // tags テーブルを参照
        key: 'id',
      },
      onUpdate: 'CASCADE',
      onDelete: 'SET NULL',
    });
  },

  async down(queryInterface, Sequelize) {
    // ロールバック時に追加したカラムを削除
    await queryInterface.removeColumn('stores', 'prefecture_id');
    await queryInterface.removeColumn('stores', 'tag_id');
  }
};
