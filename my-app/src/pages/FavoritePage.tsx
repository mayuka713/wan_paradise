import React, { useEffect, useState } from "react";
import "../pages/FavoritePage.css";
import { Link } from "react-router-dom";
import Header from "./Header";

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

   //口コミデータの取得

  useEffect(() => {
    const fetchReviews = async () => {
      try {
        const response = await fetch("http://localhost:5003/reviews", {
          method: "GET",
          headers: { "Content-Type" : "application/json"},
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
    <Header/>
    <div className="favorite-container">
      <header className="app-header">
        <h1 className="title">お気に入りリスト</h1>
      </header>

      <ul className="favorite-list">
        {favorites.length > 0 ? (
          favorites.map((favorite) => (
            <Link to={`/dogrun/detail/${favorite.store_id}`} className="favorite-link">
            <li key={favorite.id} className="favorite-item">
                <img
                  src={
                    favorite.store_img
                      ? favorite.store_img
                      : "http://via.placeholder.com/150"
                  }
                  alt={favorite.store_name}
                  className="favorite-image"
                />
                {/* 店舗画像 */}
                <h2 className="favorite-title">{favorite.store_name}</h2>
              {/* 口コミデータ表示 */}
              {reviews
                .filter((review) => review.store_id === favorite.store_id)
                .map((review) => (
                  <div key={review.id}>
                    <p className="review-rating">
                      {[1, 2, 3, 4, 5].map((value) => (
                        <span
                          key={`star-${review.id}-${value}`}
                          className={`star ${
                            value <= review.rating ? "selected" : ""}`}
                        >
                        ★
                        </span>
                      ))}
                      <strong>{review.rating}.0</strong>
                    </p>
                  </div>
                ))}
            </li>
        </Link>  
        ))
        ) : (
          <p className="no-favorites">お気に入りがまだ登録されていません。</p>
        )}
      </ul>
    </div>
  </>
  );
};

export default FavoritePage;
