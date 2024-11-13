//都道府県ごとに分類したドッグラン情報を地域ごとに表示し、各都道府県名をクリックすることで該当のドッグランページに遷移できるようにする

import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

interface Prefecture {
  id: number;
  name: string;
  region: string; 
}

const DogrunRegionList: React.FC = () => {
  const navigate = useNavigate();
  const [prefectures, setPrefectures] = useState<Prefecture[]>([]);

  useEffect(() => {
    const fetchPrefectures = async () => {
      try {
        const response = await fetch('http://localhost:5003/prefectures/'); // エンドポイントを確認
        if (!response.ok) {
          throw new Error("Failed to fetch prefectures");
        }
        const data: Prefecture[] = await response.json();
        setPrefectures(data);
      } catch (error) {
        console.error("データの取得に失敗しました:", error);
      }
    };

    fetchPrefectures(); // ページが開かれた時にリクエストを実行
  }, []); // 空の配列を依存配列として指定

  const handleClick = (id: number) => {
    navigate(`/dogrun/${id}`);
  };

  // 地方ごとに都道府県を分類
  const regions = prefectures.reduce((acc: { [region: string]: Prefecture[] }, prefecture) => {
    if (!acc[prefecture.region]) {
      acc[prefecture.region] = [];
    }
    acc[prefecture.region].push(prefecture);
    return acc;
  }, {});

  return (
    <div>
      <h2>病院を探す</h2>
      <div>
        {Object.keys(regions).map((region) => (
          <div key={region}>
            <h3>{region}</h3>
            <p>
              {regions[region].map((pref) => (
                <span
                  key={pref.id}
                  onClick={() => handleClick(pref.id)} // idを渡す
                  style={{ cursor: 'pointer', color: pref.name === '東京' ? 'green' : 'black' }}
                >
                  {pref.name}・
                </span>
              ))}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default DogrunRegionList;
