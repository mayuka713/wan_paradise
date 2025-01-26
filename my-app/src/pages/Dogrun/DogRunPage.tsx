import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import "./DogRunPage.css";
import DogrunImage from "../assets/images/Dogrun/dogrun.png";
import Header from "../Header";
import Footer from "../Footer";


interface Store {
  id: number;
  store_name: string;
  description: string;
  store_img: string[];
  address: string;
  phone_number: string;
  opening_hours: string;
  store_url: string;
  prefecture_name: string;
}

const DogRunPage: React.FC = () => {
  const navigate = useNavigate();
  const [stores, setStores] = useState<Store[]>([]);

  const handleClick = () => {
    navigate("/DogrunRegionsList");
  };

  useEffect(() => {
    // 店舗データを取得
    const fetchStoreData = async () => {
      try {
        const response = await fetch("http://localhost:5003/stores/type/random/1");
        const data = await response.json();

        // store_img を JSON パースし、配列でない場合は配列に変換
        const parsedData = data.map((store: any) => ({
          ...store,
          id: store.id || store.store_id,
          store_img: Array.isArray(store.store_img)
            ? store.store_img
            : JSON.parse(store.store_img),
        }));
        // リストを3倍に複製（スムーズな無限ループ用）
        setStores([...parsedData, ...parsedData, ...parsedData]);
      } catch (error) {
      }
    };
    fetchStoreData();
  }, []);

  useEffect(() => {
    stores.forEach((storeItem) => {
      console.log("取得した店舗情報:", storeItem);
    });
  }, [stores]);

  return (
    <>
      <Header />
      <div className="dogrun-page-container">
        <p onClick={handleClick} className="search-dogrun">
          全国のドッグランを探す
        </p>
        <div>
          <img src={DogrunImage} alt="ドッグランのイラスト" className="dogrun-image" />
        </div>
        <div className="top-store-list">
          {[...stores, ...stores, ...stores].map((store, index) => (
            <div
              key={`${store.id}-${index}`}
              className="store-card"
              onClick={() => {
                navigate(`/store/detail/${store.id}`);
              }}
            >
              {store.store_img.length > 0 && (
                <img
                  src={store.store_img[0]}
                  alt={store.store_name}
                  className="store-image"
                />
              )}
              <h3 className="slider-store-name">{store.store_name}</h3>
              <h3 className="slider-prefecture-name">{store.prefecture_name}</h3>
            </div>
          ))}
        </div>



      </div>
      <Footer />
    </>
  );
};

export default DogRunPage;
