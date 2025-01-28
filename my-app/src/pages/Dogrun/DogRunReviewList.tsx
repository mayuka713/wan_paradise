import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useModal } from "../../context/ModalContext"; // useModal を使用
import "./DogRunReviewList.css";
import Header from "../Header";
import Footer from "../Footer";
import Modal from "../../components/Modal";


type Review = {
  id: number;
  name: string;
  store_id: number;
  store_name: string;
  rating: number;
  comment: string;
  date: string;
  created_at: string;
  updated_at: string;
};

const DogRunReviewList : React.FC = () => {
  const { storeId } = useParams<{ storeId: string }>();
  const [reviews, setReviews] = useState<Review[]>([]);
  const [error, setError] = useState<string | null>(null);
  const [averageRating, setAverageRating] = useState<number>(0);
  const [storeName, setStoreName] = useState<string>("");
  const { openModal } = useModal(); // モーダルを開く関数
//useState,useParamsはこれから使うデータの準備をする。実際の処理を行うのは、useEffect()などの別の部分
    useEffect(() => {
      if (!storeId) return;  //もしstoreIdがなければ処理を中断する
  
      const fetchReviews = async () => {//fetchReviewsはサーバーAPIから口コミデータを取得し、それを画面に表示するための準備をする役割
        try {
          const response = await fetch(
            `http://localhost:5003/reviews/${storeId}`
          );
          if (!response.ok) throw new Error("口コミの取得に失敗しました");
  
          const data = await response.json();
               //dataをJSON形式に変換。response.json()でサーバーからのレスポンスをJSON形式に変換する
          setReviews(data);//取得した口コミをセット
        //取得した口コミデータをもとに「平均評価（星の数）」を計算している処理
          if (data.length > 0) {
            const avgRating =
              data.reduce((sum: number, review: Review) => sum + review.rating, 0) /
              data.length;
            setAverageRating(Math.min(avgRating, 5)); // 5を超えないように制限
          }
        } catch (err) {
          console.error("エラー詳細:", err);
          setError("口コミの取得に失敗しました");
        }
      };
      //サーバーAPIから店舗の名前を取得し、それを画面に表示するための処理
      const fetchStoreName = async () => {
        try {
          const response = await fetch(
            `http://localhost:5003/stores/store-name/${storeId}`//API
          );
          if (!response.ok) throw new Error("店舗情報の取得に失敗しました");
  
          const data = await response.json();
          setStoreName(data.store_name);
        } catch (err) {
          console.error("エラー詳細:", err);
          setError("店舗情報の取得に失敗しました");
        }
      };
  
      fetchReviews();//ここで実行
      fetchStoreName();
    }, [storeId]);
  
    // 口コミを投稿する関数
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
        
        setReviews((prevReviews) => {
          const updatedReviews = [newReview, ...prevReviews]; // 新しい口コミを追加
          const newAverageRating =
            updatedReviews.reduce((sum: number, rev: Review) => sum + rev.rating, 0) /
            updatedReviews.length;
  
          setAverageRating(newAverageRating); // 平均評価を更新
  
          return updatedReviews; // 更新されたレビューリストを `setReviews` にセット
        });
        
      } catch (err) {
        console.error("エラー詳細:", err);
        setError("コメント投稿に失敗しました");
      }
    };
  
    return (
      <>
        <Header />
        <div className="review-container">
          <h1 className="store-name-review">{storeName || "店舗名を取得中..."}</h1>
          {/* 平均評価の表示 */}
          <div className="review-star-container">
            <div className="review-stars-background">★★★★★</div>
            <div
              className="review-stars-filled"
              style={{ width: `${(Math.min(averageRating, 5) / 5) * 100}%` }}
            >
              ★★★★★
            </div>
          </div>
          <span className="average-rating-value">{averageRating.toFixed(1)}</span>
  
          <h2 className="review-title">{storeName} 口コミ一覧</h2>
          {/* モーダルを開く */}
          <button onClick={() => openModal(storeName)} className="click-review-button">
            投稿
          </button>
  
          {error && <p className="error-message">{error}</p>}
        {/* レビューリストの表示 */}
          {reviews.map((review) => (
            <div key={review.id} className="review-card">
              <div className="review-rating">
                {[1, 2, 3, 4, 5].map((value) => (
                  <span
                    key={value}
                    className={`star ${value <= review.rating ? "selected" : ""}`}
                  >
                    ★
                  </span>
                ))}
                <strong style={{ marginLeft: "8px" }}>{review.rating.toFixed(1)}</strong>
              </div>
              <p className="review-comment">{review.comment}</p>
            </div>
          ))}
        </div>
        <Footer/>
  
        {/*モーダルコンポーネント*/}
        <Modal onSubmit={handleReviewSubmit} />
      </>
    );
  };

export default DogRunReviewList;
