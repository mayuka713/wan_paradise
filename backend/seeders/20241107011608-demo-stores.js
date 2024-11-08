'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert('stores', [
      {
        name: 'つばさドッグラン',
        description: '海を眺めながら愛犬と遊ぶ。',
        store_tag_id: 1, // '自然芝生' タグのID
        store_type: '屋外',
        prefecture: '東京都',
        city: '大田区',
        opening_hours: '7:00 - 21:00',
        address: '東京都大田区城南島4-2-2',
        phone_number: '123-456-7890',
        store_url: 'https://seaside-park.jp',
        store_img: 'https://example.com/image.jpg',
        source: 'https://example.com/original-source',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'イーノの森 Dog Garden',
        description: '事前予約制のドッグラン。マナーレッスンを受講可能。',
        store_tag_id: 2, // '自然芝生' タグのID
        store_type: '屋外',
        prefecture: '東京都',
        city: '江東区',
        opening_hours: '土日祝:10:00 - 19:00 ',
        address: '東京都江東区夢の島3丁目2-1 東京夢の島マリーナ内',
        phone_number: '123-456-7890',
        store_url: 'https://seaside-park.jp',
        store_img: 'https://example.com/image.jpg',
        source: 'https://example.com/original-source',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: '駒沢オリンピック 公園ドッグラン',
        description: '緑の広がる景色が特徴',
        store_tag_id: 3, // '自然芝生' タグのID
        store_type: '屋外',
        prefecture: '東京都',
        city: '世田谷区',
        opening_hours: '常時開放',
        address: '東京都世田谷区駒沢公園1-1',
        phone_number: '123-456-7890',
        store_url: 'https://www.tokyo-park.or.jp/park/komazawa-olympic/#park',
        store_img: 'https://example.com/image.jpg',
        source: 'https://example.com/original-source',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: '芝浦中央公園 ドッグラン',
        description: '小型犬・一般ゾーンに分かれているから遊ばせやすい',
        store_tag_id: 4, // '自然芝生' タグのID
        store_type: '屋外',
        prefecture: '東京都',
        city: '港区',
        opening_hours: '10月～4月:7:00/5月～9月:6:00',
        address: '東京都港区港南1丁目2番28号',
        phone_number: '123-456-7890',
        store_url: 'https://seaside-park.jp',
        store_img: 'https://example.com/image.jpg',
        source: 'https://example.com/original-source',
        createdAt: new Date(),
        updatedAt: new Date()
      },
    ],
     {});
  },
  

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete('stores', null, {});
  }
};
