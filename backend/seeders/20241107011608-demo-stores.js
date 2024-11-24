'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert('stores', [     
        {
          name: 'わんぱーく西野',
          description: '自然に囲まれた2000坪のドッグランで、大型犬でも楽しめます。',
          prefecture_id: 1, // 北海道
          city: '札幌市西区',
          opening_hours: '9:30〜20:00',
          address: '北海道札幌市西区小別沢13',
          phone_number: '011-667-0418',
          store_url: '',
          store_img: 'https://res.cloudinary.com/do4lxnof9/image/upload/v1732334804/wan_paradise/DogRun/morimori.jpg',
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: 'バーナードスクエア',
          description: 'ドッグカフェに併設されたドッグランで、広々とした敷地が特徴です。',
          prefecture_id: 1, // 北海道
          city: '札幌市南区',
          opening_hours: '12:00〜19:00',
          address: '北海道札幌市南区中ノ沢1-11-17',
          phone_number: '011-578-5576',
          store_url: '',
          store_img: '/images/Dogrun/bernard-square.png',
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: 'ドッグラン＆カフェ プロムナード',
          description: '飼い主さんはもちろんワンちゃん用のメニューも充実しているドッグラン＆ドッグカフェです。',
          prefecture_id: 1, // 北海道
          city: '千歳市',
          opening_hours: '11:00〜17:00',
          address: '北海道千歳市みどり台北1丁目8-1',
          phone_number: '0123-22-0086',
          store_url: '',
          store_img: '/images/Dogrun/promenade.png',
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: 'SUNNYSPOT',
          description: 'ドッグカフェに併設されたドッグランで、田園風景に囲まれたのどかな空間です。',
          prefecture_id: 1, // 北海道
          city: '上川郡東川町',
          opening_hours: '10月～4月 10:30 ～ 18:00、5月～9月 10:30 ～ 18:30',
          address: '北海道上川郡東川町西11号北24番地',
          phone_number: '0166-82-4004',
          store_url: '',
          store_img: '/images/Dogrun/sunnyspot.png',
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      {  
        store_img: '/images/Dogrun/dogrun-tsubasa.png',
        name: 'つばさドッグラン',
        description: '海を眺めながら愛犬と遊ぶ。',
        prefecture_id: 13, // 東京都のID
        city: '大田区',
        opening_hours: '7:00 - 21:00',
        address: '東京都大田区城南島4-2-2',
        phone_number: '03-3799-6402',
        store_url: 'https://seaside-park.jp/park_jonan/tsubasadogrun/',
        createdAt: new Date(),
        updatedAt: new Date(),
        },

      {
        name: 'イーノの森 Dog Garden',
        description: '事前予約制のドッグラン。マナーレッスンを受講可能。',
        prefecture_id: 13, // 東京都のID
        city: '江東区',
        opening_hours: '土日祝:10:00 - 19:00 ',
        address: '東京都江東区夢の島3丁目2-1 東京夢の島マリーナ内',
        phone_number: '080-8358-0907',
        store_url: 'https://seaside-park.jp',
        store_img: 'https://res.cloudinary.com/do4lxnof9/image/upload/v1732334691/wan_paradise/DogRun/inos-forest.png',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: '駒沢オリンピックドックラン',
        description: '緑の広がる景色が特徴',
        prefecture_id: 13, // 東京都のID
        city: '世田谷区',
        opening_hours: '常時開放',
        address: '東京都世田谷区駒沢公園1-1',
        phone_number: '03-3421-6431',
        store_url: 'https://www.tokyo-park.or.jp/park/komazawa-olympic/#park',
        store_img: 'https://res.cloudinary.com/do4lxnof9/image/upload/v1732334716/wan_paradise/DogRun/komazawa.png',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: '芝浦中央公園 ドッグラン',
        description: '小型犬・一般ゾーンに分かれているから遊ばせやすい',
        prefecture_id: 13, // 東京都のID
        city: '港区',
        opening_hours: '10月～4月:7:00/5月～9月:6:00',
        address: '東京都港区港南1丁目2番28号',
        phone_number: '03-6433-2562',
        store_url: 'https://seaside-park.jp',
        store_img: 'https://res.cloudinary.com/do4lxnof9/image/upload/v1732334741/wan_paradise/DogRun/shibaurapark.png',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: "海の公園 ドッグラン",
        description: "横浜市で唯一の海水浴場を持つ海の公園内にあるドッグラン。登録不要で24時間利用可能です。",
        prefecture_id: 14,
        city: "横浜市金沢区",
        opening_hours: "24時間",
        address: "神奈川県横浜市金沢区海の公園10番",
        phone_number: "045-701-3450",
        store_url: "https://www.hama-midorinokyokai.or.jp/park/uminokouen/",
        store_img: "https://res.cloudinary.com/do4lxnof9/image/upload/v1732334765/wan_paradise/DogRun/uminokoen.jpg",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: "WANCOTT（ワンコット）",
        description: "関東最大級の屋内ドッグラン。約600㎡あり、大型犬でも思いっきり楽しむことができます。",
        prefecture_id: 14,
        city: "横浜市中区",
        opening_hours: "10:00〜19:00",
        address: "神奈川県横浜市中区山下町168-1 レイトンハウス3F・4F（総合受付4F）",
        phone_number: "045-264-8231",
        store_url: "https://wancott.com/",
        store_img: "https://res.cloudinary.com/do4lxnof9/image/upload/v1732334782/wan_paradise/DogRun/wancott.jpg",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      
    ], {});
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete('stores', null, {});
  }
};
