import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import "./DogRunReviewList.css";
import "./Modal.css";
import Modal from "./Modal";

type Review = {
  id: number;
  name: string;
  store_id: number;
  rating: number;
  comment: string;
  date: string;
  created_at: string;
  updated_at: string;
};

const ReviewList: React.FC = () => {
  const { storeId } = useParams<{ storeId: string }>();
  const [reviews, setReviews] = useState<Review[]>([]);
  const [error, setError] = useState<string | null>(null);
  const [showModal, setShowModal] = useState(false);
  const [selectedRating, setSelectedRating] = useState<number>(0);
  const [averageRating, setAverageRating] = useState<number>(0);
  const [storeName, setStoreName] = useState<string>("");

  //口コミを取得
  useEffect(() => {
    const fetchReviews = async () => {
      try {
        const response = await fetch('http://localhost:5003/reviews');
        const data = await response.json();

        // 明示的に created_at で降順ソート
        const storedData = data.sort(
          (a: Review, b: Review) => new Date(b.created_at).getTime() - new Date(a.created_at).getTime()
        );

        // 平均評価を計算
        const avgRating = storedData.length
          ? storedData.reduce((sum: number, review: Review) => sum + review.rating, 0) /
            storedData.length
          : 0;

        setReviews(storedData);
        setAverageRating(Number(avgRating.toFixed(1)));

        console.log("塗りつぶし幅:", (avgRating / 5) * 100);
      } catch (error) {
        console.error(error);
        setError("口コミの取得に失敗しました");
      }
    };


 //店舗名を取得する
  const fetchStoreName = async () => {
    try {
      const response = await fetch(`http://localhost:5003/stores/store-name/${storeId}`);
      const data = await response.json();
      console.log("取得した店舗データ");
      setStoreName(data.store_name);
    } catch (error){
      setError("店舗情報の取得に失敗しました");
    }
  };
  fetchReviews();
  fetchStoreName();
}, [storeId]);


//口コミ投稿処理
const handleReviewSubmit = async (rating: number, comment: string) => {
  try {
    const response = await fetch("http://localhost:5003/reviews", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
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
    //新しい口コミをを追加
    setReviews((prevReviews) => [newReview, ...prevReviews]);
    //モーダルを閉じる
    setShowModal(false);
    console.log('投稿成功:', newReview);
  } catch (error) {
    console.error(error);
    setError("コメント投稿に失敗しました");
  }
};


return (
  <div className="review-container">
    {/* 平均評価を表示 */}
    <h1 className="store-name">{storeName || "店舗名を取得中"}</h1>

    <div className="star-container">
      {/* 背景の星（灰色） */}
      <div className="stars-background">★★★★★</div>
      {/* 塗りつぶされた星（評価に基づく幅） */}
      <div
        className="stars-filled"
        style={{ 
          width: `${(averageRating / 5) * 100}%`, 
        }}
      >
        ★★★★★
      </div>
    </div>
    <span className="average-rating-value">{averageRating.toFixed(1)}</span>

    <h2 className="review-title">口コミ一覧</h2>
    <button onClick={() => setShowModal(true)} style={{ marginTop: "20px" }}>
      投稿
    </button>

    {/* エラー表示 */}
    {error && reviews.length > 0 && <p style={{ color: "red" }}>{error}</p>}

    {/* 口コミ一覧 */}
    {reviews.map((review) => (
      <div key={review.id} className="review-card">
        <div className="review-rating">
          {[1, 2, 3, 4, 5].map((value) => (
            <span
              key={value}
              className={`star ${
                value <= Math.round(review.rating) ? "selected" : ""
              }`}
            >
              ★
            </span>
          ))}
          <strong>{review.rating.toFixed(1)}</strong>
        </div>
        <p className="review-comment">
          <strong>口コミ:</strong> {review.comment}
        </p>
      </div>
    ))}

    {/* モーダル */}
    {showModal && (
      <Modal
        show={showModal}
        onClose={() => setShowModal(false)}
        onSubmit={(rating: number, comment: string) =>
          handleReviewSubmit(rating, comment)
        }
        storeName={storeName}
      />
    )}
  </div>
);

};

export default ReviewList;