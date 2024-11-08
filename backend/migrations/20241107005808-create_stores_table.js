'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('stores', {
      id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        primaryKey: true,
        allowNull: false,
      },
      name: {
        type: Sequelize.STRING(255),
        allowNull: false,
      },
      description: {
        type: Sequelize.TEXT,
        allowNull: true,
      },
      store_tag_id: {
        type: Sequelize.INTEGER,
        allowNull: true,
        
      },
      store_type: {
        type: Sequelize.STRING(100),
        allowNull: true,
      },
      prefecture: {
        type: Sequelize.STRING(100),
        allowNull: true,
      },
      city: {
        type: Sequelize.STRING(100),
        allowNull: true,
      },
      opening_hours: {
        type: Sequelize.STRING(255),
        allowNull: true,
      },
      address: {
        type: Sequelize.STRING(255),
        allowNull: true,
      },
      phone_number: {
        type: Sequelize.STRING(20),
        allowNull: true,
      },
      store_url: {
        type: Sequelize.STRING(255),
        allowNull: true,
      },
      store_img: {
        type: Sequelize.STRING(255),
        allowNull: true,
      },
    source: {
      type: Sequelize.STRING(255),
      allowNull: true,
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
    await queryInterface.dropTable('stores');
  }
};

