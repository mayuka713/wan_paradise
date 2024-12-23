import React, { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";

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
  reviews?: Review[];
}

interface Review {
  id: number;
  store_id: number;
  rating: number;
  comment: string;
}

const DogRunDetail: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const [store, setStore] = useState<Store | null>(null);
  const [error, setError] = useState<string | null>(null);
  const [isFavorite, setIsFavorite] = useState<boolean>(false);
  const userId = 1;

  //MAP
  const MAP_API_KEY = "AIzaSyBamO2vaf6PMNHy3bhMJd_2FO2I6IUgEpE";

  useEffect(() => {
    const fetchStoreAndFavorite = async () => {
      try {
        //店舗データ取得
        const storeResponse = await fetch(`http://localhost:5003/stores/detail/${id}`);
        if (!storeResponse.ok) throw new Error("店舗情報の取得に失敗しました");

        const storeData: Store = await storeResponse.json();
        setStore(storeData);

        //お気に入り状態を取得
        const favoriteResponse = await fetch(`http://localhost:5003/favorites/${userId}`);

        const favoriteData: { store_id: number }[] = await favoriteResponse.json();
        setIsFavorite(favoriteData.some((fav) => fav.store_id === storeData.store_id));
      } catch (err: any) {
        console.error(err.message);
        setError("データの取得に失敗しました");
      }
    };
    fetchStoreAndFavorite();
  }, [id]);

  // お気に入りの追加・解除
  const handleFavoriteClick = async () => {
    try {
      const response = await fetch("http://localhost:5003/favorites", {
        method: isFavorite ? "DELETE" : "POST",
        headers: {
          "Content-Type": "application/json",// 送るデータがJSON形式だと伝える
        },
        body: JSON.stringify({
          user_id: userId, // userIdを使用
          store_id: store?.store_id, // 動的に現在のstore_idを使用
        }),
      })
        .then((response) => response.json())
        .then((data) => console.log("お気に入りデータ:", data))
        .catch((error) => console.error("エラー:", error));

      setIsFavorite(!isFavorite); // お気に入り状態をトグル
    } catch (error) {
      console.log(userId);
      console.log(store);
      console.error("お気に入り更新エラー:", error);
      setError("お気に入りの更新に失敗しました");
    }
  };


  useEffect(() => {
    const fetchStores = async () => {
      try {
        const response = await fetch(
          `http://localhost:5003/stores/detail/${id}`
        );
        if (!response.ok) {
          throw new Error(`サーバーエラー: ${response.status}`);
        }
        const data = await response.json();
        console.log(data);

        setStore(data);
      } catch (error) {
        console.error("店舗情報の取得に失敗しました:", error);
      }
    };
    fetchStores();
  }, [id]);

  // 店舗データとレビューを取得して設定する関数

  useEffect(() => {
    const fetchStoreWithReviews = async () => {
      try {
        const storeResponse = await fetch(`http://localhost:5003/stores/detail/${id}`);
        const reviewResponse = await fetch(`http://localhost:5003/reviews`);

        if (!storeResponse.ok || !reviewResponse.ok) {
          throw new Error("データ取得に失敗しました");
        }

        const storeData: Store = await storeResponse.json();
        const reviewData: Review[] = await reviewResponse.json();

        // 店舗に関連付けられた口コミを結び付ける
        const reviews = reviewData.filter((review) => review.store_id === storeData.store_id);
        setStore({ ...storeData, reviews });
      } catch (err: any) {
        console.error("データ取得中にエラーが発生しました:", err);
        setError("店舗情報の取得に失敗しました");
      }
    };

    fetchStoreWithReviews();
  }, [id]);

  if (error) {
    return (
      <div style={{ padding: "20px", backgroundColor: "#FAF3E0", textAlign: "center" }}>
        <p>{error}</p>
      </div>
    );
  }

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
      <h1 style={{ fontSize: '1rem' }}>{store.store_name}</h1>
      <img
        src={store.store_img}
        alt={store.store_name}
        style={{ width: "100%", borderRadius: "8px" }}
      />
      {/* お気に入りボタン */}
      <button
        onClick={handleFavoriteClick}
        style={{
          margin: "10px",
          padding: "10px 20px",
          backgroundColor: isFavorite ? "#f66" : "#ccc",
          color: "#fff",
          border: "none",
          borderRadius: "5px",
          cursor: "pointer",
        }}
      >
        {isFavorite ? "お気に入り" : "お気に入り解除"}
      </button>

      {/* 平均評価を星で表示 */}
      {store.reviews && store.reviews.length > 0 ? (
        <div style={{ margin: "20px 0" }}>
          <div style={{ fontSize: "24px", color: "gray" }}>
            {[1, 2, 3, 4, 5].map((value) => (
              <span
                key={value}
                className={`star ${value <=
                    Math.round(
                      (store.reviews?.reduce((sum, rev) => sum + rev.rating, 0) ?? 0) /
                      (store.reviews?.length || 1) // ゼロ除算を防ぐ
                    )
                    ? "selected"
                    : ""
                  }`}
              >
                ★
              </span>
            ))}
          </div>
          <p style={{ fontSize: "14px", fontWeight: "bold" }}>
            {(
              (store.reviews?.reduce((sum, rev) => sum + rev.rating, 0) ?? 0) /
              (store.reviews?.length || 1) // ゼロ除算を防ぐ
            ).toFixed(1)}{" "}
          </p>
        </div>
      ) : (
        <p style={{ marginTop: "20px" }}>まだ口コミはありません</p>
      )}



      {/* 店舗情報 */}
      <p>
        <strong>住所: </strong>
        {store.store_address}
      </p>
      {/*/Google map 埋め込み*/}
      <div style={{ margin: "20px 0" }}>
        <iframe
          title="Google Map"
          width="100%"
          height="300"
          style={{ border: "0", borderRadius: "8px" }}
          src={`https://www.google.com/maps/embed/v1/place?key=${MAP_API_KEY}&q=${encodeURIComponent(
            store.store_address
          )}`}
          allowFullScreen
        ></iframe>
      </div>
      <p>電話番号: {store.store_phone_number}</p>
      <p>営業時間: {store.store_opening_hours}</p>
      {store.reviews && store.reviews.length > 0 ? (
        store.reviews.map((review) => (
          <div key={review.id}></div>
        ))
      ) : (
        <p>まだ口コミはありません</p>
      )}
      {/*口コミ一覧ページへのリンクを追加*/}
      {store.reviews && store.reviews.length > 0 && (
        <Link
          to={`/dogrun/reviews/${store.store_id}`}
          style={{
            display: "inline-block",
            marginTop: "10px",
            padding: "10px 20px",
            fontSize: "13px",
            color: "#000000",
            textDecoration: "none",
            borderRadius: "5px",
            backgroundColor: "#ccc",

          }}
        >
          口コミを見る
        </Link>
      )}
      <br /><br />
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

export default DogRunDetail;