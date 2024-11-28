'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await  queryInterface.bulkInsert('store_facilities' ,
 [
   { store_id: 1, facility_id: 2,tag_id: 1, createdAt: new Date(), updatedAt: new Date() },
   { store_id: 1, facility_id: 3,tag_id: 3, createdAt: new Date(), updatedAt: new Date() },
   { store_id: 1, facility_id: 4,tag_id: 4, createdAt: new Date(), updatedAt: new Date() },
   { store_id: 1, facility_id: 6,tag_id: 5, createdAt: new Date(), updatedAt: new Date() },
   { store_id: 1, facility_id: null, tag_id: 8, createdAt: new Date(), updatedAt: new Date() },

   { store_id: 2, facility_id:2, tag_id: 2, createdAt: new Date(), updatedAt: new Date() },
   { store_id: 2, facility_id:3, tag_id: 3, createdAt: new Date(), updatedAt: new Date() },
   { store_id: 2, facility_id:5, tag_id: 4, createdAt: new Date(), updatedAt: new Date() },
   { store_id: 2, facility_id: null, tag_id: 5, createdAt: new Date(), updatedAt: new Date() },
   { store_id: 2, facility_id: null, tag_id: 8, createdAt: new Date(), updatedAt: new Date() },

   { store_id: 3, facility_id:5, tag_id: 1, createdAt: new Date(), updatedAt: new Date() },
   { store_id: 3, facility_id: null, tag_id: 5, createdAt: new Date(), updatedAt: new Date() },
   { store_id: 3, facility_id:5, tag_id: 8, createdAt: new Date(), updatedAt: new Date() },

   { store_id: 4, tag_id: 1, createdAt: new Date(), updatedAt: new Date() },
   { store_id: 4, tag_id: 3, createdAt: new Date(), updatedAt: new Date() },
   { store_id: 4, facility_id:5, tag_id: 8, createdAt: new Date(), updatedAt: new Date() },
  ]);
},

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete('store_facilities', null,{});
  },
};
