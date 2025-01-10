import React, { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import Header from "../Header";
import Footer from "../Footer";
import ImageSlider from "../../ImageSlider";

interface Store {
  store_id: number;
  store_name: string;
  store_description: string;
  store_address: string;
  store_opening_hours: string;
  store_phone_number: string;
  store_url: string;
  store_img: string[];
  tags: string[];
  reviews?: Review[] | null;
}

interface Review {
  id: number;
  store_id: number;
  rating: number;
  comment: string;
}

const HospitalDetail: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const [store, setStore] = useState<Store | null>(null);
  const [error, setError] = useState<string | null>(null);
  const [isFavorite, setIsFavorite] = useState<boolean>(false);
  const [userId, setUserId] = useState<number | null>(null);

  const MAP_API_KEY = process.env.REACT_APP_MAP_API_KEY;

  useEffect(() => {
    const fetchStoreData = async () => {
      try {
        const storeResponse = await fetch(`http://localhost:5003/stores/detail/${id}`);
        if (!storeResponse.ok) throw new Error("店舗情報の取得に失敗しました");

        const storeData: Store = await storeResponse.json();

        const reviewResponse = await fetch(`http://localhost:5003/reviews`);
        if (!reviewResponse.ok) throw new Error("口コミの取得に失敗しました");

        const reviewData: Review[] = await reviewResponse.json();
        storeData.reviews = reviewData.filter((review) => review.store_id === storeData.store_id);
        setStore(storeData);
      } catch (error) {
        console.error("データ取得エラー:", error);
        setError("データの取得に失敗しました");
      }
    };

    fetchStoreData();
  }, [id]);

  useEffect(() => {
    if (!userId || !store) return;

    const fetchFavoriteStatus = async () => {
      try {
        const response = await fetch(`http://localhost:5003/favorites/${userId}`);
        if (!response.ok) throw new Error("お気に入り情報の取得に失敗しました");

        const favoriteData: { store_id: number }[] = await response.json();
        setIsFavorite(favoriteData.some((fav) => fav.store_id === store.store_id));
      } catch (error) {
        console.error("お気に入り情報の取得エラー:", error);
        setError("お気に入り情報の取得に失敗しました");
      }
    };

    fetchFavoriteStatus();
  }, [userId, store]);

  const handleFavoriteClick = async () => {
    if (!userId || !store) return;

    try {
      const response = await fetch("http://localhost:5003/favorites", {
        method: isFavorite ? "DELETE" : "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ user_id: userId, store_id: store.store_id }),
      });

      if (!response.ok) {
        const errorMessage = await response.text();
        throw new Error(`お気に入りの更新に失敗しました: ${errorMessage}`);
      }

      setIsFavorite(!isFavorite);
    } catch (error) {
      console.error("お気に入り更新エラー:", error);
      setError("お気に入りの更新に失敗しました");
    }
  };

  if (error) return <div className="container">{error}</div>;
  if (!store) return <div className="container">データを読み込んでいます...</div>;

  return (
    <>
      <Header />
      <div className="container">
        <h1 className="detail-title">{store.store_name}</h1>
        {store.store_img.length > 0 ? <ImageSlider images={store.store_img} /> : <p>画像がありません</p>}
        <button onClick={handleFavoriteClick} className={`favorite-button${isFavorite ? " active" : ""}`}>
          {isFavorite ? "お気に入り解除" : "お気に入り"}
        </button>
            {/* 平均評価を星で表示 */}
        <div style={{ margin: "20px 0" }}>
          {store.reviews && store.reviews.length > 0 ? (
            <p>
              平均評価: {(store.reviews.reduce((sum, rev) => sum + rev.rating, 0) / store.reviews.length).toFixed(1)}
            </p>
          ) : (
            <p>まだ口コミはありません</p>
          )}
        </div>
        <p><strong>住所:</strong> {store.store_address}</p>
        <div style={{ margin: "20px 0" }}>
          {MAP_API_KEY ? (
            <iframe
              title="Google Map"
              width="100%"
              height="300"
              style={{ border: "0", borderRadius: "8px" }}
              src={`https://www.google.com/maps/embed/v1/place?key=${MAP_API_KEY}&q=${encodeURIComponent(store.store_address)}`}
              allowFullScreen
            ></iframe>
          ) : (
            <p>Google Maps APIキーが設定されていません。</p>
          )}
        </div>
        <p><strong>電話番号:</strong> {store.store_phone_number}</p>
        <p><strong>営業時間:</strong> {store.store_opening_hours}</p>
        {store.reviews && store.reviews.length > 0 && (
          <Link to={`/dogrun/reviews/${store.store_id}`} className="review-button">
            口コミを見る
          </Link>
        )}
        <br />
        <a href={store.store_url} target="_blank" rel="noopener noreferrer" className="official-site">
          店舗の公式サイト
        </a>
      </div>
      <Footer/>
    </>
  );
};

export default HospitalDetail;