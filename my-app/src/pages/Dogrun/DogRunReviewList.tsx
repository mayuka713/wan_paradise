import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useModal } from "../../context/ModalContext"; // useModal を使用
import "./DogRunReviewList.css";
import Header from "../Header";
import Modal from "../../components/Modal"; // 修正した Modal.tsx をインポート

type Review = {
  id: number;
  store_id: number;
  rating: number;
  comment: string;
  created_at: string;
};

const DogrunReview: React.FC = () => {
  const { storeId } = useParams<{ storeId: string }>();
  const { openModal } = useModal(); // モーダルを開く関数
  const [reviews, setReviews] = useState<Review[]>([]);
  const [error, setError] = useState<string | null>(null);
  const [averageRating, setAverageRating] = useState<number>(0);
  const [storeName, setStoreName] = useState<string>("");

  useEffect(() => {
    const fetchReviews = async () => {
      try {
        const response = await fetch(
          `http://localhost:5003/reviews?store_id=${storeId}`
        );
        const data = await response.json();
        setReviews(data);
        if (data.length > 0) {
          const avgRating =
            data.reduce(
              (sum: number, review: Review) => sum + review.rating,
              0
            ) / data.length;
          setAverageRating(avgRating);
        }
      } catch (error) {
        console.error(error);
        setError("口コミの取得に失敗しました");
      }
    };

    const fetchStoreName = async () => {
      try {
        const response = await fetch(
          `http://localhost:5003/stores/store-name/${storeId}`
        );
        const data = await response.json();
        setStoreName(data.store_name);
      } catch (error) {
        setError("店舗情報の取得に失敗しました");
      }
    };

    fetchReviews();
    fetchStoreName();
  }, [storeId]);
  //口コミを投稿する関数
  const handleReviewSubmit = async (rating: number, comment: string) => {
    try {
      const response = await fetch("http://localhost:5003/reviews", {
        method: "POST",
        headers: { "Content-type": "application/json" },
        body: JSON.stringify({
          store_id: storeId,
          rating,
          comment,
        }),
      });

      if (!response.ok) {
        throw new Error("コメント投稿に失敗しました");
      }

      const newReview = await response.json();
      setReviews((prevReviews) => [newReview, ...prevReviews]);
    } catch (error) {
      console.error(error);
      setError("コメント投稿に失敗しました");
    }
  };
  return (
    <>
      <Header />
      <div className="review-container">
        <h1 className="store-name">{storeName || "店舗名を取得中"}</h1>

        <div className="star-container">
          <div className="stars-background">★★★★★</div>
          <div
            className="stars-filled"
            style={{ width: `${(averageRating / 5) * 100}%` }}
          >
            ★★★★★
          </div>
        </div>
        <span className="average-rating-value">{averageRating.toFixed(1)}</span>

        <h2 className="review-title">口コミ一覧</h2>
        <button onClick={() => openModal(storeName)} className="review-button">
          投稿
        </button>

        {error && <p className="error-message">{error}</p>}

        {reviews.map((review) => {
          console.log("口コミデータ:", review); // デバッグ用
          return (
            <div key={review.id} className="review-card">
              <div className="review-rating">
                {[1, 2, 3, 4, 5].map((value) => (
                  <span
                    key={value}
                    className={`star ${
                      value <= review.rating ? "selected" : ""
                    }`}
                  >
                    ★
                  </span>
                ))}
                <strong style = {{ marginLeft: "8px"}}>{review.rating.toFixed(1)}</strong>
              </div>
              <p className="review-comment">{review.comment}</p>
            </div>
          );
        })}
      </div>

      {/* モーダルを表示、onSubmitを渡す */}
      <Modal onSubmit={handleReviewSubmit} />
    </>
  );
};

export default DogrunReview;
