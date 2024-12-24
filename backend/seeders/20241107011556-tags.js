"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert(
      "tags",
      [
        { name: "自然芝生", tag_type: 1, createdAt: new Date(), updatedAt: new Date() },
        { name: "人工芝生", tag_type: 1, createdAt: new Date(), updatedAt: new Date() },
        { name: "全種利用可能", tag_type: 1, createdAt: new Date(), updatedAt: new Date() },
        { name: "小型犬エリア有り", tag_type: 1, createdAt: new Date(), updatedAt: new Date(), },
        { name: "駐車場有り", tag_type: 1, createdAt: new Date(), updatedAt: new Date() },
        { name: "24時間利用可能", tag_type: 1, createdAt: new Date(), updatedAt: new Date(), },
        { name: "屋内", tag_type: 1, createdAt: new Date(), updatedAt: new Date() },
        { name: "屋外", tag_type: 1,createdAt: new Date(), updatedAt: new Date() },
        // facility
        { name: "おしっこじょうろあり", tag_type: 2, createdAt: new Date(), updatedAt: new Date() }, 
        { name: "うんち袋あり", tag_type: 2, createdAt: new Date(), updatedAt: new Date() },
        { name: "ゴミ箱あり(うんち)", tag_type: 2, createdAt: new Date(), updatedAt: new Date() },
        { name: "洗い場あり", tag_type: 2, createdAt: new Date(), updatedAt: new Date() },
        { name: "トイレあり（人間用）", tag_type: 2, createdAt: new Date(), updatedAt: new Date() },
        { name: "水飲み場あり", tag_type: 2, createdAt: new Date(), updatedAt: new Date() },
        // dog_cafe
        { name: "店内OK", tag_type: 3, createdAt: new Date(), updatedAt: new Date() },
        { name: "テラス席OK", tag_type: 3, createdAt: new Date(), updatedAt: new Date() },
        { name: "大型犬OK", tag_type: 3, createdAt: new Date(), updatedAt: new Date() },
        { name: "駐車場あり", tag_type: 3, createdAt: new Date(), updatedAt: new Date() },
        { name: "わんこメニューあり", tag_type: 3, createdAt: new Date(), updatedAt: new Date() },
        
        //petshop
        { name: "駐車場あり", tag_type: 4, createdAt: new Date(), updatedAt: new Date() },
        { name: "トリミングあり", tag_type: 4, createdAt: new Date(), updatedAt: new Date() },
        { name: "ペットホテル併設", tag_type: 4, createdAt: new Date(), updatedAt: new Date() },
  
        
      
        //hospital
        { name: "駅から近い", tag_type: 5, createdAt: new Date(), updatedAt: new Date() },
        { name: "ペットホテル併設", tag_type: 5, createdAt: new Date(), updatedAt: new Date() },
        { name: "１階に入口あり", tag_type: 5, createdAt: new Date(), updatedAt: new Date() },
        { name: "入り口自動ドアあり", tag_type: 5, createdAt: new Date(), updatedAt: new Date() },
        { name: "駐車場あり", tag_type: 5, createdAt: new Date(), updatedAt: new Date() },
        { name: "夜間・休日診察可能", tag_type: 5, createdAt: new Date(), updatedAt: new Date() },
      ],
      {}
    );
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete("tags", null, {});
  },
};
