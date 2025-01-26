import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import "./PetShopPage.css";
import PetshopImage from "../assets/images/Petshop/petshop.png";
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

const PetshopPage: React.FC = () => {
  const navigate = useNavigate();
  const [stores, setStores] = useState<Store[]>([]);


  const handleClick = () => {
    navigate('/PetshopRegionsList');
  };

  useEffect(() => {
    const fetchStoreData = async () => {
      try {
        const response = await fetch("http://localhost:5003/stores/type/random/3");
        const data = await response.json();

        const parsedData = data.map((store: any) => ({
          ...store,
          id: store.id || store.store_id,
          store_img: Array.isArray(store.store_img)
            ? store.store_img
            : JSON.parse(store.store_img),
        }));
        setStores(parsedData);
      } catch (error) {
      }
    };
    fetchStoreData();
  }, []);

  return (
    <>
      <Header />
      <div className="petshop-page-container">
        <p onClick={handleClick} className="search-petshop">
          全国のペットショップを探す
        </p>
        <div>
          <img src={PetshopImage} alt="ペットショップのイラスト" className="petshop-image" />
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

export default PetshopPage;