'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.addColumn('DogCafes','prefecture_id', {
      Sequelize: INTEGER, // データ型を指定
      allowNull: false, // 必須フィールドの場合はfalse
      defaultValue: 1, // 必要に応じてデフォルト値を設定
      name: 'バーナード・スクエア',
      prefecture_id: 1,
      description: '超大型犬もゆったり過ごせる広々とした店内と、天然芝と人工芝を組み合わせたドッグランが特徴のカフェです。',
      address: '北海道札幌市南区中ノ1丁目11-17',
      phone_number:'011-578-5576',
      store_url:'http://www.bsq.jp/top.html',
      store_img: 'https://res.cloudinary.com/do4lxnof9/image/upload/v1732795231/wan_paradise/DogRun/barnerd.dogcafe-Hokkaido.png',
      reference: '引用元 http://www.bsq.jp/top.html',
      createAt: new Date(),
      updatedAt: new Date(),
      });
    },

  async down (queryInterface, Sequelize) {
    await queryInterface.removeColumn('DogCafes', 'prefecture_id');
  },
};
