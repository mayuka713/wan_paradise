import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

interface Prefecture {
  id: number;
  name: string;
  region: string;
}

const DogCafeRegionList: React.FC = () => {
  const navigate = useNavigate();
  const [prefecture, setPrefectures] = useState<Prefecture[]>([]);

  useEffect(() => {
    const fetchPrefectures = async () => {
      try {
        const response = await fetch('http://localhost:5003/prefectures/'); // エンドポイントを確認
        if (!response.ok) {
          throw new Error("Failed to fetch prefectures");
        }
        const data: Prefecture[] = await response.json()
        setPrefectures(data);
      } catch (error) {
        console.error("データの取得に失敗しました:", error);
      }
    };

    fetchPrefectures();
  }, []);


  const handleClick = (id: number) => {
    navigate(`/petshop/${id}`);
  };

  // 地方ごとに都道府県を分類
  const regions = prefecture.reduce((acc: { [region: string]: Prefecture[] }, pref) => {
    if (!acc[pref.region]) {
      acc[pref.region] = [];
    }
    acc[pref.region].push(pref);
    return acc;
  }, {});

  return (
    <div>
      <h2>全国のペットショップを探す</h2>
      <div>
        {Object.keys(regions).length > 0 ? (
          Object.keys(regions).map((region) => (
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
          ))
        ) : (
          <p>データを読み込んでいます...</p>
        )}
      </div>
    </div>
  );
};

export default DogCafeRegionList;
