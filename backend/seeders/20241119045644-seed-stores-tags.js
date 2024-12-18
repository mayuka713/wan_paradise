'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
   await queryInterface.bulkInsert('stores_tags', 
 [ //北海道ドッグラン------
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

   { store_id: 5,  tag_id: 1, createdAt: new Date(), updatedAt: new Date() },
   { store_id: 5,  tag_id: 3, createdAt: new Date(), updatedAt: new Date() },
   { store_id: 5,  tag_id: 5, createdAt: new Date(), updatedAt: new Date() },
   { store_id: 5,  tag_id: 8, createdAt: new Date(), updatedAt: new Date() },
   { store_id: 5,  tag_id: 12, createdAt: new Date(), updatedAt: new Date() },
   { store_id: 5,  tag_id: 13, createdAt: new Date(), updatedAt: new Date() },
   { store_id: 5,  tag_id: 14, createdAt: new Date(), updatedAt: new Date() },

   { store_id: 6,  tag_id: 1, createdAt: new Date(), updatedAt: new Date() },
   { store_id: 6,  tag_id: 3, createdAt: new Date(), updatedAt: new Date() },
   { store_id: 6,  tag_id: 4, createdAt: new Date(), updatedAt: new Date() },
   { store_id: 6,  tag_id: 5, createdAt: new Date(), updatedAt: new Date() },
   { store_id: 6,  tag_id: 13, createdAt: new Date(), updatedAt: new Date() },

   { store_id: 7,  tag_id: 1, createdAt: new Date(), updatedAt: new Date() },
   { store_id: 7,  tag_id: 3, createdAt: new Date(), updatedAt: new Date() },
   { store_id: 7,  tag_id: 4, createdAt: new Date(), updatedAt: new Date() },
   { store_id: 7,  tag_id: 5, createdAt: new Date(), updatedAt: new Date() },
   { store_id: 7,  tag_id: 8, createdAt: new Date(), updatedAt: new Date() },
   { store_id: 7,  tag_id: 12, createdAt: new Date(), updatedAt: new Date() },
   { store_id: 7,  tag_id: 13, createdAt: new Date(), updatedAt: new Date() },
   { store_id: 7,  tag_id: 14, createdAt: new Date(), updatedAt: new Date() },

   { store_id: 8,  tag_id: 1, createdAt: new Date(), updatedAt: new Date() },
   { store_id: 8,  tag_id: 4, createdAt: new Date(), updatedAt: new Date() },
   { store_id: 8,  tag_id: 5, createdAt: new Date(), updatedAt: new Date() },
   { store_id: 8,  tag_id: 6, createdAt: new Date(), updatedAt: new Date() },
   { store_id: 8,  tag_id: 8, createdAt: new Date(), updatedAt: new Date() },
   { store_id: 8,  tag_id: 12, createdAt: new Date(), updatedAt: new Date() },
   { store_id: 8,  tag_id: 13, createdAt: new Date(), updatedAt: new Date() },
   { store_id: 8,  tag_id: 14, createdAt: new Date(), updatedAt: new Date() },


//東京ドッグラン--------------
   { store_id: 9,  tag_id: 1, createdAt: new Date(), updatedAt: new Date() },
   { store_id: 9,  tag_id: 4, createdAt: new Date(), updatedAt: new Date() },
   { store_id: 9,  tag_id: 5, createdAt: new Date(), updatedAt: new Date() },
   { store_id: 9,  tag_id: 8, createdAt: new Date(), updatedAt: new Date() },
   { store_id: 9,  tag_id: 13, createdAt: new Date(), updatedAt: new Date() },
  
   { store_id: 10,  tag_id: 1, createdAt: new Date(), updatedAt: new Date() },   
   { store_id: 10,  tag_id: 1, createdAt: new Date(), updatedAt: new Date() },   
   { store_id: 10,  tag_id: 1, createdAt: new Date(), updatedAt: new Date() },   
   { store_id: 10,  tag_id: 1, createdAt: new Date(), updatedAt: new Date() },   
   { store_id: 10,  tag_id: 1, createdAt: new Date(), updatedAt: new Date() },
   
   { store_id: 11,  tag_id: 1, createdAt: new Date(), updatedAt: new Date() },
   { store_id: 11,  tag_id: 3, createdAt: new Date(), updatedAt: new Date() },
   { store_id: 11,  tag_id: 5, createdAt: new Date(), updatedAt: new Date() },
   { store_id: 11,  tag_id: 8, createdAt: new Date(), updatedAt: new Date() },
   { store_id: 11,  tag_id: 13, createdAt: new Date(), updatedAt: new Date() }, 
   
   { store_id: 12,  tag_id: 3, createdAt: new Date(), updatedAt: new Date() },
   { store_id: 12,  tag_id: 4, createdAt: new Date(), updatedAt: new Date() },
   { store_id: 12,  tag_id: 5, createdAt: new Date(), updatedAt: new Date() },
   { store_id: 12,  tag_id: 8, createdAt: new Date(), updatedAt: new Date() },
   { store_id: 12,  tag_id: 13, createdAt: new Date(), updatedAt: new Date() },
   { store_id: 12,  tag_id: 14, createdAt: new Date(), updatedAt: new Date() },

   { store_id: 13,  tag_id: 14, createdAt: new Date(), updatedAt: new Date() },
   { store_id: 13,  tag_id: 14, createdAt: new Date(), updatedAt: new Date() },
   { store_id: 13,  tag_id: 14, createdAt: new Date(), updatedAt: new Date() },
   { store_id: 13,  tag_id: 14, createdAt: new Date(), updatedAt: new Date() },
   { store_id: 13,  tag_id: 14, createdAt: new Date(), updatedAt: new Date() },
   { store_id: 13,  tag_id: 14, createdAt: new Date(), updatedAt: new Date() },
   
   { store_id: 14,  tag_id: 14, createdAt: new Date(), updatedAt: new Date() },
   { store_id: 14,  tag_id: 14, createdAt: new Date(), updatedAt: new Date() },
   { store_id: 14,  tag_id: 14, createdAt: new Date(), updatedAt: new Date() },
   { store_id: 14,  tag_id: 14, createdAt: new Date(), updatedAt: new Date() },
   { store_id: 14,  tag_id: 14, createdAt: new Date(), updatedAt: new Date() },
   { store_id: 14,  tag_id: 14, createdAt: new Date(), updatedAt: new Date() },


   { store_id: 15,  tag_id: 14, createdAt: new Date(), updatedAt: new Date() },
   { store_id: 15,  tag_id: 14, createdAt: new Date(), updatedAt: new Date() },
   { store_id: 15,  tag_id: 14, createdAt: new Date(), updatedAt: new Date() },
   { store_id: 15,  tag_id: 14, createdAt: new Date(), updatedAt: new Date() },
   { store_id: 15,  tag_id: 14, createdAt: new Date(), updatedAt: new Date() },


   { store_id: 16,  tag_id: 14, createdAt: new Date(), updatedAt: new Date() },
   { store_id: 16,  tag_id: 14, createdAt: new Date(), updatedAt: new Date() },
   { store_id: 16,  tag_id: 14, createdAt: new Date(), updatedAt: new Date() },
   { store_id: 16,  tag_id: 14, createdAt: new Date(), updatedAt: new Date() },

   //神奈川ドッグラン-------------
   { store_id: 17,  tag_id: 3, createdAt: new Date(), updatedAt: new Date() },
   { store_id: 17,  tag_id: 4, createdAt: new Date(), updatedAt: new Date() },
   { store_id: 17,  tag_id: 5, createdAt: new Date(), updatedAt: new Date() },
   { store_id: 17,  tag_id: 6, createdAt: new Date(), updatedAt: new Date() },
   { store_id: 17,  tag_id: 8, createdAt: new Date(), updatedAt: new Date() },
   { store_id: 17,  tag_id: 13, createdAt: new Date(), updatedAt: new Date() },
   
   { store_id: 18,  tag_id: 3, createdAt: new Date(), updatedAt: new Date() },
   { store_id: 18,  tag_id: 4, createdAt: new Date(), updatedAt: new Date() },
   { store_id: 18,  tag_id: 7, createdAt: new Date(), updatedAt: new Date() },
   { store_id: 18,  tag_id: 13, createdAt: new Date(), updatedAt: new Date() },
   { store_id: 18,  tag_id: 14, createdAt: new Date(), updatedAt: new Date() },

   { store_id: 19,  tag_id: 1, createdAt: new Date(), updatedAt: new Date() },
   { store_id: 19,  tag_id: 3, createdAt: new Date(), updatedAt: new Date() },
   { store_id: 19,  tag_id: 4, createdAt: new Date(), updatedAt: new Date() },
   { store_id: 19,  tag_id: 5, createdAt: new Date(), updatedAt: new Date() },
   { store_id: 19,  tag_id: 8, createdAt: new Date(), updatedAt: new Date() },
   { store_id: 19,  tag_id: 13, createdAt: new Date(), updatedAt: new Date() },

   { store_id: 20,  tag_id: 2, createdAt: new Date(), updatedAt: new Date() },
   { store_id: 20,  tag_id: 4, createdAt: new Date(), updatedAt: new Date() },
   { store_id: 20,  tag_id: 5, createdAt: new Date(), updatedAt: new Date() },
   { store_id: 20,  tag_id: 8, createdAt: new Date(), updatedAt: new Date() },
   { store_id: 20,  tag_id: 13, createdAt: new Date(), updatedAt: new Date() },
   { store_id: 20,  tag_id: 13, createdAt: new Date(), updatedAt: new Date() },
   { store_id: 20,  tag_id: 13, createdAt: new Date(), updatedAt: new Date() },

   { store_id: 21,  tag_id: 13, createdAt: new Date(), updatedAt: new Date() },
   { store_id: 21,  tag_id: 13, createdAt: new Date(), updatedAt: new Date() },
   { store_id: 21,  tag_id: 13, createdAt: new Date(), updatedAt: new Date() },
   { store_id: 21,  tag_id: 13, createdAt: new Date(), updatedAt: new Date() },
   { store_id: 21,  tag_id: 13, createdAt: new Date(), updatedAt: new Date() },

   { store_id: 22,  tag_id: 13, createdAt: new Date(), updatedAt: new Date() },
   { store_id: 22,  tag_id: 13, createdAt: new Date(), updatedAt: new Date() },
   { store_id: 22,  tag_id: 13, createdAt: new Date(), updatedAt: new Date() },
   { store_id: 22,  tag_id: 13, createdAt: new Date(), updatedAt: new Date() },
   { store_id: 22,  tag_id: 13, createdAt: new Date(), updatedAt: new Date() },
   { store_id: 22,  tag_id: 13, createdAt: new Date(), updatedAt: new Date() },

   { store_id: 23,  tag_id: 13, createdAt: new Date(), updatedAt: new Date() },
   { store_id: 23,  tag_id: 13, createdAt: new Date(), updatedAt: new Date() },
   { store_id: 23,  tag_id: 13, createdAt: new Date(), updatedAt: new Date() },
   { store_id: 23,  tag_id: 13, createdAt: new Date(), updatedAt: new Date() },
   { store_id: 23,  tag_id: 13, createdAt: new Date(), updatedAt: new Date() },

   { store_id: 24,  tag_id: 13, createdAt: new Date(), updatedAt: new Date() },
   { store_id: 24,  tag_id: 13, createdAt: new Date(), updatedAt: new Date() },
   { store_id: 24,  tag_id: 13, createdAt: new Date(), updatedAt: new Date() },
   { store_id: 24,  tag_id: 13, createdAt: new Date(), updatedAt: new Date() },
   { store_id: 24,  tag_id: 13, createdAt: new Date(), updatedAt: new Date() },

 //愛知県ドッグラン----------
   { store_id: 24,  tag_id: 13, createdAt: new Date(), updatedAt: new Date() },
   { store_id: 24,  tag_id: 13, createdAt: new Date(), updatedAt: new Date() },
   { store_id: 24,  tag_id: 13, createdAt: new Date(), updatedAt: new Date() },
   { store_id: 24,  tag_id: 13, createdAt: new Date(), updatedAt: new Date() },
   { store_id: 24,  tag_id: 13, createdAt: new Date(), updatedAt: new Date() },
   { store_id: 24,  tag_id: 13, createdAt: new Date(), updatedAt: new Date() },


   { store_id: 25,  tag_id: 13, createdAt: new Date(), updatedAt: new Date() },
   { store_id: 25,  tag_id: 13, createdAt: new Date(), updatedAt: new Date() },
   { store_id: 25,  tag_id: 13, createdAt: new Date(), updatedAt: new Date() },
   { store_id: 25,  tag_id: 13, createdAt: new Date(), updatedAt: new Date() },
   { store_id: 25,  tag_id: 13, createdAt: new Date(), updatedAt: new Date() },
 
   { store_id: 26,  tag_id: 13, createdAt: new Date(), updatedAt: new Date() },
   { store_id: 26,  tag_id: 13, createdAt: new Date(), updatedAt: new Date() },
   { store_id: 26,  tag_id: 13, createdAt: new Date(), updatedAt: new Date() },
   { store_id: 26,  tag_id: 13, createdAt: new Date(), updatedAt: new Date() },
   { store_id: 26,  tag_id: 13, createdAt: new Date(), updatedAt: new Date() },

   { store_id: 27,  tag_id: 13, createdAt: new Date(), updatedAt: new Date() },
   { store_id: 27,  tag_id: 13, createdAt: new Date(), updatedAt: new Date() },
   { store_id: 27,  tag_id: 13, createdAt: new Date(), updatedAt: new Date() },
   { store_id: 27,  tag_id: 13, createdAt: new Date(), updatedAt: new Date() },
   { store_id: 27,  tag_id: 13, createdAt: new Date(), updatedAt: new Date() },

   { store_id: 28,  tag_id: 13, createdAt: new Date(), updatedAt: new Date() },
   { store_id: 28,  tag_id: 13, createdAt: new Date(), updatedAt: new Date() },
   { store_id: 28,  tag_id: 13, createdAt: new Date(), updatedAt: new Date() },
   { store_id: 28,  tag_id: 13, createdAt: new Date(), updatedAt: new Date() },
   { store_id: 28,  tag_id: 13, createdAt: new Date(), updatedAt: new Date() },

   { store_id: 29,  tag_id: 13, createdAt: new Date(), updatedAt: new Date() },
   { store_id: 29,  tag_id: 13, createdAt: new Date(), updatedAt: new Date() },
   { store_id: 29,  tag_id: 13, createdAt: new Date(), updatedAt: new Date() },
   { store_id: 29,  tag_id: 13, createdAt: new Date(), updatedAt: new Date() },
   { store_id: 29,  tag_id: 13, createdAt: new Date(), updatedAt: new Date() },

   { store_id: 30,  tag_id: 13, createdAt: new Date(), updatedAt: new Date() },
   { store_id: 30,  tag_id: 13, createdAt: new Date(), updatedAt: new Date() },
   { store_id: 30,  tag_id: 13, createdAt: new Date(), updatedAt: new Date() },
   { store_id: 30,  tag_id: 13, createdAt: new Date(), updatedAt: new Date() },
   { store_id: 30,  tag_id: 13, createdAt: new Date(), updatedAt: new Date() },

 
   { store_id: 31,  tag_id: 13, createdAt: new Date(), updatedAt: new Date() },
   { store_id: 31,  tag_id: 13, createdAt: new Date(), updatedAt: new Date() },
   { store_id: 31,  tag_id: 13, createdAt: new Date(), updatedAt: new Date() },
   { store_id: 31,  tag_id: 13, createdAt: new Date(), updatedAt: new Date() },
   { store_id: 31,  tag_id: 13, createdAt: new Date(), updatedAt: new Date() },
   { store_id: 31,  tag_id: 13, createdAt: new Date(), updatedAt: new Date() },

    //京都ドッグラン---------------
   { store_id: 32,  tag_id: 13, createdAt: new Date(), updatedAt: new Date() },
   { store_id: 32,  tag_id: 13, createdAt: new Date(), updatedAt: new Date() },
   { store_id: 32,  tag_id: 13, createdAt: new Date(), updatedAt: new Date() },
   { store_id: 32,  tag_id: 13, createdAt: new Date(), updatedAt: new Date() },
   { store_id: 32,  tag_id: 13, createdAt: new Date(), updatedAt: new Date() },

   { store_id: 33,  tag_id: 13, createdAt: new Date(), updatedAt: new Date() },
   { store_id: 33,  tag_id: 13, createdAt: new Date(), updatedAt: new Date() },
   { store_id: 33,  tag_id: 13, createdAt: new Date(), updatedAt: new Date() },
   { store_id: 33,  tag_id: 13, createdAt: new Date(), updatedAt: new Date() },
   { store_id: 33,  tag_id: 13, createdAt: new Date(), updatedAt: new Date() },

   { store_id: 34,  tag_id: 13, createdAt: new Date(), updatedAt: new Date() },
   { store_id: 34,  tag_id: 13, createdAt: new Date(), updatedAt: new Date() },
   { store_id: 34,  tag_id: 13, createdAt: new Date(), updatedAt: new Date() },
   { store_id: 34,  tag_id: 13, createdAt: new Date(), updatedAt: new Date() },
   { store_id: 34,  tag_id: 13, createdAt: new Date(), updatedAt: new Date() },

   { store_id: 35,  tag_id: 13, createdAt: new Date(), updatedAt: new Date() },
   { store_id: 35,  tag_id: 13, createdAt: new Date(), updatedAt: new Date() },
   { store_id: 35,  tag_id: 13, createdAt: new Date(), updatedAt: new Date() },
   { store_id: 35,  tag_id: 13, createdAt: new Date(), updatedAt: new Date() },
   { store_id: 35,  tag_id: 13, createdAt: new Date(), updatedAt: new Date() },

   { store_id: 36,  tag_id: 13, createdAt: new Date(), updatedAt: new Date() },
   { store_id: 36,  tag_id: 13, createdAt: new Date(), updatedAt: new Date() },
   { store_id: 36,  tag_id: 13, createdAt: new Date(), updatedAt: new Date() },
   { store_id: 36,  tag_id: 13, createdAt: new Date(), updatedAt: new Date() },
   { store_id: 36,  tag_id: 13, createdAt: new Date(), updatedAt: new Date() },

   { store_id: 37,  tag_id: 13, createdAt: new Date(), updatedAt: new Date() },
   { store_id: 37,  tag_id: 13, createdAt: new Date(), updatedAt: new Date() },
   { store_id: 37,  tag_id: 13, createdAt: new Date(), updatedAt: new Date() },
   { store_id: 37,  tag_id: 13, createdAt: new Date(), updatedAt: new Date() },

   { store_id: 38,  tag_id: 13, createdAt: new Date(), updatedAt: new Date() },
   { store_id: 38,  tag_id: 13, createdAt: new Date(), updatedAt: new Date() },
   { store_id: 38,  tag_id: 13, createdAt: new Date(), updatedAt: new Date() },
   { store_id: 38,  tag_id: 13, createdAt: new Date(), updatedAt: new Date() },

   { store_id: 39,  tag_id: 13, createdAt: new Date(), updatedAt: new Date() },
   { store_id: 39,  tag_id: 13, createdAt: new Date(), updatedAt: new Date() },
   { store_id: 39,  tag_id: 13, createdAt: new Date(), updatedAt: new Date() },
   { store_id: 39,  tag_id: 13, createdAt: new Date(), updatedAt: new Date() },

   //大阪ドッグラン--------------
   { store_id: 40,  tag_id: 13, createdAt: new Date(), updatedAt: new Date() },
   { store_id: 40,  tag_id: 13, createdAt: new Date(), updatedAt: new Date() },
   { store_id: 40,  tag_id: 13, createdAt: new Date(), updatedAt: new Date() },
   { store_id: 40,  tag_id: 13, createdAt: new Date(), updatedAt: new Date() },
   { store_id: 40,  tag_id: 13, createdAt: new Date(), updatedAt: new Date() },

   { store_id: 41,  tag_id: 13, createdAt: new Date(), updatedAt: new Date() },
   { store_id: 41,  tag_id: 13, createdAt: new Date(), updatedAt: new Date() },
   { store_id: 41,  tag_id: 13, createdAt: new Date(), updatedAt: new Date() },
   { store_id: 41,  tag_id: 13, createdAt: new Date(), updatedAt: new Date() },
   { store_id: 41,  tag_id: 13, createdAt: new Date(), updatedAt: new Date() },

   { store_id: 42,  tag_id: 13, createdAt: new Date(), updatedAt: new Date() },
   { store_id: 42,  tag_id: 13, createdAt: new Date(), updatedAt: new Date() },
   { store_id: 42,  tag_id: 13, createdAt: new Date(), updatedAt: new Date() },
   { store_id: 42,  tag_id: 13, createdAt: new Date(), updatedAt: new Date() },
   { store_id: 42,  tag_id: 13, createdAt: new Date(), updatedAt: new Date() },

   { store_id: 43,  tag_id: 13, createdAt: new Date(), updatedAt: new Date() },
   { store_id: 43,  tag_id: 13, createdAt: new Date(), updatedAt: new Date() },
   { store_id: 43,  tag_id: 13, createdAt: new Date(), updatedAt: new Date() },
   { store_id: 43,  tag_id: 13, createdAt: new Date(), updatedAt: new Date() },
   { store_id: 43,  tag_id: 13, createdAt: new Date(), updatedAt: new Date() },

   { store_id: 44,  tag_id: 13, createdAt: new Date(), updatedAt: new Date() },
   { store_id: 44,  tag_id: 13, createdAt: new Date(), updatedAt: new Date() },
   { store_id: 44,  tag_id: 13, createdAt: new Date(), updatedAt: new Date() },
   { store_id: 44,  tag_id: 13, createdAt: new Date(), updatedAt: new Date() },
   { store_id: 44,  tag_id: 13, createdAt: new Date(), updatedAt: new Date() },

   { store_id: 45,  tag_id: 13, createdAt: new Date(), updatedAt: new Date() },
   { store_id: 45,  tag_id: 13, createdAt: new Date(), updatedAt: new Date() },
   { store_id: 45,  tag_id: 13, createdAt: new Date(), updatedAt: new Date() },

   { store_id: 45,  tag_id: 13, createdAt: new Date(), updatedAt: new Date() },
   { store_id: 45,  tag_id: 13, createdAt: new Date(), updatedAt: new Date() },
   { store_id: 45,  tag_id: 13, createdAt: new Date(), updatedAt: new Date() },
   { store_id: 45,  tag_id: 13, createdAt: new Date(), updatedAt: new Date() },

   { store_id: 46,  tag_id: 13, createdAt: new Date(), updatedAt: new Date() },
   { store_id: 46,  tag_id: 13, createdAt: new Date(), updatedAt: new Date() },
   { store_id: 46,  tag_id: 13, createdAt: new Date(), updatedAt: new Date() },


   //兵庫ドッグラン------------
   { store_id: 47,  tag_id: 13, createdAt: new Date(), updatedAt: new Date() },
   { store_id: 47,  tag_id: 13, createdAt: new Date(), updatedAt: new Date() },
   { store_id: 47,  tag_id: 13, createdAt: new Date(), updatedAt: new Date() },
   { store_id: 47,  tag_id: 13, createdAt: new Date(), updatedAt: new Date() },

   { store_id: 48,  tag_id: 13, createdAt: new Date(), updatedAt: new Date() },
   { store_id: 48,  tag_id: 13, createdAt: new Date(), updatedAt: new Date() },
   { store_id: 48,  tag_id: 13, createdAt: new Date(), updatedAt: new Date() },
   { store_id: 48,  tag_id: 13, createdAt: new Date(), updatedAt: new Date() },
   { store_id: 48,  tag_id: 13, createdAt: new Date(), updatedAt: new Date() },

   { store_id: 49,  tag_id: 13, createdAt: new Date(), updatedAt: new Date() },
   { store_id: 49,  tag_id: 13, createdAt: new Date(), updatedAt: new Date() },
   { store_id: 49,  tag_id: 13, createdAt: new Date(), updatedAt: new Date() },
   { store_id: 49,  tag_id: 13, createdAt: new Date(), updatedAt: new Date() },
   { store_id: 49,  tag_id: 13, createdAt: new Date(), updatedAt: new Date() },

   { store_id: 50,  tag_id: 13, createdAt: new Date(), updatedAt: new Date() },
   { store_id: 50,  tag_id: 13, createdAt: new Date(), updatedAt: new Date() },
   { store_id: 50,  tag_id: 13, createdAt: new Date(), updatedAt: new Date() },
   { store_id: 50,  tag_id: 13, createdAt: new Date(), updatedAt: new Date() },
   { store_id: 50,  tag_id: 13, createdAt: new Date(), updatedAt: new Date() },

   { store_id: 51,  tag_id: 13, createdAt: new Date(), updatedAt: new Date() },
   { store_id: 51,  tag_id: 13, createdAt: new Date(), updatedAt: new Date() },
   { store_id: 51,  tag_id: 13, createdAt: new Date(), updatedAt: new Date() },
   { store_id: 51,  tag_id: 13, createdAt: new Date(), updatedAt: new Date() },

   { store_id: 52,  tag_id: 13, createdAt: new Date(), updatedAt: new Date() },
   { store_id: 52,  tag_id: 13, createdAt: new Date(), updatedAt: new Date() },
   { store_id: 52,  tag_id: 13, createdAt: new Date(), updatedAt: new Date() },
   { store_id: 52,  tag_id: 13, createdAt: new Date(), updatedAt: new Date() },
   { store_id: 52,  tag_id: 13, createdAt: new Date(), updatedAt: new Date() },
   { store_id: 52,  tag_id: 13, createdAt: new Date(), updatedAt: new Date() },

   { store_id: 53,  tag_id: 13, createdAt: new Date(), updatedAt: new Date() },
   { store_id: 53,  tag_id: 13, createdAt: new Date(), updatedAt: new Date() },
   { store_id: 53,  tag_id: 13, createdAt: new Date(), updatedAt: new Date() },
   { store_id: 53,  tag_id: 13, createdAt: new Date(), updatedAt: new Date() },
   { store_id: 53,  tag_id: 13, createdAt: new Date(), updatedAt: new Date() },
   { store_id: 53,  tag_id: 13, createdAt: new Date(), updatedAt: new Date() },

   { store_id: 54,  tag_id: 13, createdAt: new Date(), updatedAt: new Date() },
   { store_id: 54,  tag_id: 13, createdAt: new Date(), updatedAt: new Date() },
   { store_id: 54,  tag_id: 13, createdAt: new Date(), updatedAt: new Date() },
   { store_id: 54,  tag_id: 13, createdAt: new Date(), updatedAt: new Date() },
   { store_id: 54,  tag_id: 13, createdAt: new Date(), updatedAt: new Date() },
   { store_id: 54,  tag_id: 13, createdAt: new Date(), updatedAt: new Date() },



   //ドッグカフェここから------------
   //北海道ドッグカフェ--------------
   { store_id: 25,  tag_id: 15, createdAt: new Date(), updatedAt: new Date() },
   { store_id: 25,  tag_id: 16, createdAt: new Date(), updatedAt: new Date() },
   { store_id: 25,  tag_id: 18, createdAt: new Date(), updatedAt: new Date() },
   { store_id: 25,  tag_id: 18, createdAt: new Date(), updatedAt: new Date() },
   { store_id: 25,  tag_id: 18, createdAt: new Date(), updatedAt: new Date() },

   { store_id: 26,  tag_id: 18, createdAt: new Date(), updatedAt: new Date() },
   { store_id: 26,  tag_id: 18, createdAt: new Date(), updatedAt: new Date() },
   { store_id: 26,  tag_id: 18, createdAt: new Date(), updatedAt: new Date() },
   { store_id: 26,  tag_id: 18, createdAt: new Date(), updatedAt: new Date() },
   { store_id: 26,  tag_id: 18, createdAt: new Date(), updatedAt: new Date() },

   { store_id: 27,  tag_id: 18, createdAt: new Date(), updatedAt: new Date() },
   { store_id: 27,  tag_id: 18, createdAt: new Date(), updatedAt: new Date() },
   { store_id: 27,  tag_id: 18, createdAt: new Date(), updatedAt: new Date() },
   { store_id: 27,  tag_id: 18, createdAt: new Date(), updatedAt: new Date() },
   { store_id: 27,  tag_id: 18, createdAt: new Date(), updatedAt: new Date() },
   { store_id: 27,  tag_id: 18, createdAt: new Date(), updatedAt: new Date() },

   { store_id: 28,  tag_id: 18, createdAt: new Date(), updatedAt: new Date() },
   { store_id: 28,  tag_id: 18, createdAt: new Date(), updatedAt: new Date() },
   { store_id: 28,  tag_id: 18, createdAt: new Date(), updatedAt: new Date() },
   { store_id: 28,  tag_id: 18, createdAt: new Date(), updatedAt: new Date() },
   { store_id: 28,  tag_id: 18, createdAt: new Date(), updatedAt: new Date() },
   { store_id: 28,  tag_id: 18, createdAt: new Date(), updatedAt: new Date() },

   { store_id: 29,  tag_id: 18, createdAt: new Date(), updatedAt: new Date() },
   { store_id: 29,  tag_id: 18, createdAt: new Date(), updatedAt: new Date() },
   { store_id: 29,  tag_id: 18, createdAt: new Date(), updatedAt: new Date() },
   { store_id: 29,  tag_id: 18, createdAt: new Date(), updatedAt: new Date() },
   { store_id: 29,  tag_id: 18, createdAt: new Date(), updatedAt: new Date() },
   { store_id: 29,  tag_id: 18, createdAt: new Date(), updatedAt: new Date() },

   { store_id: 30,  tag_id: 18, createdAt: new Date(), updatedAt: new Date() },
   { store_id: 30,  tag_id: 18, createdAt: new Date(), updatedAt: new Date() },
   { store_id: 30,  tag_id: 18, createdAt: new Date(), updatedAt: new Date() },
   { store_id: 30,  tag_id: 18, createdAt: new Date(), updatedAt: new Date() },
   { store_id: 30,  tag_id: 18, createdAt: new Date(), updatedAt: new Date() },

   { store_id: 31,  tag_id: 18, createdAt: new Date(), updatedAt: new Date() },
   { store_id: 31,  tag_id: 18, createdAt: new Date(), updatedAt: new Date() },
   { store_id: 31,  tag_id: 18, createdAt: new Date(), updatedAt: new Date() },
   { store_id: 31,  tag_id: 18, createdAt: new Date(), updatedAt: new Date() },

   { store_id: 32,  tag_id: 18, createdAt: new Date(), updatedAt: new Date() },
   { store_id: 32,  tag_id: 18, createdAt: new Date(), updatedAt: new Date() },


  //東京ドッグカフェ----------
  { store_id: 33,  tag_id: 18, createdAt: new Date(), updatedAt: new Date() },
  { store_id: 33,  tag_id: 18, createdAt: new Date(), updatedAt: new Date() },
  { store_id: 33,  tag_id: 18, createdAt: new Date(), updatedAt: new Date() },
  { store_id: 33,  tag_id: 18, createdAt: new Date(), updatedAt: new Date() },
  { store_id: 33,  tag_id: 18, createdAt: new Date(), updatedAt: new Date() },

  { store_id: 34,  tag_id: 18, createdAt: new Date(), updatedAt: new Date() },
  { store_id: 34,  tag_id: 18, createdAt: new Date(), updatedAt: new Date() },
  { store_id: 34,  tag_id: 18, createdAt: new Date(), updatedAt: new Date() },
  { store_id: 34,  tag_id: 18, createdAt: new Date(), updatedAt: new Date() },

  { store_id: 35,  tag_id: 18, createdAt: new Date(), updatedAt: new Date() },
  { store_id: 35,  tag_id: 18, createdAt: new Date(), updatedAt: new Date() },
  { store_id: 35,  tag_id: 18, createdAt: new Date(), updatedAt: new Date() },
  { store_id: 35,  tag_id: 18, createdAt: new Date(), updatedAt: new Date() },

  { store_id: 36,  tag_id: 18, createdAt: new Date(), updatedAt: new Date() },
  { store_id: 36,  tag_id: 18, createdAt: new Date(), updatedAt: new Date() },
  { store_id: 36,  tag_id: 18, createdAt: new Date(), updatedAt: new Date() },
  { store_id: 36,  tag_id: 18, createdAt: new Date(), updatedAt: new Date() },

  { store_id: 37,  tag_id: 18, createdAt: new Date(), updatedAt: new Date() },
  { store_id: 37,  tag_id: 18, createdAt: new Date(), updatedAt: new Date() },
  { store_id: 37,  tag_id: 18, createdAt: new Date(), updatedAt: new Date() },
  { store_id: 37,  tag_id: 18, createdAt: new Date(), updatedAt: new Date() },

  { store_id: 38,  tag_id: 18, createdAt: new Date(), updatedAt: new Date() },
  { store_id: 38,  tag_id: 18, createdAt: new Date(), updatedAt: new Date() },
  { store_id: 38,  tag_id: 18, createdAt: new Date(), updatedAt: new Date() },
  { store_id: 38,  tag_id: 18, createdAt: new Date(), updatedAt: new Date() },

  { store_id: 39,  tag_id: 18, createdAt: new Date(), updatedAt: new Date() },
  { store_id: 39,  tag_id: 18, createdAt: new Date(), updatedAt: new Date() },
  { store_id: 39,  tag_id: 18, createdAt: new Date(), updatedAt: new Date() },
  { store_id: 39,  tag_id: 18, createdAt: new Date(), updatedAt: new Date() },

  { store_id: 40,  tag_id: 18, createdAt: new Date(), updatedAt: new Date() },
  { store_id: 40,  tag_id: 18, createdAt: new Date(), updatedAt: new Date() },
  { store_id: 40,  tag_id: 18, createdAt: new Date(), updatedAt: new Date() },
  { store_id: 40,  tag_id: 18, createdAt: new Date(), updatedAt: new Date() },

  //神奈川ドッグカフェ-------------
  { store_id: 41,  tag_id: 18, createdAt: new Date(), updatedAt: new Date() },
  { store_id: 41,  tag_id: 18, createdAt: new Date(), updatedAt: new Date() },
  { store_id: 41,  tag_id: 18, createdAt: new Date(), updatedAt: new Date() },
  { store_id: 41,  tag_id: 18, createdAt: new Date(), updatedAt: new Date() },

  { store_id: 42,  tag_id: 18, createdAt: new Date(), updatedAt: new Date() },
  { store_id: 42,  tag_id: 18, createdAt: new Date(), updatedAt: new Date() },
  { store_id: 42,  tag_id: 18, createdAt: new Date(), updatedAt: new Date() },
  { store_id: 42,  tag_id: 18, createdAt: new Date(), updatedAt: new Date() },

  { store_id: 43,  tag_id: 18, createdAt: new Date(), updatedAt: new Date() },
  { store_id: 43,  tag_id: 18, createdAt: new Date(), updatedAt: new Date() },
  { store_id: 43,  tag_id: 18, createdAt: new Date(), updatedAt: new Date() },
  { store_id: 43,  tag_id: 18, createdAt: new Date(), updatedAt: new Date() },

  { store_id: 44,  tag_id: 18, createdAt: new Date(), updatedAt: new Date() },
  { store_id: 44,  tag_id: 18, createdAt: new Date(), updatedAt: new Date() },
  { store_id: 44,  tag_id: 18, createdAt: new Date(), updatedAt: new Date() },
  { store_id: 44,  tag_id: 18, createdAt: new Date(), updatedAt: new Date() },

  { store_id: 45,  tag_id: 18, createdAt: new Date(), updatedAt: new Date() },
  { store_id: 45,  tag_id: 18, createdAt: new Date(), updatedAt: new Date() },
  { store_id: 45,  tag_id: 18, createdAt: new Date(), updatedAt: new Date() },
  { store_id: 45,  tag_id: 18, createdAt: new Date(), updatedAt: new Date() },

  { store_id: 46,  tag_id: 18, createdAt: new Date(), updatedAt: new Date() },
  { store_id: 46,  tag_id: 18, createdAt: new Date(), updatedAt: new Date() },
  { store_id: 46,  tag_id: 18, createdAt: new Date(), updatedAt: new Date() },
  { store_id: 46,  tag_id: 18, createdAt: new Date(), updatedAt: new Date() },

  { store_id: 47,  tag_id: 18, createdAt: new Date(), updatedAt: new Date() },
  { store_id: 47,  tag_id: 18, createdAt: new Date(), updatedAt: new Date() },
  { store_id: 47,  tag_id: 18, createdAt: new Date(), updatedAt: new Date() },
  { store_id: 47,  tag_id: 18, createdAt: new Date(), updatedAt: new Date() },

  { store_id: 48,  tag_id: 18, createdAt: new Date(), updatedAt: new Date() },
  { store_id: 48,  tag_id: 18, createdAt: new Date(), updatedAt: new Date() },
  { store_id: 48,  tag_id: 18, createdAt: new Date(), updatedAt: new Date() },
  { store_id: 48,  tag_id: 18, createdAt: new Date(), updatedAt: new Date() },

  //愛知ドッグカフェ---------------
  { store_id: 49,  tag_id: 18, createdAt: new Date(), updatedAt: new Date() },
  { store_id: 49,  tag_id: 18, createdAt: new Date(), updatedAt: new Date() },
  { store_id: 49,  tag_id: 18, createdAt: new Date(), updatedAt: new Date() },
  { store_id: 49,  tag_id: 18, createdAt: new Date(), updatedAt: new Date() },
  { store_id: 49,  tag_id: 18, createdAt: new Date(), updatedAt: new Date() },

  { store_id: 50,  tag_id: 18, createdAt: new Date(), updatedAt: new Date() },
  { store_id: 50,  tag_id: 18, createdAt: new Date(), updatedAt: new Date() },
  { store_id: 50,  tag_id: 18, createdAt: new Date(), updatedAt: new Date() },
  { store_id: 50,  tag_id: 18, createdAt: new Date(), updatedAt: new Date() },
  { store_id: 50,  tag_id: 18, createdAt: new Date(), updatedAt: new Date() },

  { store_id: 51,  tag_id: 18, createdAt: new Date(), updatedAt: new Date() },
  { store_id: 51,  tag_id: 18, createdAt: new Date(), updatedAt: new Date() },
  { store_id: 51,  tag_id: 18, createdAt: new Date(), updatedAt: new Date() },
  { store_id: 51,  tag_id: 18, createdAt: new Date(), updatedAt: new Date() },
  { store_id: 51,  tag_id: 18, createdAt: new Date(), updatedAt: new Date() },

  { store_id: 52,  tag_id: 18, createdAt: new Date(), updatedAt: new Date() },
  { store_id: 52,  tag_id: 18, createdAt: new Date(), updatedAt: new Date() },
  { store_id: 52,  tag_id: 18, createdAt: new Date(), updatedAt: new Date() },
  { store_id: 52,  tag_id: 18, createdAt: new Date(), updatedAt: new Date() },
  { store_id: 52,  tag_id: 18, createdAt: new Date(), updatedAt: new Date() },

  { store_id: 53,  tag_id: 18, createdAt: new Date(), updatedAt: new Date() },
  { store_id: 53,  tag_id: 18, createdAt: new Date(), updatedAt: new Date() },
  { store_id: 53,  tag_id: 18, createdAt: new Date(), updatedAt: new Date() },
  { store_id: 53,  tag_id: 18, createdAt: new Date(), updatedAt: new Date() },
  { store_id: 53,  tag_id: 18, createdAt: new Date(), updatedAt: new Date() },

  { store_id: 54,  tag_id: 18, createdAt: new Date(), updatedAt: new Date() },
  { store_id: 54,  tag_id: 18, createdAt: new Date(), updatedAt: new Date() },
  { store_id: 54,  tag_id: 18, createdAt: new Date(), updatedAt: new Date() },
  { store_id: 54,  tag_id: 18, createdAt: new Date(), updatedAt: new Date() },
  { store_id: 54,  tag_id: 18, createdAt: new Date(), updatedAt: new Date() },

  { store_id: 55,  tag_id: 18, createdAt: new Date(), updatedAt: new Date() },
  { store_id: 55,  tag_id: 18, createdAt: new Date(), updatedAt: new Date() },
  { store_id: 55,  tag_id: 18, createdAt: new Date(), updatedAt: new Date() },
  { store_id: 55,  tag_id: 18, createdAt: new Date(), updatedAt: new Date() },
  { store_id: 55,  tag_id: 18, createdAt: new Date(), updatedAt: new Date() },

  { store_id: 56,  tag_id: 18, createdAt: new Date(), updatedAt: new Date() },
  { store_id: 56,  tag_id: 18, createdAt: new Date(), updatedAt: new Date() },
  { store_id: 56,  tag_id: 18, createdAt: new Date(), updatedAt: new Date() },
  { store_id: 56,  tag_id: 18, createdAt: new Date(), updatedAt: new Date() },




  //京都ドッグカフェ
  { store_id: 57,  tag_id: 18, createdAt: new Date(), updatedAt: new Date() },
  { store_id: 57,  tag_id: 18, createdAt: new Date(), updatedAt: new Date() },
  { store_id: 57,  tag_id: 18, createdAt: new Date(), updatedAt: new Date() },
  { store_id: 57,  tag_id: 18, createdAt: new Date(), updatedAt: new Date() },
  { store_id: 57,  tag_id: 18, createdAt: new Date(), updatedAt: new Date() },

  { store_id: 58,  tag_id: 18, createdAt: new Date(), updatedAt: new Date() },
  { store_id: 58,  tag_id: 18, createdAt: new Date(), updatedAt: new Date() },
  { store_id: 58,  tag_id: 18, createdAt: new Date(), updatedAt: new Date() },
  { store_id: 58,  tag_id: 18, createdAt: new Date(), updatedAt: new Date() },
  { store_id: 58,  tag_id: 18, createdAt: new Date(), updatedAt: new Date() },

  { store_id: 59,  tag_id: 18, createdAt: new Date(), updatedAt: new Date() },
  { store_id: 59,  tag_id: 18, createdAt: new Date(), updatedAt: new Date() },
  { store_id: 59,  tag_id: 18, createdAt: new Date(), updatedAt: new Date() },
  { store_id: 59,  tag_id: 18, createdAt: new Date(), updatedAt: new Date() },
  { store_id: 59,  tag_id: 18, createdAt: new Date(), updatedAt: new Date() },

  { store_id: 60,  tag_id: 18, createdAt: new Date(), updatedAt: new Date() },
  { store_id: 60,  tag_id: 18, createdAt: new Date(), updatedAt: new Date() },
  { store_id: 60,  tag_id: 18, createdAt: new Date(), updatedAt: new Date() },

  { store_id: 61,  tag_id: 18, createdAt: new Date(), updatedAt: new Date() },
  { store_id: 61,  tag_id: 18, createdAt: new Date(), updatedAt: new Date() },
  { store_id: 61,  tag_id: 18, createdAt: new Date(), updatedAt: new Date() },

  { store_id: 62,  tag_id: 18, createdAt: new Date(), updatedAt: new Date() },
  { store_id: 62,  tag_id: 18, createdAt: new Date(), updatedAt: new Date() },
  { store_id: 62,  tag_id: 18, createdAt: new Date(), updatedAt: new Date() },
  { store_id: 62,  tag_id: 18, createdAt: new Date(), updatedAt: new Date() },


  { store_id: 63,  tag_id: 18, createdAt: new Date(), updatedAt: new Date() },
  { store_id: 63,  tag_id: 18, createdAt: new Date(), updatedAt: new Date() },
  { store_id: 63,  tag_id: 18, createdAt: new Date(), updatedAt: new Date() },
  { store_id: 63,  tag_id: 18, createdAt: new Date(), updatedAt: new Date() },

  { store_id: 64,  tag_id: 18, createdAt: new Date(), updatedAt: new Date() },
  { store_id: 64,  tag_id: 18, createdAt: new Date(), updatedAt: new Date() },
  { store_id: 64,  tag_id: 18, createdAt: new Date(), updatedAt: new Date() },
  { store_id: 64,  tag_id: 18, createdAt: new Date(), updatedAt: new Date() },



  //大阪ドッグカフェ
  { store_id: 30,  tag_id: 18, createdAt: new Date(), updatedAt: new Date() },
  { store_id: 30,  tag_id: 18, createdAt: new Date(), updatedAt: new Date() },
  { store_id: 30,  tag_id: 18, createdAt: new Date(), updatedAt: new Date() },
  { store_id: 30,  tag_id: 18, createdAt: new Date(), updatedAt: new Date() },

  { store_id: 30,  tag_id: 18, createdAt: new Date(), updatedAt: new Date() },
  { store_id: 30,  tag_id: 18, createdAt: new Date(), updatedAt: new Date() },
  { store_id: 30,  tag_id: 18, createdAt: new Date(), updatedAt: new Date() },
  { store_id: 30,  tag_id: 18, createdAt: new Date(), updatedAt: new Date() },

  { store_id: 30,  tag_id: 18, createdAt: new Date(), updatedAt: new Date() },
  { store_id: 30,  tag_id: 18, createdAt: new Date(), updatedAt: new Date() },
  { store_id: 30,  tag_id: 18, createdAt: new Date(), updatedAt: new Date() },
  { store_id: 30,  tag_id: 18, createdAt: new Date(), updatedAt: new Date() },

  { store_id: 30,  tag_id: 18, createdAt: new Date(), updatedAt: new Date() },
  { store_id: 30,  tag_id: 18, createdAt: new Date(), updatedAt: new Date() },
  { store_id: 30,  tag_id: 18, createdAt: new Date(), updatedAt: new Date() },
  { store_id: 30,  tag_id: 18, createdAt: new Date(), updatedAt: new Date() },

  { store_id: 30,  tag_id: 18, createdAt: new Date(), updatedAt: new Date() },
  { store_id: 30,  tag_id: 18, createdAt: new Date(), updatedAt: new Date() },
  { store_id: 30,  tag_id: 18, createdAt: new Date(), updatedAt: new Date() },
  { store_id: 30,  tag_id: 18, createdAt: new Date(), updatedAt: new Date() },

  { store_id: 30,  tag_id: 18, createdAt: new Date(), updatedAt: new Date() },
  { store_id: 30,  tag_id: 18, createdAt: new Date(), updatedAt: new Date() },
  { store_id: 30,  tag_id: 18, createdAt: new Date(), updatedAt: new Date() },

  { store_id: 30,  tag_id: 18, createdAt: new Date(), updatedAt: new Date() },
  { store_id: 30,  tag_id: 18, createdAt: new Date(), updatedAt: new Date() },
  { store_id: 30,  tag_id: 18, createdAt: new Date(), updatedAt: new Date() },

  { store_id: 30,  tag_id: 18, createdAt: new Date(), updatedAt: new Date() },
  { store_id: 30,  tag_id: 18, createdAt: new Date(), updatedAt: new Date() },


  //兵庫ドッグカフェ
  { store_id: 31,  tag_id: 18, createdAt: new Date(), updatedAt: new Date() },
  { store_id: 31,  tag_id: 18, createdAt: new Date(), updatedAt: new Date() },
  { store_id: 31,  tag_id: 18, createdAt: new Date(), updatedAt: new Date() },
  { store_id: 31,  tag_id: 18, createdAt: new Date(), updatedAt: new Date() },

  { store_id: 35,  tag_id: 18, createdAt: new Date(), updatedAt: new Date() },
  { store_id: 35,  tag_id: 18, createdAt: new Date(), updatedAt: new Date() },
  { store_id: 35,  tag_id: 18, createdAt: new Date(), updatedAt: new Date() },

  { store_id: 36,  tag_id: 18, createdAt: new Date(), updatedAt: new Date() },
  { store_id: 36,  tag_id: 18, createdAt: new Date(), updatedAt: new Date() },
  { store_id: 36,  tag_id: 18, createdAt: new Date(), updatedAt: new Date() },
  { store_id: 36,  tag_id: 18, createdAt: new Date(), updatedAt: new Date() },

  { store_id: 37,  tag_id: 18, createdAt: new Date(), updatedAt: new Date() },
  { store_id: 37,  tag_id: 18, createdAt: new Date(), updatedAt: new Date() },
  { store_id: 37,  tag_id: 18, createdAt: new Date(), updatedAt: new Date() },
  { store_id: 37,  tag_id: 18, createdAt: new Date(), updatedAt: new Date() },

  { store_id: 38,  tag_id: 18, createdAt: new Date(), updatedAt: new Date() },
  { store_id: 38,  tag_id: 18, createdAt: new Date(), updatedAt: new Date() },
  { store_id: 38,  tag_id: 18, createdAt: new Date(), updatedAt: new Date() },

  { store_id: 39,  tag_id: 18, createdAt: new Date(), updatedAt: new Date() },
  { store_id: 39,  tag_id: 18, createdAt: new Date(), updatedAt: new Date() },
  { store_id: 39,  tag_id: 18, createdAt: new Date(), updatedAt: new Date() },
  { store_id: 39,  tag_id: 18, createdAt: new Date(), updatedAt: new Date() },

  { store_id: 40,  tag_id: 18, createdAt: new Date(), updatedAt: new Date() },
  { store_id: 40,  tag_id: 18, createdAt: new Date(), updatedAt: new Date() },
  { store_id: 40,  tag_id: 18, createdAt: new Date(), updatedAt: new Date() },

  { store_id: 41,  tag_id: 18, createdAt: new Date(), updatedAt: new Date() },
  { store_id: 41,  tag_id: 18, createdAt: new Date(), updatedAt: new Date() },
  { store_id: 41,  tag_id: 18, createdAt: new Date(), updatedAt: new Date() },




  
  //北海道ペットショップ
  { store_id: 42,  tag_id: 18, createdAt: new Date(), updatedAt: new Date() },
  { store_id: 42,  tag_id: 18, createdAt: new Date(), updatedAt: new Date() },
  { store_id: 42,  tag_id: 18, createdAt: new Date(), updatedAt: new Date() },
  { store_id: 42,  tag_id: 18, createdAt: new Date(), updatedAt: new Date() },
  { store_id: 42,  tag_id: 18, createdAt: new Date(), updatedAt: new Date() },

  { store_id: 43,  tag_id: 18, createdAt: new Date(), updatedAt: new Date() },
  { store_id: 43,  tag_id: 18, createdAt: new Date(), updatedAt: new Date() },
  { store_id: 43,  tag_id: 18, createdAt: new Date(), updatedAt: new Date() },
  { store_id: 44,  tag_id: 18, createdAt: new Date(), updatedAt: new Date() },

  { store_id: 45,  tag_id: 18, createdAt: new Date(), updatedAt: new Date() },
  { store_id: 45,  tag_id: 18, createdAt: new Date(), updatedAt: new Date() },
  { store_id: 45,  tag_id: 18, createdAt: new Date(), updatedAt: new Date() },
  { store_id: 45,  tag_id: 18, createdAt: new Date(), updatedAt: new Date() },

  { store_id: 46,  tag_id: 18, createdAt: new Date(), updatedAt: new Date() },
  { store_id: 46,  tag_id: 18, createdAt: new Date(), updatedAt: new Date() },
  { store_id: 46,  tag_id: 18, createdAt: new Date(), updatedAt: new Date() },

  { store_id: 47,  tag_id: 18, createdAt: new Date(), updatedAt: new Date() },
  { store_id: 47,  tag_id: 18, createdAt: new Date(), updatedAt: new Date() },
  { store_id: 47,  tag_id: 18, createdAt: new Date(), updatedAt: new Date() },
  { store_id: 47,  tag_id: 18, createdAt: new Date(), updatedAt: new Date() },

  { store_id: 48,  tag_id: 18, createdAt: new Date(), updatedAt: new Date() },
  { store_id: 48,  tag_id: 18, createdAt: new Date(), updatedAt: new Date() },
  { store_id: 48,  tag_id: 18, createdAt: new Date(), updatedAt: new Date() },
  { store_id: 49,  tag_id: 18, createdAt: new Date(), updatedAt: new Date() },

  { store_id: 50,  tag_id: 18, createdAt: new Date(), updatedAt: new Date() },
  { store_id: 50,  tag_id: 18, createdAt: new Date(), updatedAt: new Date() },
  { store_id: 50,  tag_id: 18, createdAt: new Date(), updatedAt: new Date() },

  { store_id: 51,  tag_id: 18, createdAt: new Date(), updatedAt: new Date() },
  { store_id: 51,  tag_id: 18, createdAt: new Date(), updatedAt: new Date() },
  { store_id: 51,  tag_id: 18, createdAt: new Date(), updatedAt: new Date() },


  //神奈川ペットショップ
  { store_id: 52,  tag_id: 18, createdAt: new Date(), updatedAt: new Date() },
  { store_id: 52,  tag_id: 18, createdAt: new Date(), updatedAt: new Date() },
  { store_id: 52,  tag_id: 18, createdAt: new Date(), updatedAt: new Date() },
  { store_id: 52,  tag_id: 18, createdAt: new Date(), updatedAt: new Date() },

  { store_id: 53,  tag_id: 18, createdAt: new Date(), updatedAt: new Date() },
  { store_id: 53,  tag_id: 18, createdAt: new Date(), updatedAt: new Date() },
  { store_id: 53,  tag_id: 18, createdAt: new Date(), updatedAt: new Date() },
  { store_id: 53,  tag_id: 18, createdAt: new Date(), updatedAt: new Date() },

  { store_id: 54,  tag_id: 18, createdAt: new Date(), updatedAt: new Date() },
  { store_id: 54,  tag_id: 18, createdAt: new Date(), updatedAt: new Date() },
  { store_id: 54,  tag_id: 18, createdAt: new Date(), updatedAt: new Date() },
  { store_id: 54,  tag_id: 18, createdAt: new Date(), updatedAt: new Date() },
  { store_id: 54,  tag_id: 18, createdAt: new Date(), updatedAt: new Date() },

  { store_id: 56,  tag_id: 18, createdAt: new Date(), updatedAt: new Date() },
  { store_id: 56,  tag_id: 18, createdAt: new Date(), updatedAt: new Date() },
  { store_id: 56,  tag_id: 18, createdAt: new Date(), updatedAt: new Date() },
  { store_id: 56,  tag_id: 18, createdAt: new Date(), updatedAt: new Date() },
  { store_id: 56,  tag_id: 18, createdAt: new Date(), updatedAt: new Date() },

  { store_id: 57,  tag_id: 18, createdAt: new Date(), updatedAt: new Date() },
  { store_id: 57,  tag_id: 18, createdAt: new Date(), updatedAt: new Date() },
  { store_id: 57,  tag_id: 18, createdAt: new Date(), updatedAt: new Date() },
  { store_id: 57,  tag_id: 18, createdAt: new Date(), updatedAt: new Date() },
  { store_id: 57,  tag_id: 18, createdAt: new Date(), updatedAt: new Date() },
  { store_id: 57,  tag_id: 18, createdAt: new Date(), updatedAt: new Date() },






  //愛知ペットショップ
  { store_id: 58,  tag_id: 18, createdAt: new Date(), updatedAt: new Date() },
  { store_id: 58,  tag_id: 18, createdAt: new Date(), updatedAt: new Date() },
  { store_id: 58,  tag_id: 18, createdAt: new Date(), updatedAt: new Date() },
  { store_id: 58,  tag_id: 18, createdAt: new Date(), updatedAt: new Date() },
  { store_id: 58,  tag_id: 18, createdAt: new Date(), updatedAt: new Date() },

  { store_id: 59,  tag_id: 18, createdAt: new Date(), updatedAt: new Date() },
  { store_id: 59,  tag_id: 18, createdAt: new Date(), updatedAt: new Date() },
  { store_id: 59,  tag_id: 18, createdAt: new Date(), updatedAt: new Date() },
  { store_id: 59,  tag_id: 18, createdAt: new Date(), updatedAt: new Date() },
  { store_id: 59,  tag_id: 18, createdAt: new Date(), updatedAt: new Date() },

  { store_id: 60,  tag_id: 18, createdAt: new Date(), updatedAt: new Date() },
  { store_id: 60,  tag_id: 18, createdAt: new Date(), updatedAt: new Date() },
  { store_id: 60,  tag_id: 18, createdAt: new Date(), updatedAt: new Date() },
  { store_id: 60,  tag_id: 18, createdAt: new Date(), updatedAt: new Date() },

  { store_id: 61,  tag_id: 18, createdAt: new Date(), updatedAt: new Date() },
  { store_id: 61,  tag_id: 18, createdAt: new Date(), updatedAt: new Date() },
  { store_id: 61,  tag_id: 18, createdAt: new Date(), updatedAt: new Date() },
  { store_id: 61,  tag_id: 18, createdAt: new Date(), updatedAt: new Date() },

  { store_id: 62,  tag_id: 18, createdAt: new Date(), updatedAt: new Date() },
  { store_id: 62,  tag_id: 18, createdAt: new Date(), updatedAt: new Date() },
  { store_id: 62,  tag_id: 18, createdAt: new Date(), updatedAt: new Date() },
  { store_id: 62,  tag_id: 18, createdAt: new Date(), updatedAt: new Date() },

  { store_id: 63,  tag_id: 18, createdAt: new Date(), updatedAt: new Date() },
  { store_id: 63,  tag_id: 18, createdAt: new Date(), updatedAt: new Date() },
  { store_id: 63,  tag_id: 18, createdAt: new Date(), updatedAt: new Date() },
  { store_id: 63,  tag_id: 18, createdAt: new Date(), updatedAt: new Date() },

  { store_id: 64,  tag_id: 18, createdAt: new Date(), updatedAt: new Date() },
  { store_id: 64,  tag_id: 18, createdAt: new Date(), updatedAt: new Date() },

  { store_id: 65,  tag_id: 18, createdAt: new Date(), updatedAt: new Date() },
  { store_id: 65,  tag_id: 18, createdAt: new Date(), updatedAt: new Date() },
  { store_id: 65,  tag_id: 18, createdAt: new Date(), updatedAt: new Date() },
  { store_id: 65,  tag_id: 18, createdAt: new Date(), updatedAt: new Date() },





  //京都ペットショップ
  { store_id: 66,  tag_id: 18, createdAt: new Date(), updatedAt: new Date() },
  { store_id: 66,  tag_id: 18, createdAt: new Date(), updatedAt: new Date() },
  { store_id: 66,  tag_id: 18, createdAt: new Date(), updatedAt: new Date() },
  { store_id: 66,  tag_id: 18, createdAt: new Date(), updatedAt: new Date() },
  { store_id: 66,  tag_id: 18, createdAt: new Date(), updatedAt: new Date() },

  { store_id: 67,  tag_id: 18, createdAt: new Date(), updatedAt: new Date() },
  { store_id: 67,  tag_id: 18, createdAt: new Date(), updatedAt: new Date() },
  { store_id: 67,  tag_id: 18, createdAt: new Date(), updatedAt: new Date() },
  { store_id: 67,  tag_id: 18, createdAt: new Date(), updatedAt: new Date() },

  { store_id: 68,  tag_id: 18, createdAt: new Date(), updatedAt: new Date() },
  { store_id: 68,  tag_id: 18, createdAt: new Date(), updatedAt: new Date() },
  { store_id: 68,  tag_id: 18, createdAt: new Date(), updatedAt: new Date() },

  { store_id: 69,  tag_id: 18, createdAt: new Date(), updatedAt: new Date() },
  { store_id: 69,  tag_id: 18, createdAt: new Date(), updatedAt: new Date() },
  { store_id: 69,  tag_id: 18, createdAt: new Date(), updatedAt: new Date() },
  { store_id: 69,  tag_id: 18, createdAt: new Date(), updatedAt: new Date() },

  { store_id: 70,  tag_id: 18, createdAt: new Date(), updatedAt: new Date() },
  { store_id: 70,  tag_id: 18, createdAt: new Date(), updatedAt: new Date() },
  { store_id: 70,  tag_id: 18, createdAt: new Date(), updatedAt: new Date() },

  { store_id: 71,  tag_id: 18, createdAt: new Date(), updatedAt: new Date() },
  { store_id: 71,  tag_id: 18, createdAt: new Date(), updatedAt: new Date() },
  { store_id: 71,  tag_id: 18, createdAt: new Date(), updatedAt: new Date() },

  { store_id: 72,  tag_id: 18, createdAt: new Date(), updatedAt: new Date() },
  { store_id: 72,  tag_id: 18, createdAt: new Date(), updatedAt: new Date() },
  { store_id: 72,  tag_id: 18, createdAt: new Date(), updatedAt: new Date() },

  { store_id: 73,  tag_id: 18, createdAt: new Date(), updatedAt: new Date() },
  { store_id: 73,  tag_id: 18, createdAt: new Date(), updatedAt: new Date() },
  { store_id: 73,  tag_id: 18, createdAt: new Date(), updatedAt: new Date() },
  { store_id: 73,  tag_id: 18, createdAt: new Date(), updatedAt: new Date() },


  //大阪ペットショップ
  { store_id: 74,  tag_id: 18, createdAt: new Date(), updatedAt: new Date() },
  { store_id: 74,  tag_id: 18, createdAt: new Date(), updatedAt: new Date() },
  { store_id: 74,  tag_id: 18, createdAt: new Date(), updatedAt: new Date() },
  { store_id: 74,  tag_id: 18, createdAt: new Date(), updatedAt: new Date() },
  { store_id: 74,  tag_id: 18, createdAt: new Date(), updatedAt: new Date() },
  { store_id: 74,  tag_id: 18, createdAt: new Date(), updatedAt: new Date() },


  { store_id: 75,  tag_id: 18, createdAt: new Date(), updatedAt: new Date() },
  { store_id: 75,  tag_id: 18, createdAt: new Date(), updatedAt: new Date() },
  { store_id: 75,  tag_id: 18, createdAt: new Date(), updatedAt: new Date() },

  { store_id: 76,  tag_id: 18, createdAt: new Date(), updatedAt: new Date() },
  { store_id: 76,  tag_id: 18, createdAt: new Date(), updatedAt: new Date() },
  { store_id: 76,  tag_id: 18, createdAt: new Date(), updatedAt: new Date() },

  { store_id: 77,  tag_id: 18, createdAt: new Date(), updatedAt: new Date() },
  { store_id: 77,  tag_id: 18, createdAt: new Date(), updatedAt: new Date() },
  { store_id: 77,  tag_id: 18, createdAt: new Date(), updatedAt: new Date() },
  { store_id: 77,  tag_id: 18, createdAt: new Date(), updatedAt: new Date() },
  { store_id: 77,  tag_id: 18, createdAt: new Date(), updatedAt: new Date() },

  { store_id: 78,  tag_id: 18, createdAt: new Date(), updatedAt: new Date() },
  { store_id: 78,  tag_id: 18, createdAt: new Date(), updatedAt: new Date() },
  { store_id: 78,  tag_id: 18, createdAt: new Date(), updatedAt: new Date() },
  { store_id: 78,  tag_id: 18, createdAt: new Date(), updatedAt: new Date() },
  { store_id: 78,  tag_id: 18, createdAt: new Date(), updatedAt: new Date() },

  { store_id: 79,  tag_id: 18, createdAt: new Date(), updatedAt: new Date() },
  { store_id: 79,  tag_id: 18, createdAt: new Date(), updatedAt: new Date() },
  { store_id: 79,  tag_id: 18, createdAt: new Date(), updatedAt: new Date() },

  { store_id: 80,  tag_id: 18, createdAt: new Date(), updatedAt: new Date() },
  { store_id: 80,  tag_id: 18, createdAt: new Date(), updatedAt: new Date() },
  { store_id: 80,  tag_id: 18, createdAt: new Date(), updatedAt: new Date() },

  { store_id: 81,  tag_id: 18, createdAt: new Date(), updatedAt: new Date() },
  { store_id: 81,  tag_id: 18, createdAt: new Date(), updatedAt: new Date() },
  { store_id: 81,  tag_id: 18, createdAt: new Date(), updatedAt: new Date() },
  { store_id: 81,  tag_id: 18, createdAt: new Date(), updatedAt: new Date() },


  { store_id: 82,  tag_id: 18, createdAt: new Date(), updatedAt: new Date() },
  { store_id: 82,  tag_id: 18, createdAt: new Date(), updatedAt: new Date() },
  { store_id: 82,  tag_id: 18, createdAt: new Date(), updatedAt: new Date() },







  //兵庫ペットショップ
  { store_id: 83,  tag_id: 18, createdAt: new Date(), updatedAt: new Date() },
  { store_id: 83,  tag_id: 18, createdAt: new Date(), updatedAt: new Date() },
  { store_id: 83,  tag_id: 18, createdAt: new Date(), updatedAt: new Date() },
  { store_id: 83,  tag_id: 18, createdAt: new Date(), updatedAt: new Date() },

  { store_id: 84,  tag_id: 18, createdAt: new Date(), updatedAt: new Date() },
  { store_id: 84,  tag_id: 18, createdAt: new Date(), updatedAt: new Date() },

  { store_id: 85,  tag_id: 18, createdAt: new Date(), updatedAt: new Date() },
  { store_id: 85,  tag_id: 18, createdAt: new Date(), updatedAt: new Date() },
  { store_id: 85,  tag_id: 18, createdAt: new Date(), updatedAt: new Date() },

  { store_id: 86,  tag_id: 18, createdAt: new Date(), updatedAt: new Date() },
  { store_id: 86,  tag_id: 18, createdAt: new Date(), updatedAt: new Date() },
  { store_id: 86,  tag_id: 18, createdAt: new Date(), updatedAt: new Date() },

  { store_id: 87,  tag_id: 18, createdAt: new Date(), updatedAt: new Date() },
  { store_id: 87,  tag_id: 18, createdAt: new Date(), updatedAt: new Date() },
  { store_id: 87,  tag_id: 18, createdAt: new Date(), updatedAt: new Date() },

  { store_id: 88,  tag_id: 18, createdAt: new Date(), updatedAt: new Date() },
  { store_id: 88,  tag_id: 18, createdAt: new Date(), updatedAt: new Date() },

  { store_id: 89,  tag_id: 18, createdAt: new Date(), updatedAt: new Date() },
  { store_id: 89,  tag_id: 18, createdAt: new Date(), updatedAt: new Date() },
  { store_id: 89,  tag_id: 18, createdAt: new Date(), updatedAt: new Date() },
  { store_id: 89,  tag_id: 18, createdAt: new Date(), updatedAt: new Date() },
  { store_id: 89,  tag_id: 18, createdAt: new Date(), updatedAt: new Date() },


  
  //北海道病院
  { store_id: 90,  tag_id: 23, createdAt: new Date(), updatedAt: new Date() },
  { store_id: 90,  tag_id: 24, createdAt: new Date(), updatedAt: new Date() },
  { store_id: 90,  tag_id: 25, createdAt: new Date(), updatedAt: new Date() },
  { store_id: 90,  tag_id: 27, createdAt: new Date(), updatedAt: new Date() },

  { store_id: 91,  tag_id: 27, createdAt: new Date(), updatedAt: new Date() },
  { store_id: 91,  tag_id: 27, createdAt: new Date(), updatedAt: new Date() },
  { store_id: 91,  tag_id: 27, createdAt: new Date(), updatedAt: new Date() },
  { store_id: 91,  tag_id: 27, createdAt: new Date(), updatedAt: new Date() },

  { store_id: 92,  tag_id: 27, createdAt: new Date(), updatedAt: new Date() },
  { store_id: 92,  tag_id: 27, createdAt: new Date(), updatedAt: new Date() },
  { store_id: 92,  tag_id: 27, createdAt: new Date(), updatedAt: new Date() },

  { store_id: 93,  tag_id: 27, createdAt: new Date(), updatedAt: new Date() },
  { store_id: 93,  tag_id: 27, createdAt: new Date(), updatedAt: new Date() },

  { store_id: 94,  tag_id: 27, createdAt: new Date(), updatedAt: new Date() },
  { store_id: 94,  tag_id: 27, createdAt: new Date(), updatedAt: new Date() },
  { store_id: 94,  tag_id: 27, createdAt: new Date(), updatedAt: new Date() },
  { store_id: 94,  tag_id: 27, createdAt: new Date(), updatedAt: new Date() },

  { store_id: 95,  tag_id: 27, createdAt: new Date(), updatedAt: new Date() },
  { store_id: 95,  tag_id: 27, createdAt: new Date(), updatedAt: new Date() },
  { store_id: 95,  tag_id: 27, createdAt: new Date(), updatedAt: new Date() },
  { store_id: 95,  tag_id: 27, createdAt: new Date(), updatedAt: new Date() },

  { store_id: 96,  tag_id: 27, createdAt: new Date(), updatedAt: new Date() },
  { store_id: 96,  tag_id: 27, createdAt: new Date(), updatedAt: new Date() },
  { store_id: 96,  tag_id: 27, createdAt: new Date(), updatedAt: new Date() },
  { store_id: 96,  tag_id: 27, createdAt: new Date(), updatedAt: new Date() },
  { store_id: 96,  tag_id: 27, createdAt: new Date(), updatedAt: new Date() },

  { store_id: 97,  tag_id: 27, createdAt: new Date(), updatedAt: new Date() },
  { store_id: 97,  tag_id: 27, createdAt: new Date(), updatedAt: new Date() },
  { store_id: 97,  tag_id: 27, createdAt: new Date(), updatedAt: new Date() },
  { store_id: 97,  tag_id: 27, createdAt: new Date(), updatedAt: new Date() },

  { store_id: 98,  tag_id: 27, createdAt: new Date(), updatedAt: new Date() },
  { store_id: 98,  tag_id: 27, createdAt: new Date(), updatedAt: new Date() },
  { store_id: 98,  tag_id: 27, createdAt: new Date(), updatedAt: new Date() },
  { store_id: 98,  tag_id: 27, createdAt: new Date(), updatedAt: new Date() },

  //東京の病院
  { store_id: 99,  tag_id: 27, createdAt: new Date(), updatedAt: new Date() },
  { store_id: 99,  tag_id: 27, createdAt: new Date(), updatedAt: new Date() },
  { store_id: 99,  tag_id: 27, createdAt: new Date(), updatedAt: new Date() },

  { store_id: 100,  tag_id: 27, createdAt: new Date(), updatedAt: new Date() },
  { store_id: 100,  tag_id: 27, createdAt: new Date(), updatedAt: new Date() },
  { store_id: 100,  tag_id: 27, createdAt: new Date(), updatedAt: new Date() },
  { store_id: 100,  tag_id: 27, createdAt: new Date(), updatedAt: new Date() },

  { store_id: 101,  tag_id: 27, createdAt: new Date(), updatedAt: new Date() },
  { store_id: 101,  tag_id: 27, createdAt: new Date(), updatedAt: new Date() },
  { store_id: 101,  tag_id: 27, createdAt: new Date(), updatedAt: new Date() },
  { store_id: 101,  tag_id: 27, createdAt: new Date(), updatedAt: new Date() },

  { store_id: 102,  tag_id: 27, createdAt: new Date(), updatedAt: new Date() },
  { store_id: 102,  tag_id: 27, createdAt: new Date(), updatedAt: new Date() },
  { store_id: 102,  tag_id: 27, createdAt: new Date(), updatedAt: new Date() },
  { store_id: 102,  tag_id: 27, createdAt: new Date(), updatedAt: new Date() },

  { store_id: 103,  tag_id: 27, createdAt: new Date(), updatedAt: new Date() },
  { store_id: 103,  tag_id: 27, createdAt: new Date(), updatedAt: new Date() },
  { store_id: 103,  tag_id: 27, createdAt: new Date(), updatedAt: new Date() },

  { store_id: 104,  tag_id: 27, createdAt: new Date(), updatedAt: new Date() },
  { store_id: 104,  tag_id: 27, createdAt: new Date(), updatedAt: new Date() },
  { store_id: 104,  tag_id: 27, createdAt: new Date(), updatedAt: new Date() },
  { store_id: 104,  tag_id: 27, createdAt: new Date(), updatedAt: new Date() },
  { store_id: 104,  tag_id: 27, createdAt: new Date(), updatedAt: new Date() },

  { store_id: 105,  tag_id: 27, createdAt: new Date(), updatedAt: new Date() },
  { store_id: 105,  tag_id: 27, createdAt: new Date(), updatedAt: new Date() },
  { store_id: 105,  tag_id: 27, createdAt: new Date(), updatedAt: new Date() },
  { store_id: 105,  tag_id: 27, createdAt: new Date(), updatedAt: new Date() },
  { store_id: 105,  tag_id: 27, createdAt: new Date(), updatedAt: new Date() },

  { store_id: 106,  tag_id: 27, createdAt: new Date(), updatedAt: new Date() },
  { store_id: 106,  tag_id: 27, createdAt: new Date(), updatedAt: new Date() },
  { store_id: 106,  tag_id: 27, createdAt: new Date(), updatedAt: new Date() },

  //神奈川の病院
  { store_id: 107,  tag_id: 27, createdAt: new Date(), updatedAt: new Date() },
  { store_id: 107,  tag_id: 27, createdAt: new Date(), updatedAt: new Date() },
  { store_id: 107,  tag_id: 27, createdAt: new Date(), updatedAt: new Date() },
  { store_id: 107,  tag_id: 27, createdAt: new Date(), updatedAt: new Date() },
  { store_id: 107,  tag_id: 27, createdAt: new Date(), updatedAt: new Date() },
  { store_id: 107,  tag_id: 27, createdAt: new Date(), updatedAt: new Date() },
  { store_id: 107,  tag_id: 27, createdAt: new Date(), updatedAt: new Date() },
  { store_id: 107,  tag_id: 27, createdAt: new Date(), updatedAt: new Date() },
  { store_id: 107,  tag_id: 27, createdAt: new Date(), updatedAt: new Date() },
  { store_id: 107,  tag_id: 27, createdAt: new Date(), updatedAt: new Date() },
  { store_id: 107,  tag_id: 27, createdAt: new Date(), updatedAt: new Date() },
  { store_id: 107,  tag_id: 27, createdAt: new Date(), updatedAt: new Date() },
  { store_id: 107,  tag_id: 27, createdAt: new Date(), updatedAt: new Date() },
  { store_id: 107,  tag_id: 27, createdAt: new Date(), updatedAt: new Date() },


  //愛知の病院
  { store_id: 108,  tag_id: 27, createdAt: new Date(), updatedAt: new Date() },
  { store_id: 108,  tag_id: 27, createdAt: new Date(), updatedAt: new Date() },
  { store_id: 108,  tag_id: 27, createdAt: new Date(), updatedAt: new Date() },
  { store_id: 108,  tag_id: 27, createdAt: new Date(), updatedAt: new Date() },
  { store_id: 108,  tag_id: 27, createdAt: new Date(), updatedAt: new Date() },

  { store_id: 109,  tag_id: 27, createdAt: new Date(), updatedAt: new Date() },
  { store_id: 109,  tag_id: 27, createdAt: new Date(), updatedAt: new Date() },
  { store_id: 109,  tag_id: 27, createdAt: new Date(), updatedAt: new Date() },
  { store_id: 109,  tag_id: 27, createdAt: new Date(), updatedAt: new Date() },
  { store_id: 109,  tag_id: 27, createdAt: new Date(), updatedAt: new Date() },
  { store_id: 109,  tag_id: 27, createdAt: new Date(), updatedAt: new Date() },
  
  { store_id: 110,  tag_id: 27, createdAt: new Date(), updatedAt: new Date() },
  { store_id: 110,  tag_id: 27, createdAt: new Date(), updatedAt: new Date() },
  { store_id: 110,  tag_id: 27, createdAt: new Date(), updatedAt: new Date() },
  { store_id: 110,  tag_id: 27, createdAt: new Date(), updatedAt: new Date() },
  
  { store_id: 110,  tag_id: 27, createdAt: new Date(), updatedAt: new Date() },
  { store_id: 110,  tag_id: 27, createdAt: new Date(), updatedAt: new Date() },
  { store_id: 110,  tag_id: 27, createdAt: new Date(), updatedAt: new Date() },
  { store_id: 110,  tag_id: 27, createdAt: new Date(), updatedAt: new Date() },
  
  { store_id: 111,  tag_id: 27, createdAt: new Date(), updatedAt: new Date() },
  { store_id: 111,  tag_id: 27, createdAt: new Date(), updatedAt: new Date() },
  { store_id: 111,  tag_id: 27, createdAt: new Date(), updatedAt: new Date() },

  { store_id: 112,  tag_id: 27, createdAt: new Date(), updatedAt: new Date() },
  { store_id: 112,  tag_id: 27, createdAt: new Date(), updatedAt: new Date() },

  { store_id: 113,  tag_id: 27, createdAt: new Date(), updatedAt: new Date() },
  { store_id: 113,  tag_id: 27, createdAt: new Date(), updatedAt: new Date() },
  { store_id: 113,  tag_id: 27, createdAt: new Date(), updatedAt: new Date() },

  
  
    
  
  //京都の病院
  { store_id: 114,  tag_id: 27, createdAt: new Date(), updatedAt: new Date() },
  { store_id: 114,  tag_id: 27, createdAt: new Date(), updatedAt: new Date() },
  { store_id: 114,  tag_id: 27, createdAt: new Date(), updatedAt: new Date() },

  { store_id: 115,  tag_id: 27, createdAt: new Date(), updatedAt: new Date() },
  { store_id: 115,  tag_id: 27, createdAt: new Date(), updatedAt: new Date() },
  { store_id: 115,  tag_id: 27, createdAt: new Date(), updatedAt: new Date() },

  { store_id: 116,  tag_id: 27, createdAt: new Date(), updatedAt: new Date() },
  { store_id: 116,  tag_id: 27, createdAt: new Date(), updatedAt: new Date() },

  { store_id: 117,  tag_id: 27, createdAt: new Date(), updatedAt: new Date() },
  { store_id: 117,  tag_id: 27, createdAt: new Date(), updatedAt: new Date() },

  { store_id: 118,  tag_id: 27, createdAt: new Date(), updatedAt: new Date() },
  { store_id: 118,  tag_id: 27, createdAt: new Date(), updatedAt: new Date() },
  { store_id: 118,  tag_id: 27, createdAt: new Date(), updatedAt: new Date() },

  { store_id: 119,  tag_id: 27, createdAt: new Date(), updatedAt: new Date() },
  { store_id: 119,  tag_id: 27, createdAt: new Date(), updatedAt: new Date() },

  { store_id: 120,  tag_id: 27, createdAt: new Date(), updatedAt: new Date() },
  { store_id: 120,  tag_id: 27, createdAt: new Date(), updatedAt: new Date() },
  { store_id: 120,  tag_id: 27, createdAt: new Date(), updatedAt: new Date() },
  { store_id: 120,  tag_id: 27, createdAt: new Date(), updatedAt: new Date() },

  { store_id: 121,  tag_id: 27, createdAt: new Date(), updatedAt: new Date() },
  { store_id: 121,  tag_id: 27, createdAt: new Date(), updatedAt: new Date() },
  { store_id: 121,  tag_id: 27, createdAt: new Date(), updatedAt: new Date() },

  //大阪の病院
  { store_id: 122,  tag_id: 27, createdAt: new Date(), updatedAt: new Date() },
  { store_id: 122,  tag_id: 27, createdAt: new Date(), updatedAt: new Date() },
  { store_id: 122,  tag_id: 27, createdAt: new Date(), updatedAt: new Date() },

  { store_id: 123,  tag_id: 27, createdAt: new Date(), updatedAt: new Date() },
  { store_id: 123,  tag_id: 27, createdAt: new Date(), updatedAt: new Date() },

  { store_id: 124,  tag_id: 27, createdAt: new Date(), updatedAt: new Date() },
  { store_id: 124,  tag_id: 27, createdAt: new Date(), updatedAt: new Date() },
  { store_id: 124,  tag_id: 27, createdAt: new Date(), updatedAt: new Date() },

  { store_id: 125,  tag_id: 27, createdAt: new Date(), updatedAt: new Date() },
  { store_id: 125,  tag_id: 27, createdAt: new Date(), updatedAt: new Date() },
  { store_id: 125,  tag_id: 27, createdAt: new Date(), updatedAt: new Date() },

  { store_id: 126,  tag_id: 27, createdAt: new Date(), updatedAt: new Date() },
  { store_id: 126,  tag_id: 27, createdAt: new Date(), updatedAt: new Date() },
  { store_id: 126,  tag_id: 27, createdAt: new Date(), updatedAt: new Date() },
  { store_id: 126,  tag_id: 27, createdAt: new Date(), updatedAt: new Date() },

  { store_id: 127,  tag_id: 27, createdAt: new Date(), updatedAt: new Date() },
  { store_id: 127,  tag_id: 27, createdAt: new Date(), updatedAt: new Date() },
  { store_id: 127,  tag_id: 27, createdAt: new Date(), updatedAt: new Date() },

  { store_id: 128,  tag_id: 27, createdAt: new Date(), updatedAt: new Date() },
  { store_id: 128,  tag_id: 27, createdAt: new Date(), updatedAt: new Date() },
  { store_id: 128,  tag_id: 27, createdAt: new Date(), updatedAt: new Date() },

  { store_id: 129,  tag_id: 27, createdAt: new Date(), updatedAt: new Date() },

  //兵庫の病院
  { store_id: 130,  tag_id: 27, createdAt: new Date(), updatedAt: new Date() },
  { store_id: 130,  tag_id: 27, createdAt: new Date(), updatedAt: new Date() },
  { store_id: 130,  tag_id: 27, createdAt: new Date(), updatedAt: new Date() },

  { store_id: 131,  tag_id: 27, createdAt: new Date(), updatedAt: new Date() },
  { store_id: 131,  tag_id: 27, createdAt: new Date(), updatedAt: new Date() },
  { store_id: 131,  tag_id: 27, createdAt: new Date(), updatedAt: new Date() },

  { store_id: 132,  tag_id: 27, createdAt: new Date(), updatedAt: new Date() },
  { store_id: 132,  tag_id: 27, createdAt: new Date(), updatedAt: new Date() },

  { store_id: 133,  tag_id: 27, createdAt: new Date(), updatedAt: new Date() },
  { store_id: 133,  tag_id: 27, createdAt: new Date(), updatedAt: new Date() },

  { store_id: 134,  tag_id: 27, createdAt: new Date(), updatedAt: new Date() },
  { store_id: 134,  tag_id: 27, createdAt: new Date(), updatedAt: new Date() },
  { store_id: 134,  tag_id: 27, createdAt: new Date(), updatedAt: new Date() },
  { store_id: 134,  tag_id: 27, createdAt: new Date(), updatedAt: new Date() },

  { store_id: 135,  tag_id: 27, createdAt: new Date(), updatedAt: new Date() },
  { store_id: 135,  tag_id: 27, createdAt: new Date(), updatedAt: new Date() },
  { store_id: 135,  tag_id: 27, createdAt: new Date(), updatedAt: new Date() },
  { store_id: 135,  tag_id: 27, createdAt: new Date(), updatedAt: new Date() },

  { store_id: 136,  tag_id: 27, createdAt: new Date(), updatedAt: new Date() },
  { store_id: 136,  tag_id: 27, createdAt: new Date(), updatedAt: new Date() },
  { store_id: 136,  tag_id: 27, createdAt: new Date(), updatedAt: new Date() },
  { store_id: 136,  tag_id: 27, createdAt: new Date(), updatedAt: new Date() },

  ]


 );
},

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete('stores_tags', null, {});
  },
};
