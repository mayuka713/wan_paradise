'use strict';//この1行目のコードは「厳格モード」。厳格モードを使うと、コードのエラーやバグを見つけやすくなり、安全なコードを書きやすくなる。

//Sequelizeを使ってDBにusersの新しいテーブルを追加するためのマイグレ

module.exports = {
  async up(queryInterface, Sequelize) //テーブルを作成するための関数
  {
    await queryInterface.createTable('users', {
      id: {
        type: Sequelize.INTEGER, 
        autoIncrement: true,
        primaryKey: true,
        allowNull: false,
      },
      email: {
        type: Sequelize.STRING,
        allowNull: false,
        unique: true,
      },
      name: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      password: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      createdAt: {
        type: Sequelize.DATE,
        allowNull: false,
        defaultValue: Sequelize.literal('CURRENT_TIMESTAMP'),
      },
      updatedAt: {
        type: Sequelize.DATE,
        allowNull: false,
        defaultValue: Sequelize.literal('CURRENT_TIMESTAMP'),
      },
    });
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('users');
  }
};
