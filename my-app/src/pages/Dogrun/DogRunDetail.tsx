import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";



interface Store {
  store_id: number;
  store_name: string;
  store_description: string;
  store_address: string;
  store_phone_number: string;
  store_url: string;
  store_img: string;
  tags: string[]; // タグの配列として定義
}

const DogRunDetail: React.FC = () => {
  const { id } = useParams<{ id: string}> ();
  const [store, setStore] = useState<Store | null>(null)

  useEffect(() => {
    const fetchStores = async () => {
      try {
        const response = await fetch (
          `http://localhost:5003/stores/detail/${id}`
        );
        if (!response.ok) {
          throw new Error(`サーバーエラー: ${response.status}`);
        }
        const data = await response.json();
        setStore(data);
      } catch (error) {
        console.error("店舗情報の取得に失敗しました:", error);
      }
    };
    fetchStores();
  }, [id]);

 




  // storeがnullの場合の処理
  if (!store) {
    return (
      <div style={{ padding: "20px", backgroundColor: "#FAF3E0", textAlign: "center" }}>
        <p>データを読み込んでいます..🐕</p>
      </div>
    );
  } 
  return (
    <div style={{ padding: "20px", backgroundColor: "#FAF3E0", textAlign: "center" }}>
      <h1>{store.store_name}</h1>
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
      <p>電話番号: {store.store_phone_number}</p>
      <a
        href={store.store_url}
        target="_blank"
        rel="noopener noreferrer"
        style={{
          display: "inline-block",
          marginTop: "10px",
          padding: "10px 20px",
          backgroundColor: "#007BFF",
          color: "#fff",
          textDecoration: "none",
          borderRadius: "5px",
        }}
      >
        店舗の公式サイト
      </a>
    </div>
  );
};

export default DogRunDetail;
