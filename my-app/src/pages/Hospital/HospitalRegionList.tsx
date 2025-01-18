import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import "./HospitalRegionList.css";
import Header from "../Header";
import Footer from "../Footer";


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
    navigate(`/hospital/${id}`);
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
    <>
    <Header/>
    <div className="region-list-container">
      <h2 className="region-list-title-hospital">全国の動物病院を探す</h2>
      <div className="region-list-content">
        {Object.keys(regions).map((region) => (
          <div key={region} className="region-section">
            <h3 className="region-title-hospital">{region}</h3>
            <div className="prefecture-list">
              {regions[region].map((pref) => (
                <button
                  key={pref.id}
                  onClick={() => handleClick(pref.id)}
                  className= "prefecture-button "
                >
                  {pref.name}
                </button>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
    <Footer/>
    </>
  );
};

export default DogrunRegionList;
