'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
   await queryInterface.bulkInsert('stores_tags', 
 [
   { store_id: 1,  tag_id: 1,createdAt: new Date(), updatedAt: new Date() },
   { store_id: 1,  tag_id: 3, createdAt: new Date(), updatedAt: new Date() },
   { store_id: 1,  tag_id: 4, createdAt: new Date(), updatedAt: new Date() },
   { store_id: 1,  tag_id: 5, createdAt: new Date(), updatedAt: new Date() },
   { store_id: 1,  tag_id: 8, createdAt: new Date(), updatedAt: new Date() },
   { store_id: 1,  tag_id: 9, createdAt: new Date(), updatedAt: new Date() },
   { store_id: 1,  tag_id: 10, createdAt: new Date(), updatedAt: new Date() },
   { store_id: 1,  tag_id: 13, createdAt: new Date(), updatedAt: new Date() },
   { store_id: 1,  tag_id: 14, createdAt: new Date(), updatedAt: new Date() },

   { store_id: 2,  tag_id: 1, createdAt: new Date(), updatedAt: new Date() },
   { store_id: 2,  tag_id: 2, createdAt: new Date(), updatedAt: new Date() },
   { store_id: 2,  tag_id: 3, createdAt: new Date(), updatedAt: new Date() },
   { store_id: 2,  tag_id: 4, createdAt: new Date(), updatedAt: new Date() },
   { store_id: 2,  tag_id: 5, createdAt: new Date(), updatedAt: new Date() },
   { store_id: 2,  tag_id: 9, createdAt: new Date(), updatedAt: new Date() },
   { store_id: 2,  tag_id: 10, createdAt: new Date(), updatedAt: new Date() },
   { store_id: 2,  tag_id: 11, createdAt: new Date(), updatedAt: new Date() },
   { store_id: 2,  tag_id: 12, createdAt: new Date(), updatedAt: new Date() },
   { store_id: 2,  tag_id: 13, createdAt: new Date(), updatedAt: new Date() },
   { store_id: 2,  tag_id: 14, createdAt: new Date(), updatedAt: new Date() },

   { store_id: 3,  tag_id: 1, createdAt: new Date(), updatedAt: new Date() },
   { store_id: 3,  tag_id: 2, createdAt: new Date(), updatedAt: new Date() },
   { store_id: 3,  tag_id: 3, createdAt: new Date(), updatedAt: new Date() },
   { store_id: 3,  tag_id: 4, createdAt: new Date(), updatedAt: new Date() },
   { store_id: 3,  tag_id: 5, createdAt: new Date(), updatedAt: new Date() },
   { store_id: 3,  tag_id: 8, createdAt: new Date(), updatedAt: new Date() },
   { store_id: 3,  tag_id: 13, createdAt: new Date(), updatedAt: new Date() },

   { store_id: 4,  tag_id: 1, createdAt: new Date(), updatedAt: new Date() },
   { store_id: 4,  tag_id: 3, createdAt: new Date(), updatedAt: new Date() },
   { store_id: 4,  tag_id: 5, createdAt: new Date(), updatedAt: new Date() },
   { store_id: 4,  tag_id: 8, createdAt: new Date(), updatedAt: new Date() },
   { store_id: 4,  tag_id: 13, createdAt: new Date(), updatedAt: new Date() },

//東京dogrun
   { store_id: 5,  tag_id: 1, createdAt: new Date(), updatedAt: new Date() },
   { store_id: 5,  tag_id: 3, createdAt: new Date(), updatedAt: new Date() },
   { store_id: 5,  tag_id: 4, createdAt: new Date(), updatedAt: new Date() },
   { store_id: 5,  tag_id: 5, createdAt: new Date(), updatedAt: new Date() },
   { store_id: 5,  tag_id: 8, createdAt: new Date(), updatedAt: new Date() },
   { store_id: 5,  tag_id: 13, createdAt: new Date(), updatedAt: new Date() },
  

   { store_id: 6,  tag_id: 1, createdAt: new Date(), updatedAt: new Date() },   
   { store_id: 6,  tag_id: 1, createdAt: new Date(), updatedAt: new Date() },   
   { store_id: 6,  tag_id: 1, createdAt: new Date(), updatedAt: new Date() },   
   { store_id: 6,  tag_id: 1, createdAt: new Date(), updatedAt: new Date() },   
   { store_id: 6,  tag_id: 1, createdAt: new Date(), updatedAt: new Date() },
   
   { store_id: 7,  tag_id: 1, createdAt: new Date(), updatedAt: new Date() },
   { store_id: 7,  tag_id: 3, createdAt: new Date(), updatedAt: new Date() },
   { store_id: 7,  tag_id: 5, createdAt: new Date(), updatedAt: new Date() },
   { store_id: 7,  tag_id: 8, createdAt: new Date(), updatedAt: new Date() },
   { store_id: 7,  tag_id: 13, createdAt: new Date(), updatedAt: new Date() }, 
   
   { store_id: 8,  tag_id: 3, createdAt: new Date(), updatedAt: new Date() },
   { store_id: 8,  tag_id: 4, createdAt: new Date(), updatedAt: new Date() },
   { store_id: 8,  tag_id: 5, createdAt: new Date(), updatedAt: new Date() },
   { store_id: 8,  tag_id: 8, createdAt: new Date(), updatedAt: new Date() },
   { store_id: 8,  tag_id: 13, createdAt: new Date(), updatedAt: new Date() },
   { store_id: 8,  tag_id: 14, createdAt: new Date(), updatedAt: new Date() },


   //神奈川dogrun
   { store_id: 9,  tag_id: 3, createdAt: new Date(), updatedAt: new Date() },
   { store_id: 9,  tag_id: 4, createdAt: new Date(), updatedAt: new Date() },
   { store_id: 9,  tag_id: 5, createdAt: new Date(), updatedAt: new Date() },
   { store_id: 9,  tag_id: 6, createdAt: new Date(), updatedAt: new Date() },
   { store_id: 9,  tag_id: 8, createdAt: new Date(), updatedAt: new Date() },
   { store_id: 9,  tag_id: 13, createdAt: new Date(), updatedAt: new Date() },
   
   
   { store_id: 10,  tag_id: 3, createdAt: new Date(), updatedAt: new Date() },
   { store_id: 10,  tag_id: 4, createdAt: new Date(), updatedAt: new Date() },
   { store_id: 10,  tag_id: 7, createdAt: new Date(), updatedAt: new Date() },
   { store_id: 10,  tag_id: 13, createdAt: new Date(), updatedAt: new Date() },
   { store_id: 10,  tag_id: 14, createdAt: new Date(), updatedAt: new Date() },

   { store_id: 11,  tag_id: 1, createdAt: new Date(), updatedAt: new Date() },
   { store_id: 11,  tag_id: 3, createdAt: new Date(), updatedAt: new Date() },
   { store_id: 11,  tag_id: 4, createdAt: new Date(), updatedAt: new Date() },
   { store_id: 11,  tag_id: 5, createdAt: new Date(), updatedAt: new Date() },
   { store_id: 11,  tag_id: 8, createdAt: new Date(), updatedAt: new Date() },
   { store_id: 11,  tag_id: 13, createdAt: new Date(), updatedAt: new Date() },

   { store_id: 12,  tag_id: 2, createdAt: new Date(), updatedAt: new Date() },
   { store_id: 12,  tag_id: 4, createdAt: new Date(), updatedAt: new Date() },
   { store_id: 12,  tag_id: 5, createdAt: new Date(), updatedAt: new Date() },
   { store_id: 12,  tag_id: 8, createdAt: new Date(), updatedAt: new Date() },
   { store_id: 12,  tag_id: 13, createdAt: new Date(), updatedAt: new Date() },

   //Hokkaido dogcafe
   { store_id: 13,  tag_id: 15, createdAt: new Date(), updatedAt: new Date() },
   { store_id: 13,  tag_id: 16, createdAt: new Date(), updatedAt: new Date() },
   { store_id: 13,  tag_id: 18, createdAt: new Date(), updatedAt: new Date() },

  //hokkaido petshop
  { store_id: 14,  tag_id: 20, createdAt: new Date(), updatedAt: new Date() },
  { store_id: 14,  tag_id: 21, createdAt: new Date(), updatedAt: new Date() },
  { store_id: 14,  tag_id: 22, createdAt: new Date(), updatedAt: new Date() },
  
  //hokkaido hospital
  { store_id: 15,  tag_id: 23, createdAt: new Date(), updatedAt: new Date() },
  { store_id: 15,  tag_id: 24, createdAt: new Date(), updatedAt: new Date() },
  { store_id: 15,  tag_id: 25, createdAt: new Date(), updatedAt: new Date() },
  { store_id: 15,  tag_id: 27, createdAt: new Date(), updatedAt: new Date() },

  ]


 );
},

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete('stores_tags', null, {});
  },
};
