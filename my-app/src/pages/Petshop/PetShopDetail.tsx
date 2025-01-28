import React, { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import Header from "../Header";
import Footer from "../Footer";
import ImageSlider from "../../ImageSlider";
import "./PetShopDetail.css";

interface Store {
  store_id: number;
  store_name: string;
  store_description: string;
  store_address: string;
  store_opening_hours: string;
  store_phone_number: string;
  store_url: string;
  store_img: string[];
  tags: string[]; // タグの配列として定義
  reviews?: Review[];
}

interface Review {
  id: number;
  store_id: number;
  rating: number;
  comment: string;
}

//ブラウザのクッキーに保存されているuserIdという値を取り出す
const getUserIdFromCookie = (): number | null => {
  const cookies = document.cookie.split("; ");
  for (let cookie of cookies) {
    const [name, value] = cookie.split("=");
    if (name === "user_id") {
      const parsedValue = parseInt(decodeURIComponent(value), 10);
      return isNaN(parsedValue) ? null : parsedValue;
    }
  }
  return null;
};


const PetShopDetail: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const [store, setStore] = useState<Store | null>(null);
  const [error, setError] = useState<string | null>(null);
  const [isFavorite, setIsFavorite] = useState<boolean>(false);
  const [userId, setUserId] = useState<number | null>(0);
  const MAP_API_KEY = process.env.REACT_APP_MAP_API_KEY;
  useEffect(() => {
    const userIdFromCookie = getUserIdFromCookie();
    setUserId(userIdFromCookie); // `number | null` の型で渡す
  }, []);

  useEffect(() => {
    console.log("PetShopDetail の URL パラメータ ID:", id);
    const fetchStoreAndReviews = async () => {
      try {
        // 店舗情報を取得
        const storeResponse = await fetch(`http://localhost:5003/stores/detail/${id}`);
        if (!storeResponse.ok) throw new Error("店舗情報の取得に失敗しました");
        const storeData: Store = await storeResponse.json();

        // 口コミ情報を取得
        const reviewResponse = await fetch(`http://localhost:5003/reviews`);
        if (!reviewResponse.ok) throw new Error("口コミ情報の取得に失敗しました");
        const reviewData: Review[] = await reviewResponse.json();

        // 店舗に関連付けられた口コミをフィルタリング
        const reviews = reviewData.filter((review) => review.store_id === storeData.store_id);

        // 店舗情報に口コミを追加
        setStore({ ...storeData, reviews });
      } catch (err: any) {
        console.error("データ取得エラー:", err);
      }
    };

    const fetchFavorite = async () => {
      try {
        if (!userId) return;

        const favoriteResponse = await fetch(`http://localhost:5003/favorites/${userId}`);
        if (favoriteResponse.ok) {
          const favoriteData: { store_id: number }[] = await favoriteResponse.json();
          setIsFavorite(favoriteData.some((fav) => fav.store_id === Number(id)));
        }
      } catch (err: any) {
        console.error("お気に入り情報取得エラー:", err);
      }
    };

    if (id) {
      fetchStoreAndReviews();
      if (userId) fetchFavorite();
    }
  }, [id, userId]);

//-----------店舗情報とお気に入り状態を取得する処理
const handleFavoriteClick = async () => {
  if (!store || userId === null) return;

  const url = "http://localhost:5003/favorites";
  const method = isFavorite ? "DELETE" : "POST";
  const body = JSON.stringify({
    user_id: userId,
    store_id: store.store_id,
  });

  try {
    const response = await fetch(url, {
      method,
      headers: { "Content-Type": "application/json" },
      body,
    });
    if (!response.ok) throw new Error("お気に入りの更新に失敗しました");
    setIsFavorite(!isFavorite);
  } catch (err) {
    setError("お気に入りの更新に失敗しました");
  }
};


  if (error) return <div className="container">{error}</div>;
  if (!store) return <div className="container">データを読み込んでいます..</div>;


//平均評価の計算
const averageRating = 
  store.reviews && store.reviews.length > 0 
  ? store.reviews.reduce((sum, rev) => sum + rev.rating, 0) /
    store.reviews.length
    : 0;

  // 店舗詳細情報の表示
  return (
    <>
    <Header/>
    <div className="detail-container">
      <h1 className="review-button-title">{store.store_name}</h1>
      {store.store_img.length > 0 ? (
        <ImageSlider images={store.store_img} />
      ) : (
        <p>画像がありません</p>
      )}

      {/*口コミ一覧ページへのリンクを追加*/}
        {store.reviews && store.reviews.length > 0 && (
          <Link
            to={`/dogrun/reviews/${store.store_id}`}
            className="review-button-detail"
          >
            口コミを見る
          </Link>
        )}
      {/* 平均評価を星で表示 */}
        <div style={{margin: "20px 0"}}>
          {store.reviews && store.reviews.length > 0 ? (
            <>
            <div style={{ fontSize: "24px", color: "gray"}}>
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
              {averageRating.toFixed(1)}
            </p>
          </>
        ) : (
          <p>まだ口コミはありません</p>
        )}
        </div>

        {/* 店舗情報 */}
        <p>
        <strong>住所: </strong>
        {store.store_address}
      </p>
      {/* Google Map 埋め込み */}
      {MAP_API_KEY && (
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
      )}
      <p>電話番号: {store.store_phone_number}</p>
      <p>営業時間: {store.store_opening_hours}</p>
    {/* お気に入りボタン */}
    <br />
      <button 
        onClick={handleFavoriteClick}
        className={`favorite-button${isFavorite ? " active" : ""}`}>
          {isFavorite ? "お気に入り解除" : "お気に入り登録"}
        </button>
        <br />
      <a
        href={store.store_url}
        target="_blank"
        rel="noopener noreferrer"
        className="official-site"
      >
        店舗の公式サイト
      </a>
    </div>
    <Footer/>
    </>
  );
};

export default PetShopDetail;
