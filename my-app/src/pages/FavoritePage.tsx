import React, { useEffect, useState } from "react";
import "../pages/FavoritePage.css";
import { Link } from "react-router-dom";
import Header from "./Header";
import Footer from "./Footer";

interface Favorite {
  id: number;
  user_id: number;
  store_id: number;
  store_name: string;
  store_address: string;
  store_URL: string;
  store_img: string;
}

interface Review {
  id: number;
  store_id: number;
  rating: number;
  comment: string;
}

const FavoritePage: React.FC = () => {
  const [favorites, setFavorites] = useState<Favorite[]>([]);
  const [reviews, setReviews] = useState<Review[]>([]);

  useEffect(() => {
    const fetchFavorites = async () => {
      try {
        const response = await fetch("http://localhost:5003/favorites/1", {
          method: "GET",
          credentials: "include",
          headers: { "Content-Type": "application/json" },
        });

        if (!response.ok) {
          throw new Error("エラーが返されました");
        }

        const data: Favorite[] = await response.json();
        setFavorites(data);
      } catch (error) {
        console.error(error);
      }
    };

    fetchFavorites();
  }, []);

  useEffect(() => {
    const fetchReviews = async () => {
      try {
        const response = await fetch("http://localhost:5003/reviews", {
          method: "GET",
          headers: { "Content-Type": "application/json" },
        });

        if (!response.ok) {
          throw new Error("口コミデータの取得に失敗しました");
        }

        const data: Review[] = await response.json();
        setReviews(data);
      } catch (error) {
        console.error(error);
      }
    };

    fetchReviews();
  }, []);

  return (
    <>
      <Header />
      <div className="favorite-container">
        <header className="app-header">
          <h1 className="title">お気に入りリスト</h1>
        </header>

        <ul className="favorite-list">
          {favorites.length > 0 ? (
            favorites.map((favorite) => {
              // 対象店舗の口コミデータを取得
              const storeReviews = reviews.filter((review) => review.store_id === favorite.store_id);

              // 平均評価を計算（口コミがある場合のみ）
              const averageRating =
                storeReviews.length > 0
                  ? storeReviews.reduce((sum, review) => sum + review.rating, 0) / storeReviews.length
                  : 0;

              return (
                <Link to={`/dogrun/detail/${favorite.store_id}`} className="favorite-link" key={favorite.id}>
                  <li className="favorite-item">
                    {/* 店舗画像 */}
                    <img
                      src={favorite.store_img ? favorite.store_img : "http://via.placeholder.com/150"}
                      alt={favorite.store_name}
                      className="favorite-image"
                    />
                    <h2 className="favorite-title">{favorite.store_name}</h2>

                    {/* 口コミの平均評価を表示 */}
                    <div className="review-average">
                      {[1, 2, 3, 4, 5].map((value) => (
                        <span
                          key={`star-${favorite.store_id}-${value}`}
                          className={`star ${value <= Math.round(averageRating) ? "selected" : ""}`}
                        >
                          ★
                        </span>
                      ))}
                      <strong>{averageRating.toFixed(1)}</strong>
                    </div>
                  </li>
                </Link>
              );
            })
          ) : (
            <p className="no-favorites">お気に入りがまだ登録されていません。</p>
          )}
        </ul>
      </div>
      <Footer/>
    </>
  );
};

export default FavoritePage;
