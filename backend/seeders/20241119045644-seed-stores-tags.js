'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
   await queryInterface.bulkInsert('stores_tags', 
 [
   { store_id: 1,  tag_id: 1, createdAt: new Date(), updatedAt: new Date() },
   { store_id: 1,  tag_id: 3, createdAt: new Date(), updatedAt: new Date() },
   { store_id: 1,  tag_id: 4, createdAt: new Date(), updatedAt: new Date() },
   { store_id: 1,  tag_id: 5, createdAt: new Date(), updatedAt: new Date() },
   { store_id: 1,  tag_id: 8, createdAt: new Date(), updatedAt: new Date() },
   { store_id: 2,  tag_id: 1, createdAt: new Date(), updatedAt: new Date() },
   { store_id: 2,  tag_id: 3, createdAt: new Date(), updatedAt: new Date() },
   { store_id: 2,  tag_id: 4, createdAt: new Date(), updatedAt: new Date() },
   { store_id: 2,  tag_id: 5, createdAt: new Date(), updatedAt: new Date() },
   { store_id: 2,  tag_id: 8, createdAt: new Date(), updatedAt: new Date() },
   { store_id: 3,  tag_id: 3, createdAt: new Date(), updatedAt: new Date() },
   { store_id: 3,  tag_id: 4, createdAt: new Date(), updatedAt: new Date() },
   { store_id: 3,  tag_id: 5, createdAt: new Date(), updatedAt: new Date() },
   { store_id: 3,  tag_id: 7, createdAt: new Date(), updatedAt: new Date() },
   { store_id: 3,  tag_id: 8, createdAt: new Date(), updatedAt: new Date() },
   { store_id: 4,  tag_id: 3, createdAt: new Date(), updatedAt: new Date() },
   { store_id: 4,  tag_id: 4, createdAt: new Date(), updatedAt: new Date() },
   { store_id: 4,  tag_id: 8, createdAt: new Date(), updatedAt: new Date() },
  ]
 );
},

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete('stores_tags', null, {});
  },
};
