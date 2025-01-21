import React, { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import Header from "../Header";
import Footer from "../Footer";
import ImageSlider from "../../ImageSlider";
import "./DogRunDetail.css";

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
  reviews?: Review[];
}

interface Review {
  id: number;
  store_id: number;
  rating: number;
  comment: string;
}

const getUserIdFromCookie = (): number | null => {
  const cookies = document.cookie.split("; "); // クッキーを分割
  for (let cookie of cookies) {
    const [name, value] = cookie.split("="); // クッキー名と値を分割
    if (name === "user_id") {
      const parsedValue = parseInt(decodeURIComponent(value), 10); // URIデコードしてから数値に変換
      return isNaN(parsedValue) ? null : parsedValue; // NaNの場合はnullを返す
    }
  }
  return null; // 該当するクッキーが存在しない場合
};


const DogRunDetail: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const [store, setStore] = useState<Store | null>(null);
  const [error, setError] = useState<string | null>(null);
  const [isFavorite, setIsFavorite] = useState<boolean>(false);
  const [userId, setUserId] = useState<number | null>(0);
  const MAP_API_KEY = process.env.REACT_APP_MAP_API_KEY;

  useEffect(() => {
    const userIdFromCookie = getUserIdFromCookie();
    console.log("クッキーから取得した userId:", userIdFromCookie);
    setUserId(userIdFromCookie); // `number | null` の型で渡す
  }, []);


//店舗の口コミ
useEffect(() => {
  const fetchStoreWithReviews = async () => {
    try {                                                       
      const storeResponse = await fetch(`http://localhost:5003/stores/detail/${id}`);
      const reviewResponse = await fetch(`http://localhost:5003/reviews`);

      if (!storeResponse.ok || !reviewResponse.ok) {
        throw new Error("データ取得に失敗しました");
      }
      //サーバーから受け取ったデータをプログラムで扱いやすい形に変換します。
      const storeData: Store = await storeResponse.json();
      const reviewData: Review[] = await reviewResponse.json();

      // 店舗に関連付けられた口コミを結び付ける 取得した口コミデータの中から、店舗IDが一致するものだけを抽出している
      const reviews = reviewData.filter(
        (review) => review.store_id === storeData.store_id);
      //状態の更新 店舗情報に口コミをむすびつけて状態を更新している。これで画面に表示する準備が完了
        setStore({ ...storeData, reviews });
    } catch (err: any) {
      //エラーハンドリング データ処理がうまくいかなかったとき
      console.error("データ取得中にエラーが発生しました:", err);
      setError("店舗情報の取得に失敗しました");
    }
  };

  fetchStoreWithReviews();
}, [id]);



  // お気に入りの追加・解除
  const handleFavoriteClick = async () => {
    if (!store) return;
      const postUrl = "http://localhost:5003/favorites";
      const deleteUrl = "http://localhost:5003/favorites";
    try {
      let response;
    if (isFavorite) {
        response = await fetch(deleteUrl, {
          method: "DELETE",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            user_id: userId,
            store_id: store.store_id,
          }),
        });
      } else {
        response = await fetch(postUrl, {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            user_id: userId,
            store_id: store.store_id,
          }),
        });
      }

      if (!response.ok) {
        throw new Error("お気に入りの更新に失敗しました");
      }

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
        console.log("取得したデータ:", data);

        setStore(data);
      } catch (error) {
        console.error("店舗情報の取得に失敗しました:", error);
      }
    };
    fetchStores();
  }, [id]);

  // 店舗データとレビューを取得して設定する関数

  useEffect(() => {
    const fetchStoreData = async () => {
      try {
        const storeResponse = await fetch(`http://localhost:5003/stores/detail/${id}`);
        const reviewResponse = await fetch(`http://localhost:5003/reviews`);

        if (!storeResponse.ok || !reviewResponse.ok) {
          throw new Error("データ取得に失敗しました");
        }

        const storeData: Store = await storeResponse.json();
        const reviewData: Review[] = await reviewResponse.json();

        // 店舗に関連付けられた口コミを結び付ける
        const reviews = reviewData.filter(
          (review) => review.store_id === storeData.store_id
        );
        setStore({ ...storeData, reviews });
      } catch (err: any) {
        console.error("データ取得中にエラーが発生しました:", err);
        setError("店舗情報の取得に失敗しました");
      }
    };
    fetchStoreData();
  }, [id]);

//----------------------
  useEffect(() => {
    if (!userId) return;
    const fetchStoreAndFavorite = async () => {
      try {
        const StoreResponse = await fetch(
          `http://localhost:5003/stores/detail/${id}`
        );
        if (!StoreResponse.ok) throw new Error("店舗情報の取得に失敗しました");

        const storeData: Store = await StoreResponse.json();
        setStore(storeData);

        //お気に入り状態を取得
        const favoriteResponse = await fetch(
          `http://localhost:5003/favorites/${userId}`
        );
        const favoriteData: { store_id: number }[] =
          await favoriteResponse.json();
        setIsFavorite(
          favoriteData.some((fav) => fav.store_id === storeData.store_id)
        );
      } catch (err: any) {
        console.error(err.message);
        setError("データの取得に失敗しました");
      }
    };
    fetchStoreAndFavorite();
  }, [id, userId]);

  if (error) return <div className="container">{error}</div>;
  if (!store)
    return <div className="container">データを読み込んでいます..</div>;

  // 平均評価の計算
  const averageRating =
    store.reviews && store.reviews.length > 0
      ? store.reviews.reduce((sum, rev) => sum + rev.rating, 0) /
        store.reviews.length
      : 0;

  return (
    <>
      <Header />
      <div className="detail-container">
        <h1 className="detail-title">{store.store_name}</h1>
        {store.store_img.length > 0 ? (
          <ImageSlider images={store.store_img} />
        ) : (
          <p>画像がありません</p>
        )}
        {store.reviews && store.reviews.length > 0 && (
          <Link
            to={`/dogrun/reviews/${store.store_id}`}
            className="review-button"
          >
            口コミを見る
          </Link>
        )}

        {/* 平均評価を星で表示 */}
        <div style={{ margin: "20px 0" }}>
          {store.reviews && store.reviews.length > 0 ? (
            <>
              <div style={{ fontSize: "24px", color: "gray" }}>
                {[1, 2, 3, 4, 5].map((value) => (
                  <span
                    key={value}
                    className={`star ${
                      value <= Math.round(averageRating) ? "selected" : ""
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
        
        <br />
        {/* お気に入りボタン */}
          <button
          onClick={handleFavoriteClick}
          className={`favorite-button ${isFavorite ? "active" : ""}`}
        >
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
      <Footer />
    </>
  );
};

export default DogRunDetail;
