'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert('prefectures', [
      { name: '北海道', region: '北海道', createdAt: new Date(), updatedAt: new Date() },
      { name: '青森県', region: '東北', createdAt: new Date(), updatedAt: new Date() },
      { name: '岩手県', region: '東北', createdAt: new Date(), updatedAt: new Date() },
      { name: '宮城県', region: '東北', createdAt: new Date(), updatedAt: new Date() },
      { name: '秋田県', region: '東北', createdAt: new Date(), updatedAt: new Date() },
      { name: '山形県', region: '東北', createdAt: new Date(), updatedAt: new Date() },
      { name: '福島県', region: '東北', createdAt: new Date(), updatedAt: new Date() },
      { name: '茨城県', region: '関東', createdAt: new Date(), updatedAt: new Date() },
      { name: '栃木県', region: '関東', createdAt: new Date(), updatedAt: new Date() },
      { name: '群馬県', region: '関東', createdAt: new Date(), updatedAt: new Date() },
      { name: '埼玉県', region: '関東', createdAt: new Date(), updatedAt: new Date() },
      { name: '千葉県', region: '関東', createdAt: new Date(), updatedAt: new Date() },
      { name: '東京都', region: '関東', createdAt: new Date(), updatedAt: new Date() },
      { name: '神奈川県', region: '関東', createdAt: new Date(), updatedAt: new Date() },
      { name: '新潟県', region: '中部', createdAt: new Date(), updatedAt: new Date() },
      { name: '富山県', region: '中部', createdAt: new Date(), updatedAt: new Date() },
      { name: '石川県', region: '中部', createdAt: new Date(), updatedAt: new Date() },
      { name: '福井県', region: '中部', createdAt: new Date(), updatedAt: new Date() },
      { name: '山梨県', region: '中部', createdAt: new Date(), updatedAt: new Date() },
      { name: '長野県', region: '中部', createdAt: new Date(), updatedAt: new Date() },
      { name: '岐阜県', region: '中部', createdAt: new Date(), updatedAt: new Date() },
      { name: '静岡県', region: '中部', createdAt: new Date(), updatedAt: new Date() },
      { name: '愛知県', region: '中部', createdAt: new Date(), updatedAt: new Date() },
      { name: '三重県', region: '近畿', createdAt: new Date(), updatedAt: new Date() },
      { name: '滋賀県', region: '近畿', createdAt: new Date(), updatedAt: new Date() },
      { name: '京都府', region: '近畿', createdAt: new Date(), updatedAt: new Date() },
      { name: '大阪府', region: '近畿', createdAt: new Date(), updatedAt: new Date() },
      { name: '兵庫県', region: '近畿', createdAt: new Date(), updatedAt: new Date() },
      { name: '奈良県', region: '近畿', createdAt: new Date(), updatedAt: new Date() },
      { name: '和歌山県', region: '近畿', createdAt: new Date(), updatedAt: new Date() },
      { name: '鳥取県', region: '中国', createdAt: new Date(), updatedAt: new Date() },
      { name: '島根県', region: '中国', createdAt: new Date(), updatedAt: new Date() },
      { name: '岡山県', region: '中国', createdAt: new Date(), updatedAt: new Date() },
      { name: '広島県', region: '中国', createdAt: new Date(), updatedAt: new Date() },
      { name: '山口県', region: '中国', createdAt: new Date(), updatedAt: new Date() },
      { name: '徳島県', region: '四国', createdAt: new Date(), updatedAt: new Date() },
      { name: '香川県', region: '四国', createdAt: new Date(), updatedAt: new Date() },
      { name: '愛媛県', region: '四国', createdAt: new Date(), updatedAt: new Date() },
      { name: '高知県', region: '四国', createdAt: new Date(), updatedAt: new Date() },
      { name: '福岡県', region: '九州', createdAt: new Date(), updatedAt: new Date() },
      { name: '佐賀県', region: '九州', createdAt: new Date(), updatedAt: new Date() },
      { name: '長崎県', region: '九州', createdAt: new Date(), updatedAt: new Date() },
      { name: '熊本県', region: '九州', createdAt: new Date(), updatedAt: new Date() },
      { name: '大分県', region: '九州', createdAt: new Date(), updatedAt: new Date() },
      { name: '宮崎県', region: '九州', createdAt: new Date(), updatedAt: new Date() },
      { name: '鹿児島県', region: '九州', createdAt: new Date(), updatedAt: new Date() },
      { name: '那覇', region: '沖縄', createdAt: new Date(), updatedAt: new Date() },
    ]);
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete('prefectures', null, {});
  }
};
