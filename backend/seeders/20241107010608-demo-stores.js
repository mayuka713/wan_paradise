'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert('stores', [
      //北海道 ドッグラン
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
      //北海道ドッグカフェここから
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

      //北海道ドッグカフェここまで ------------------

      //東京ドッグランここから
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
      //神奈川ドッグラン
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
      {
        name: '新横浜公園ドッグラン',
        description: '大型犬も大満足の横浜最大級の天然芝のドッグラン',
        store_type: 1,
        prefecture_id: 14, // 神奈川県
        opening_hours: '10:00〜19:00',
        address: '新横浜公園 横浜市港北区小机町3300 新横浜公園内 遊具広場隣（第3 レストハウス向）',
        phone_number: '045-476-2820',
        store_url: 'http://www.shinyoko-dogrun.com/',
        store_img: 'https://res.cloudinary.com/do4lxnof9/image/upload/v1733109800/wan_paradise/DogRun/shinyokohama.dogrun-kanagawa.png',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: 'アーセンプレイス',
        description: '横須賀市秋谷「子安の里」にある ドッグラン併設のガーデンカフェです。',
        store_type: 1,
        prefecture_id: 14, // 神奈川県
        opening_hours: '11:00〜16:00',
        address: '神奈川県横須賀市秋谷3741',
        phone_number: '046-856-9210',
        store_url: 'https://earthen-place.com/',
        store_img: 'https://res.cloudinary.com/do4lxnof9/image/upload/v1733109775/wan_paradise/DogRun/earthplace.dogrun-kanagawa.png',
        createdAt: new Date(),
        updatedAt: new Date(),
      },

      // 北海道ドックカフェ
      {
        name: 'バーナード・スクエア',
        description: '超大型犬もゆったり過ごせる広々とした店内と、天然芝と人工芝を組み合わせたドッグランが特徴のカフェです。',
        store_type: 2,
        prefecture_id: 1,
        opening_hours: '10:00〜19:00',
        address: '北海道札幌市南区中ノ1丁目11-17',
        phone_number: '011-578-5576',
        store_url: 'http://www.bsq.jp/top.html',
        store_img: 'https://res.cloudinary.com/do4lxnof9/image/upload/v1733123853/wan_paradise/DogCafe/barnerd.dogcafe-hokkaido.png',
        createdAt: new Date(),
        updatedAt: new Date(),
      },

      //北海道ペットショップ
      {
        name:'ペットランド中央店',
        description:'札幌を中心に北海道内で店舗を展開する 道内最大のペットショップ',
        store_type: 3,
        prefecture_id: 1,
        opening_hours: '9:30～19:00',
        address: '北海道札幌市中央区南11条西14丁目',
        phone_number: '011-532-5331',
        store_url: 'https://www.petland.co.jp/shop/chuo.html',
        store_img: 'https://res.cloudinary.com/do4lxnof9/image/upload/v1733273150/wan_paradise/PetShop/petland.png',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name:'ペットタウンテン・テン アリオ店',
        description:'何よりも「心」を大切にするそんなペットショップを目指して',
        store_type: 3,
        prefecture_id: 1,
        opening_hours: '10:00～21:00',
        address: '北海道札幌市東区北７条東９丁目２－２０',
        phone_number: '011-733-1212',
        store_url: 'https://www.petland.co.jp/shop/chuo.html',
        store_img: 'https://res.cloudinary.com/do4lxnof9/image/upload/v1733273150/wan_paradise/PetShop/petland.png',
        createdAt: new Date(),
        updatedAt: new Date(),

      },
      {
        name:'Pet Shop DOG dog',
        description:'DOG・dogでは、はじめて彼らを家族にお迎えする方。生涯を見送り、また新たな家族をお迎えする方。大切な家族として伴侶動物と暮らす方。そんなご家族、そして動物たちのパートナーとして、皆様の生活をサポート致します。',
        store_type: 3,
        prefecture_id: 1,
        opening_hours: '10:00～20:00',
        address: '北海道札幌市白石区東札幌4条1丁目1-1 ラソラ札幌Bタウン1F',
        phone_number: '011-867-0566',
        store_url: 'https://petshop-dogdog.com/',
        store_img: 'https://res.cloudinary.com/do4lxnof9/image/upload/v1733273150/wan_paradise/PetShop/petland.png',
        createdAt: new Date(),
        updatedAt: new Date(),

      },

      //北海道動物病院----------------------
      {
        name:'緑の森どうぶつ病院 さっぽろ病院',
        description:'犬専用フロア・ 猫専用フロアと分かれた、ストレスフリーな病院',
        store_type: 4,
        prefecture_id: 1,
        opening_hours: '9:00~20:00',
        phone_number: '050-5445-0843',
        store_url: 'https://midori-no-mori.jp/sapporo/?utm_source=google&utm_medium=map_meo&utm_campaign=web_sapporo',
        store_img: '',
        createdAt: new Date(),
        updatedAt: new Date(),

      },
      {
        name:'石山通り動物病院',
        description:'伴侶動物全般の診療を、各分野の専門医療を含め行っております。',
        store_type: 4,
        prefecture_id: 1,
        opening_hours: '【午前】 9:30-11:30 【午後】 15:30-18:00・休診日はありません（年末年始を除く）',
        address: '北海道札幌市中央区南17条西10丁目1-25',
        phone_number: '011-563-9976',
        store_url: 'https://ishiyamaah.com/',
        store_img: '',
        createdAt: new Date(),
        updatedAt: new Date(),

      },  
      {
        name:'石山通り動物病院',
        description:'札幌を中心に北海道内で店舗を展開する 道内最大のペットショップ',
        store_type: 4,
        prefecture_id: 1,
        opening_hours: '【午前】9:30-11:30【午後】15:30-18:00 休診日',
        address: '北海道札幌市中央区南11条西14丁目',
        phone_number: '011-532-5331',
        store_url: 'https://www.petland.co.jp/shop/chuo.html',
        store_img: 'https://res.cloudinary.com/do4lxnof9/image/upload/v1733273150/wan_paradise/PetShop/petland.png',
        createdAt: new Date(),
        updatedAt: new Date(),

      },
      {
        name:'あつき動物病院',
        description:'札幌を中心に北海道内で店舗を展開する 道内最大のペットショップ',
        store_type: 4,
        prefecture_id: 1,
        opening_hours: '【午前】 9:30-11:45 【午後】 16:00-18:45 休診日 火曜日、日曜午後、祝日',
        address: '札幌市東区北21条東10丁目2-8',
        phone_number: '011-299-7422',
        store_url: 'https://atsuki-ac.com/',
        store_img: 'https://res.cloudinary.com/do4lxnof9/image/upload/v1733273150/wan_paradise/PetShop/petland.png',
        createdAt: new Date(),
        updatedAt: new Date(),

      },
      {
        name:'札幌夜間動物病院',
        description:'北海道唯一の夜間専門動物病院',
        store_type: 4,
        prefecture_id: 1,
        opening_hours: '【平日】19:00 ～ 翌6:00 【日・祝】14:00 ～ 翌6:00 休診日 年中無休',
        address: '北海道札幌市西区二十四軒4条5丁目9-3の北海道獣医師会館1階',
        phone_number: '011-688-9960',
        store_url: 'https://sapporo1299.net/?utm_source=chatgpt.com',
        store_img: 'https://res.cloudinary.com/do4lxnof9/image/upload/v1733273150/wan_paradise/PetShop/petland.png',
        createdAt: new Date(),
        updatedAt: new Date(),

      },
      {
        name:'ペテモどうぶつ医療センター',
        description:'札幌を中心に北海道内で店舗を展開する 道内最大のペットショップ',
        store_type: 4,
        prefecture_id: 1,
        opening_hours: '9:30～19:00',
        address: '北海道札幌市中央区南11条西14丁目',
        phone_number: '011-532-5331',
        store_url: 'https://www.petland.co.jp/shop/chuo.html',
        store_img: 'https://res.cloudinary.com/do4lxnof9/image/upload/v1733273150/wan_paradise/PetShop/petland.png',
        createdAt: new Date(),
        updatedAt: new Date(),

      },
      {
        name:'アイリス動物医療センター',
        description:'札幌を中心に北海道内で店舗を展開する 道内最大のペットショップ',
        store_type: 4,
        prefecture_id: 1,
        opening_hours: '9:30～19:00',
        address: '北海道札幌市中央区南11条西14丁目',
        phone_number: '011-532-5331',
        store_url: 'https://www.petland.co.jp/shop/chuo.html',
        store_img: 'https://res.cloudinary.com/do4lxnof9/image/upload/v1733273150/wan_paradise/PetShop/petland.png',
        createdAt: new Date(),
        updatedAt: new Date(),

      },
      {
        name:'アニマルクリニックフロンティア',
        description:'札幌を中心に北海道内で店舗を展開する 道内最大のペットショップ',
        store_type: 4,
        prefecture_id: 1,
        opening_hours: '9:30～19:00',
        address: '北海道札幌市中央区南11条西14丁目',
        phone_number: '011-532-5331',
        store_url: 'https://www.petland.co.jp/shop/chuo.html',
        store_img: 'https://res.cloudinary.com/do4lxnof9/image/upload/v1733273150/wan_paradise/PetShop/petland.png',
        createdAt: new Date(),
        updatedAt: new Date(),

      },
      {
        name:'まつい犬猫病院',
        description:'札幌を中心に北海道内で店舗を展開する 道内最大のペットショップ',
        store_type: 4,
        prefecture_id: 1,
        opening_hours: '9:30～19:00',
        address: '北海道札幌市中央区南11条西14丁目',
        phone_number: '011-532-5331',
        store_url: 'https://www.petland.co.jp/shop/chuo.html',
        store_img: 'https://res.cloudinary.com/do4lxnof9/image/upload/v1733273150/wan_paradise/PetShop/petland.png',
        createdAt: new Date(),
        updatedAt: new Date(),

      },
      {
        name:'しょうた動物病院',
        description:'札幌を中心に北海道内で店舗を展開する 道内最大のペットショップ',
        store_type: 4,
        prefecture_id: 1,
        opening_hours: '9:30～19:00',
        address: '北海道札幌市中央区南11条西14丁目',
        phone_number: '011-532-5331',
        store_url: 'https://www.petland.co.jp/shop/chuo.html',
        store_img: 'https://res.cloudinary.com/do4lxnof9/image/upload/v1733273150/wan_paradise/PetShop/petland.png',
        createdAt: new Date(),
        updatedAt: new Date(),

      },
      //北海道 病院ここまで
      
    ], {});
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete('stores', null, {});
  }
}
