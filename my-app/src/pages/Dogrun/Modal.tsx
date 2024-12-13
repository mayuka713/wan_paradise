import React, { useState } from "react";
import "./Modal.css";

// Propsの型定義
interface ModalProps {
  show: boolean;
  onClose: () => void;
  onSubmit: (rating: number, comment: string) => void;
}

const Modal: React.FC<ModalProps> = ({ show, onClose, onSubmit }) => {
  const [selectedRating, setSelectedRating] = useState<number>(0); // 評価の初期値
  const [comment, setComment] = useState<string>(""); // コメントの初期値

  if (!show) {
    return null;
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault(); // フォームのリロードを防ぐ
    if (selectedRating > 0 && comment.trim () !== "") {
      onSubmit(selectedRating, comment.trim());
      setSelectedRating(0);
      setComment("");
      onClose();
    } else {
      alert("星を選択してください");
    }
  };

  const handleStarClick = (value: number) => {
    if (selectedRating === value) {
      setSelectedRating(0);
    }else{
      setSelectedRating(value);
    }
  };

  return (
    <div className="modal">
      <div className="modal-content">
        <span className="close" onClick={onClose}>
          &times;
        </span>
        <h2>口コミを投稿</h2>
        <form onSubmit={handleSubmit} style={{ marginTop: "20px" }}>
          <div style={{ marginBottom: "10px" }}>
            <label>
              評価:
              <div className="star-rating">
                {[1, 2, 3, 4, 5].map((value) => (
                  <span
                    key={value}
                    className={`star ${value <= selectedRating ? "selected" : ""}`}
                    onClick={() => handleStarClick(value)}
                  >
                    ★
                  </span>
                ))}
              </div>
            </label>
          </div>
          <div style={{ marginBottom: "10px" }}>
            <label>
              コメント:
              <textarea
                value={comment}
                onChange={(e) => setComment(e.target.value)}
                style={{ width: "100%", height: "80px", marginLeft: "10px" }}
              />
            </label>
          </div>
          <button
            type="submit"
            style={{ padding: "8px 16px", borderRadius: "4px" }}
          >
            投稿
          </button>
        </form>
      </div>
    </div>
  );
};

export default Modal;
