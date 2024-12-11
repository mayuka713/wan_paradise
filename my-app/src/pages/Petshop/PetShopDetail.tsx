import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

interface Store {
  store_id: number;
  store_name: string;
  store_description: string;
  store_address: string;
  store_opening_hours: string; 
  store_phone_number: string;
  store_url: string;
  store_img: string;
  tags: string[]; // タグの配列として定義
}

const PetShopDetail: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const [store, setStore] = useState<Store | null>(null);

  // 店舗情報を取得
  useEffect(() => {
    const fetchStore = async () => {
      try {
        const response = await fetch(`http://localhost:5003/stores/detail/${id}`);
        if (!response.ok) {
          throw new Error(`サーバーエラー: ${response.status}`);
        }
        const data = await response.json();
        setStore(data);
      } catch (error) {
        console.error("店舗情報の取得に失敗しました:", error);
      }
    };
    fetchStore();
  }, [id]);

  // ローディング状態の表示
  if (!store) {
    return (
      <div style={{ padding: "20px", backgroundColor: "#FAF3E0", textAlign: "center" }}>
        <p>データを読み込んでいます..🐕</p>
      </div>
    );
  }

  // 店舗詳細情報の表示
  return (
    <div style={{ padding: "20px", backgroundColor: "#FAF3E0", textAlign: "center" }}>
      <h1 style={{ fontSize: "1rem" }}>{store.store_name}</h1>
      <img
        src={store.store_img}
        alt={store.store_name}
        style={{ width: "100%", borderRadius: "8px" }}
      />
      <p>{store.store_description}</p>
      <p>
        <strong>住所: </strong>
        {store.store_address}
      </p>
      {/* Google Map 埋め込み */}
      <div style={{ margin: "20px 0" }}>
        <iframe
          title="Google Map"
          width="100%"
          height="300"
          style={{ border: "0", borderRadius: "8px" }}
          src={`https://www.google.com/maps/embed/v1/place?key=AIzaSyBamO2vaf6PMNHy3bhMJd_2FO2I6IUgEpE&q=${encodeURIComponent(
            store.store_address
          )}`}
          allowFullScreen
        ></iframe>
      </div>
      <p>電話番号: {store.store_phone_number}</p>
      <p>営業時間: {store.store_opening_hours}</p>
      <a
        href={store.store_url}
        target="_blank"
        rel="noopener noreferrer"
        style={{
          display: "inline-block",
          marginTop: "10px",
          padding: "10px 20px",
          fontSize: "13px",
          color: "#00000",
          textDecoration: "none",
          borderRadius: "5px",
        }}
      >
        店舗の公式サイト
      </a>
    </div>
  );
};

export default PetShopDetail;
