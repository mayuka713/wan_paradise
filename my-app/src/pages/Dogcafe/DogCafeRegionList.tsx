import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";


interface Prefecture {
  id: number;
  name: string;
  region: string;
}

const DogCafeRegionList: React.FC = () => {
  const navigate = useNavigate();
  const [prefectures, setPrefectures] = useState<Prefecture[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchPrefectures = async () => {
      try {
        const response = await fetch("http://localhost:5003/prefectures");
        if (!response.ok) {
          throw new Error("Failed to fetch prefectures");
        }
        const data: Prefecture[] = await response.json();
        setPrefectures(data);
      } catch (error) {
        console.error("データの取得に失敗しました:", error);
      }
    };

    fetchPrefectures();
  }, []);

  const handleClick = (id: number) => {
    navigate(`/dogcafe/${id}`);
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
      <h2>DogCafeを探す</h2>
      <div>
        {Object.keys(regions).map((region) => (
          <div key={region}>
            <h3>{region}</h3>
            <p>
              {regions[region].map((pref) => (
                <span
                  key={pref.id}
                  onClick={() => handleClick(pref.id)}
                  style={{
                    cursor: 'pointer',
                    color: pref.name === '東京' ? 'green' : 'black',
                    marginRight: '10px',
                  }}
                >
                  {pref.name}
                </span>
              ))}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default DogCafeRegionList;