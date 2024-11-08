import React, { useEffect, useState } from "react";

// データの型を定義
type Store = {
  name: string;
  description: string;
  address: string;
};

const StoresList: React.FC = () => {

  const [stores, setStores] = useState<Store[]>([]);   // APIから取得したデータを保存するためのステート
  useEffect(() => {
    // APIを呼び出してデータを取得
    fetch("http://localhost:5003/stores")
      .then((response) => response.json()) // JSON形式でレスポンスを取得
      .then((data: Store[]) => { // データの型を明示的に指定
        setStores(data); // 取得したデータをステートに保存
      })
      .catch((error) => {
        console.error("エラーが発生しました", error); // エラーハンドリング
      });
  }, []);

  return (
    <div>
      <h1>ドッグラン一覧</h1>
      <ul>
        {stores.map((store, index) => (
          <li key={index}>
            <h2>{store.name}</h2>
            <p>{store.description}</p>
            <p>{store.address}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default StoresList;

