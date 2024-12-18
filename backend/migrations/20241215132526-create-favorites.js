'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('favorites', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
      user_id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: { 
          model: 'users', // 対応するユーザーテーブル
          key: 'id',
        },
        onDelete: 'CASCADE', // ユーザーが削除されたらお気に入りも削除
      },
      store_id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: { 
          model: 'stores', // 対応するストアテーブル
          key: 'id',
        },
        onDelete: 'CASCADE', // 店舗が削除されたらお気に入りも削除
      },
      created_at: {
        allowNull: false,
        type: Sequelize.DATE,
        defaultValue: Sequelize.fn('NOW'), // デフォルトで現在時刻
      },
      updated_at: {
        allowNull: false,
        type: Sequelize.DATE,
        defaultValue: Sequelize.fn('NOW'), // デフォルトで現在時刻
      },
    });
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('favorites'); 
  },
};
