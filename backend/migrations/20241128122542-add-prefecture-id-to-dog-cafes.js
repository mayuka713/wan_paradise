'use strict';

module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.addColumn('DogCafes', 'prefecture_id', {
      type: Sequelize.INTEGER,
      allowNull: true,
      references: {
        model: 'prefectures', // 外部キーのテーブル名
        key: 'id',           // 外部キーのカラム名
      },
      onUpdate: 'CASCADE',
      onDelete: 'SET NULL',
    });
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.removeColumn('DogCafes', 'prefecture_id');
  },
};
