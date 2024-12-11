import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import "./ReviewList.css";


interface Review {
  id: number;
  store_id: number;
  rating: number;
  comment: string;
}

const ReviewList: React.FC = () => {
  const { storeId } = useParams<{ storeId: string }>();
  const [reviews, setReviews] = useState<Review[]>([]);
  const [error, setError] = useState<string | null>(null);



useEffect(() => {
  const fetchReviews = async () => {
    try {
      const response = await fetch(`http://localhost:5003/reviews`);
      if (!response.ok) {
        throw new Error("口コミ情報の取得に失敗しました");
      }
      const data: Review[] = await response.json();
      const filteredReviews = data.filter((review) => review.store_id === Number(storeId));
      setReviews(filteredReviews);
    } catch (error) {
      console.error(error);
      setError("口コミの取得に失敗しました");
    }
  };
  fetchReviews();
}, [storeId]);

if (error) {
  return <div style={{ padding: "20px" }}>{error}</div>;
}
if (reviews.length === 0) {
  return <div style={{ padding: "20px" }}>まだ口コミはありません</div>
}


return (
   <div className="review-container">
    <h2 className="review-title">口コミ一覧</h2>
    {reviews.map((review) => (
       <div key={review.id} className="review-card">
        <p className="review-rating"><strong>評価:</strong>{review.rating}</p>
        <p className="review-comment"><strong>コメント:</strong>{review.comment}</p>
       </div>
    ))}
   </div> 
);
};

export default ReviewList;