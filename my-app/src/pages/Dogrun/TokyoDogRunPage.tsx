import { DESTRUCTION } from "dns";
import { describe } from "node:test";
import React from "react";
import tsubasaDogrunImage from "../assets/images/Dogrun/tsubasadogrun.jpg";
import inoforestImage from "../assets/images/Dogrun/inoforest.png";
const dogruns = [
  {
    name: "つばさドッグラン",
    description: "海を眺めながら愛犬と遊ぶ。しつけ教室も開催",
    openTime: "7:00",
    closingTime: "21:00",
    fee: "無料",
    holiday: "無休",
    access: "JR大森駅東口より京急バス（城南島循環）で「城南島四丁目停留所」下車徒歩3分",
    address: "東京都大田区城南島4-2-2",
    location: "屋外",
    parking: "あり",
    source: "https://seaside-park.jp",
    image: tsubasaDogrunImage,
  },
  {
    name: "イーノの森 Dog Garden",
    description: "事前予約制のドッグラン。マナーレッスンを受講可能",
    openTime: "10'00",
    closingTime: "17:00",
    fee: "会員: 900円（税込）ビジター:1,400円(税込)~",
    holiday: "不明",
    access: "JR京葉線・りんかい線・東京メトロ有楽町線「新木場」駅より徒歩15分",
    address: "東京都江東区夢の島3丁目2-1 東京夢の島マリーナ内",
    location: "屋外",
    parking: "あり",
    source: "https://seaside-park.jp",
    image: inoforestImage,
  },
  {
    name: "駒沢オリンピック公園ドッグラン",
    description: "緑の広がる景色が特徴。体重別のドッグランを利用可能",
    openTime: "不明",
    closingTime: "不明",
    fee: "無料",
    holiday: "なし",
    access: "東急田園都市線「駒沢大学駅」下車 徒歩15分",
    address: "東京都世田谷区駒沢公園1-1",
    location: "屋外",
    parking: "あり",
    source: "https://www.tokyo-park.or.jp/park/komazawa-olympic/#park",
    image: inoforestImage,
  },

];

const TokyoDogRunPage: React.FC = () => {
  return (
    <div>
      <h1>東京のドッグラン一覧</h1>
      <div>
        <p>東京にあるおすすめドッグランの情報をご紹介してます</p>

        {dogruns.map((dogrun, index) => (
          <div key={index} className="dogrun-info">
            <h2>{dogrun.name}</h2>
            <img src={dogrun.image} alt={dogrun.name} style={{ width: "100%", height: "auto" }} />
            <p>{dogrun.description}</p>
            <p><strong>開店時間：</strong>{dogrun.openTime}<strong>閉店時間：</strong>{dogrun.closingTime}</p>
            <p><strong>料金目安:</strong> {dogrun.fee}</p>
            <p><strong>定休日:</strong> {dogrun.holiday}</p>
            <p><strong>アクセス:</strong> {dogrun.access}</p>
            <p><strong>所在地:</strong> {dogrun.address}</p>
            <p><strong>駐車場:</strong> {dogrun.parking}</p>
            <p><strong>ドッグラン場所:</strong> {dogrun.location}</p>
            <p>
              <a href={dogrun.source} target="_blank" rel="noopener noreferrer">出典元: 公式サイト</a>
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};
export default TokyoDogRunPage;