import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import "./DogCafePage.css";
import Header from "../Header";
import Footer from "../Footer";
import HamburgerMenu from "../../HamburgerMenu";

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

const DogCafePage: React.FC = () => {
  const navigate = useNavigate();
  const [stores, setStores] = useState<Store[]>([]);

  const handleClick = () => {
    navigate("/DogCafeRegionList");
  };

  useEffect(() => {
    const fetchStoreData = async () => {
      try {
        const response = await fetch("http://localhost:5003/stores/type/random/2");
        if (!response.ok) throw new Error("Failed to fetch store data");

        const data = await response.json();

        const parsedData = data.map((store: any) => ({
          ...store,
          id: store.id || store.store_id,
          store_img: Array.isArray(store.store_img)
            ? store.store_img
            : JSON.parse(store.store_img),
        }));

        // 重複なしでデータをセット
        setStores(parsedData);
      } catch (error) {
        console.error("Error fetching store data:", error);
      }
    };

    fetchStoreData(); // 初回レンダリング時のみ実行
  }, []);

  return (
    <>
      <HamburgerMenu />
      <Header />
      <div className="dogrun-page-container">
        <p onClick={handleClick} className="search-dogcafe">
          全国のドッグカフェを探す
        </p>
        <div>
          <img
            src="https://res.cloudinary.com/do4lxnof9/image/upload/v1733201770/wan_paradise/DogCafe/dogcafe.img.png"
            alt="ドッグカフェのイラスト"
            className="dogcafe-image"
          />
        </div>
        <div className="top-store-list">
          {stores.map((store, index) => (
            <div
              key={`${store.id}-${index}`}
              className="store-card"
              onClick={() => navigate(`/store/detail/${store.id}`)}
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

export default DogCafePage;
