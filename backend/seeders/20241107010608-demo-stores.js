'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert('stores', [
      {
        name: 'わんぱーく西野',
        description: '自然に囲まれた2000坪のドッグランで、大型犬でも楽しめます。',
        store_type: 1,
        prefecture_id: 1, // 北海道
        opening_hours: '9:30〜20:00',
        address: '北海道札幌市西区小別沢13',
        phone_number: '011-667-0418',
        store_url: 'http://wanpark.la.coocan.jp/',
        store_img: 'https://res.cloudinary.com/do4lxnof9/image/upload/v1732334804/wan_paradise/DogRun/morimori.jpg',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: 'バーナードスクエア',
        description: 'ドッグカフェに併設されたドッグランで、広々とした敷地が特徴です。',
        store_type: 1,
        prefecture_id: 1, // 北海道
        opening_hours: '12:00〜19:00',
        address: '北海道札幌市南区中ノ沢1-11-17',
        phone_number: '011-578-5576',
        store_url: 'http://www.bsq.jp/top.html',
        store_img: 'https://res.cloudinary.com/do4lxnof9/image/upload/v1732681727/wan_paradise/DogRun/Barnerd.dogrun-Hokkaido.png',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: 'ドッグラン＆カフェ プロムナード',
        description: '飼い主さんはもちろんワンちゃん用のメニューも充実しているドッグラン＆ドッグカフェです。',
        store_type: 1,
        prefecture_id: 1, // 北海道
        opening_hours: '11:00〜17:00',
        address: '北海道千歳市みどり台北1丁目8-1',
        phone_number: '0123-22-0086',
        store_url: 'https://c-promenade.com/',
        store_img: 'https://res.cloudinary.com/do4lxnof9/image/upload/v1732681763/wan_paradise/DogRun/Promnard.dogrun-Hokkaido.png',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: 'SUNNYSPOT',
        description: 'ドッグカフェに併設されたドッグランで、田園風景に囲まれたのどかな空間です。',
        store_type: 1,
        prefecture_id: 1, // 北海道
        opening_hours: '10月～4月 10:30 ～ 18:00、5月～9月 10:30 ～ 18:30',
        address: '北海道上川郡東川町西11号北24番地',
        phone_number: '0166-82-4004',
        store_url: 'https://sunnyspot.pupu.jp/',
        store_img: 'https://res.cloudinary.com/do4lxnof9/image/upload/v1732681766/wan_paradise/DogRun/Sunnyspot.dogrun-Hokkaido.png',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: 'つばさドッグラン',
        description: '海を眺めながら愛犬と遊ぶ。',
        store_type: 1,
        prefecture_id: 13, // 東京都
        opening_hours: '7:00 - 21:00',
        address: '東京都大田区城南島4-2-2',
        phone_number: '03-3799-6402',
        store_url: 'https://seaside-park.jp/park_jonan/tsubasadogrun/',
        store_img: 'https://res.cloudinary.com/do4lxnof9/image/upload/v1732453925/wan_paradise/DogRun/tsubasa.dogrun-tokyo.jpg',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: 'イーノの森 Dog Garden',
        description: '事前予約制のドッグラン。マナーレッスンを受講可能。',
        store_type: 1,
        prefecture_id: 13, // 東京都
        opening_hours: '土日祝:10:00 - 19:00 ',
        address: '東京都江東区夢の島3丁目2-1 東京夢の島マリーナ内',
        phone_number: '080-8358-0907',
        store_url: 'https://seaside-park.jp',
        store_img: 'https://res.cloudinary.com/do4lxnof9/image/upload/v1732456149/wan_paradise/DogRun/ino%27s-forest.dogrun-tokyo.png',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: '駒沢オリンピックドックラン',
        description: '緑の広がる景色が特徴',
        store_type: 1,
        prefecture_id: 13, // 東京都
        opening_hours: '常時開放',
        address: '東京都世田谷区駒沢公園1-1',
        phone_number: '03-3421-6431',
        store_url: 'https://www.tokyo-park.or.jp/park/komazawa-olympic/#park',
        store_img: 'https://res.cloudinary.com/do4lxnof9/image/upload/v1732495450/wan_paradise/DogRun/komawaza.dogrun-tokyo.png',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: '芝浦中央公園 ドッグラン',
        description: '小型犬・一般ゾーンに分かれているから遊ばせやすい',
        store_type: 1,
        prefecture_id: 13, // 東京都
        opening_hours: '10月～4月:7:00/5月～9月:6:00',
        address: '東京都港区港南1丁目2番28号',
        phone_number: '03-6433-2562',
        store_url: 'https://seaside-park.jp',
        store_img: 'https://res.cloudinary.com/do4lxnof9/image/upload/v1732494953/wan_paradise/DogRun/shibauradogrun-tokyo.jpg',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: '海の公園 ドッグラン',
        description: '横浜市で唯一の海水浴場を持つ海の公園内にあるドッグラン。登録不要で24時間利用可能です。',
        store_type: 1,
        prefecture_id: 14, // 神奈川県
        opening_hours: '24時間',
        address: '神奈川県横浜市金沢区海の公園10番',
        phone_number: '045-701-3450',
        store_url: 'https://www.hama-midorinokyokai.or.jp/park/uminokouen/',
        store_img: 'https://res.cloudinary.com/do4lxnof9/image/upload/v1732334765/wan_paradise/DogRun/uminokoen.jpg',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: 'WANCOTT（ワンコット）',
        description: '関東最大級の屋内ドッグラン。約600㎡あり、大型犬でも思いっきり楽しむことができます。',
        store_type: 1,
        prefecture_id: 14, // 神奈川県
        opening_hours: '10:00〜19:00',
        address: '神奈川県横浜市中区山下町168-1 レイトンハウス3F・4F（総合受付4F）',
        phone_number: '045-264-8231',
        store_url: 'https://wancott.com/',
        store_img: 'https://res.cloudinary.com/do4lxnof9/image/upload/v1732334782/wan_paradise/DogRun/wancott.jpg',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      // ドックカフェ
      {
        name: 'バーナード・スクエア',
        description: '超大型犬もゆったり過ごせる広々とした店内と、天然芝と人工芝を組み合わせたドッグランが特徴のカフェです。',
        store_type: 2,
        prefecture_id: 14, // 神奈川県
        opening_hours: '10:00〜19:00',
        address: '北海道札幌市南区中ノ1丁目11-17',
        phone_number: '011-578-5576',
        store_url: 'http://www.bsq.jp/top.html',
        store_img: 'https://res.cloudinary.com/do4lxnof9/image/upload/v1732795231/wan_paradise/DogRun/barnerd.dogcafe-Hokkaido.png',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ], {});
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete('stores', null, {});
  }
};
