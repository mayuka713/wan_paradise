'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert('reviews', [
      {
        store_id: 1,
        rating: 4.3,
        comment: 'よく利用させていただいてます。時間帯によっては様々なわんちゃんがいて、私もうちの子も楽しめます。オーナーも感じがよく、わんちゃんへの対応にも慣れていて頼もしいです。',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        store_id: 2,
        rating: 4.4,
        comment: 'ドッグランは人工芝と自然芝、ウッドデッキがあり綺麗に整備されてました！施設も綺麗で居心地よかったです！',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        store_id: 3,
        rating: 4.2,
        comment: '芝生も手入れされてて綺麗でした。料理も美味しかったです。',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        store_id: 4,
        rating: 4.1,
        comment: '初めて愛犬を連れて行きましたが、たくさんワンコがいて、とても楽しめました。',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        store_id: 5,
        rating: 3.8,
        comment: 'エリアは１つですので、犬種を確認しながら利用することが必要かもしれません。',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        store_id: 6,
        rating: 4.2,
        comment: '犬連れで遊びに行きました。馬と触れ合える大きな公園です。犬連れは厩舎は入れないところが多いですが、こちらは犬連れでもOK!。',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        store_id: 7,
        rating: 4.2,
        comment: '無料なのに広くて散水もあり設備が充実してるので札幌から遠征してます。',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        store_id: 8,
        rating: 3.6,
        comment: '広いドッグランでした！小型犬エリアが小さかったですが、他に誰もいなかったので広い大型犬エリアで思いっきり走り回りました。',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ]);
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete('reviews', null, {});
  },
};
