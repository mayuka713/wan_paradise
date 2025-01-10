import React, { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import Header from "../Header";
import "../Header.css";
import Footer from "../Footer";

interface Store {
  store_id: number;
  store_name: string;
  store_description: string;
  store_address: string;
  store_opening_hours: string;
  store_phone_number: string;
  store_url: string;
  store_img: string[];
  reviews: Review[];
}

interface Review {
  id: number;
  store_id: number;
  rating: number;
  comment: string;
}

interface Tag {
  id: number;
  name: string;
  tag_type: number;
}

const HospitalStoreList: React.FC = () => {
  const { prefectureId } = useParams<{ prefectureId: string }>();
  const [store, setStore] = useState<Store[]>([]);
  const [type5Tag, setType5Tag] = useState<Tag[]>([]);
  const [selectedTagIds, setSelectedTagIds] = useState<number[]>([]);
  const [selectedPrefecture, setSelectedPrefecture] = useState<string>("");
  const [error, setError] = useState<string | null>(null);

  // タグの一覧を取得
  useEffect(() => {
    const fetchTags = async () => {
      try {
        const response = await fetch(`http://localhost:5003/tags`);
        if (!response.ok) {
          throw new Error("タグ情報の取得に失敗しました");
        }
        const data: Tag[] = await response.json();
        const type5 = data.filter((tag) => tag.tag_type === 5);

        setType5Tag(type5);
        setError(null);
      } catch (error) {
        console.error("タグ情報の取得に失敗しました:", error);
        setError("タグの情報の取得に失敗しました");
      }
    };
    fetchTags();
  }, []);

  // 都道府県名を設定
  useEffect(() => {
    const prefectureNames: { [key: string]: string } = {
      "1": "北海道",
      "13": "東京",
      "27": "大阪",
    };
    setSelectedPrefecture(prefectureNames[prefectureId ?? ""] || "動物病院の情報がありません");
  }, [prefectureId]);

  // タグの選択処理
  const handleTagClick = (tagId: number) => {
    setSelectedTagIds((prev) =>
      prev.includes(tagId) ? prev.filter((id) => id !== tagId) : [...prev, tagId]
    );
  };

  // 店舗データを取得
  useEffect(() => {
    const fetchStores = async () => {
      try {
        let url = `http://localhost:5003/stores/list/store-type/${prefectureId}/4`;
        if (selectedTagIds.length > 0) {
          url = `http://localhost:5003/stores/list/tag/${prefectureId}/4?tagIds=${selectedTagIds.join(",")}`;
        }
        const response = await fetch(url);
        if (!response.ok) {
          throw new Error("データ取得に失敗しました");
        }
        const data = await response.json();
        setStore(data);
        setError(null);
      } catch (error) {
        console.error("店舗データの取得に失敗しました:", error);
        setError("タグに該当するドッグランがありません");
      }
    };
    fetchStores();
  }, [prefectureId, selectedTagIds]);
  store.forEach((storeItem) => {
    console.log("取得した店舗情報:", storeItem);
    console.log("口コミデータ:", storeItem.reviews);  
  });

  return (
    <>
      <Header />
      <div className="content">
        {selectedPrefecture === "動物病院の情報がありません" ? (
          <h2>{selectedPrefecture}</h2>
        ) : (
          <>
            <h2 className="title">{selectedPrefecture}の動物病院</h2>
            <p className="search-tags">動物病院の条件を絞り込む</p>
            <div className="type5-tags">
              {type5Tag.map((tag) => (
                <button
                  key={tag.id}
                  onClick={() => handleTagClick(tag.id)}
                  className={`tag-button ${selectedTagIds.includes(tag.id) ? "selected" : ""}`}
                >
                  {tag.name}
                </button>
              ))}
            </div>

            {/* エラーメッセージ */}
            {error ? (
              <p className="error-message">{error}</p>
            ) : (
            <div className="store-list">
             {/* 店舗がない場合 */}
              {store.length === 0 ? (
                <p>該当する病院はありません。</p>
              ) : (
                store.map((storeItem) => {
                  const reviews = storeItem.reviews ?? [];
                  
                  const totalRating = reviews.reduce((sum, review) => sum + ( review.rating || 0),0);
                  const averageRating = reviews.length > 0 ? totalRating / reviews.length : 0;
                  return (
                    <Link to={`/hospital/detail/${storeItem.store_id}`} className="store-item" key={storeItem.store_id}>
                      {/* 店舗画像 */}
                      <div className="store-images">
                        {Array.isArray(storeItem.store_img) &&
                          storeItem.store_img.map((img, index) => (
                            <img key={index} src={img} alt={`${storeItem.store_name} の画像 ${index + 1}`} className="store-image" />
                          ))}
                      </div>

                      {/* レビューの評価 */}
                      <div className="star-rating-container">
                        <div className="star-container">
                          <div className="stars-background">★★★★★</div>
                          <div className="stars-filled" style={{ width: `${(averageRating / 5) * 100}%` }}>★★★★★</div>
                        </div>
                        <span className="average-rating-value">{averageRating.toFixed(1)}</span>
                      </div>

                      {/* 店舗情報 */}
                      <h3 className="store-name">{storeItem.store_name}</h3>
                      <p>{storeItem.store_description}</p>
                      <p><strong>住所:</strong> {storeItem.store_address}</p>
                      <p><strong>電話:</strong> {storeItem.store_phone_number}</p>
                      <p><strong>営業時間:</strong> {storeItem.store_opening_hours}</p>
                    </Link>
                  );
                })
              )}
            </div>
            )}
          </>
        )}
        <Footer />
      </div>
    </>
  );
};

export default HospitalStoreList;
