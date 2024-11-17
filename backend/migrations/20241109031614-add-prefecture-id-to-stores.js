//、Sequelizeを使用したデータベースマイグレーションファイルで、stores テーブルに新しいカラム（列）を追加したり削除したりする処理を記述しています。

'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.addColumn('stores', 'prefecture-id',  {
      type: Sequelize.INTEGER,
      allowNull: true,
      references: {
        model: 'prefectures',
        key: 'id',
      },
      onUpdate: 'CASCADE',
      onDelete: 'SET NULL',
    });
  
  await queryInterface.addColumn('store','tags', {
    type: Sequelize.INTEGER,
    allowNull: true,
    references: {
      model: 'tags', // list-tags テーブルを参照
      key: 'id',
    },
    onUpdate: 'CASCADE',
    onDelete: 'SET NULL',
  });
},

  async down(queryInterface, Sequelize) {
    await queryInterface.removeColumn('stores', 'prefecture-id',);
    await queryInterface.removeColumn('stores', 'tags',);
  }
};
