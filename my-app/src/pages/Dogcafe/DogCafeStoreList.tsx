import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

interface Shop {
  id: number;
  name: string;
  description: string;
  address: string;
  phone_number: string;
  store_url: string;
  store_img: string;
}

const DogCafeStoreList: React.FC = () => {
  const {prefectureId} = useParams<{prefectureId: string}>(); 
  const [shop, setShops] = useState<Shop[]>([]); 

  useEffect(() => {
    const fetchShops = async () => {
      try {
        const response = await fetch(`http://localhost:5003/stores/list/${prefectureId}`);
        if (!response.ok) {
          throw new Error("Failed to fetch shops");
        }
        const data: Shop[] = await response.json();
        setShops(data);
      } catch (error) {
        console.error("ショップ情報の取得に失敗しました:", error);
      }
    };
    console.log(prefectureId);//
    fetchShops();

}, [prefectureId]);
return (
  <div>
    <h2>ドッグカフェショップ一覧</h2>
    {shop.length > 0 ? (
      shop.map((shop) => (
        <div key={shop.id} style={{ marginBottom: "20px" }}>
          <h3>{shop.name}</h3>
          <p>{shop.description}</p>
          <p>住所: {shop.address}</p>
          <p>電話番号: {shop.phone_number}</p>
          <a href={shop.store_url} target="_blank" rel="noopener noreferrer">
            ウェブサイト
          </a>
          <br />
          <img src={shop.store_img} alt={shop.name} style={{ width: "200px", height: "auto"}} />
        </div>
      ))
    ) : (
      <p>この都道府県にはショップがありません。</p>
    )}
  </div>
);
};

export default DogCafeStoreList;


