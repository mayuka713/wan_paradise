import React, { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import "./DogCafeStoreList.css";
import HamburgerMenu from "../../HamburgerMenu";
import Header from "../Header";
import ImageSlider from "../../ImageSlider";

interface Store {
  store_id: number;
  store_name: string;
  store_description: string;
  store_address: string;
  store_opening_hours: string;
  store_phone_number: string;
  store_dogcafe_detail: string;
  store_img: string[];
  reviews: Review[];
}

interface Review {
  id: number;
  store_id: number;
  rating: number;
  commnet: string;
}

interface Tag {
  id: number;
  name: string;
  tag_type: number;
}
const DogCafeStoreList: React.FC = () => {
  const { prefectureId } = useParams<{ prefectureId: string }>();
  const [store, setStore] = useState<Store[]>([]);
  const [tags, setTags] = useState<Tag[]>([]);
  const [selectedTagIds, setSelectedTagIds] = useState<number[]>([]);
  const [selectedPrefecture, setSelectedPrefecture] = useState<string>("");
  const [error, setError] = useState<string | null>(null);

  // タグデータ取得
  useEffect(() => {
    const fetchTags = async () => {
      try {
        const response = await fetch("http://localhost:5003/tags");
        if (!response.ok) {
          throw new Error("タグの情報の取得に失敗しました");
        }
        const data: Tag[] = await response.json();
        setTags(data.filter((tag) => tag.tag_type === 3));
      } catch (error) {
        console.error(error);
        setError("タグ情報の取得に失敗しました");
      }
    };
    fetchTags();
  }, []);
  // 都道府県名設定
  useEffect(() => {
    const prefectureNames: { [key: string]: string } = {
      "1": "北海道",
      "13": "東京",
      "27": "大阪",
    };
    setSelectedPrefecture(
      prefectureNames[prefectureId ?? ""] || "ドッグカフェ情報がありません"
    );
  }, [prefectureId]);

// タグ選択のハンドリング
  const handleTagClick = (tagId: number) => {
    setSelectedTagIds((prev) => 
    prev.includes(tagId)
    ? prev.filter((id) => id ! == tagId )
    : [...prev,tagId]
  );
  };
  // 店舗データ取得
  useEffect(() => {
    const fetchStores = async () => {
      try {
        let url = `http://localhost:5003/stores/list/${prefectureId}/2`;
        if (selectedTagIds.length > 0) {
          url = `http://localhost:5003/store/list/tag/${prefectureId}/2?tagIds/${selectedTagIds.join(
            ","
          )}`;
        }
        const response = await fetch(url);
        if (!response.ok) {
          throw new Error("データ取得に失敗しました");
        }
        const data = await response.json();
        setStore(data);
        setError(null);
      } catch (error) {
        console.error("店舗データ取得エラー:", error);
        setError("タグに該当するドッグカフェがありません");
      }
    };
    fetchStores();
  },[prefectureId, selectedTagIds]);

  return (
    <>
    <Header/>
    <div className="content">
      {selectedPrefecture === "ドッグカフェ情報がありません" ? (
        <h2>{selectedPrefecture}</h2>
      ) : (
        <>
        <h2 className="title">{selectedPrefecture}のドッグカフェ</h2>
        <h3 className="search-tags">ドッグカフェの条件を選ぶ</h3>
        <div className="tags-container">
          {tags.map((tag) => (
            <button 
                key={tag.id}
                onClick={() => handleTagClick(tag.id)}
                className={`tag-button ${
                  selectedTagIds.includes(tag.id) ? "selected" : ""
                }`}
                >
                  {tag.name}
                </button>
          ))}
        </div>
        {error ? (
          <p className="error-message">{error}</p>
        ) : (
          <div className="store-list">
            {/* 店舗がない時 */}
            {store.length === 0 ? (
              <p>該当するドッグカフェが見つかりませんでした</p>
            ) : (
              //店舗がある時
              store.map((storeItem) => {
                const reviews = storeItem.reviews || [];
                const averageRating = 
                reviews.length > 0 
                ? reviews.reduce(
                  (sum, review ) => sum + review.rating,
                  0
                ) / reviews.length
                : 0;
                return (
                  <Link 
                  to={`/dogcafe/detail/${storeItem.store_id}`}
                  className="store-item"
                  key={storeItem.store_id}
                >
                <ImageSlider images={storeItem.store_img} />
                <div className="star-rating-container">
                  <div className="star-container">
                    <div className="stars-background">★★★★★</div>
                      <div 
                          className="stars-filled"
                          style={{
                            width: `${(averageRating / 5) * 100}%`
                          }}>
                            ★★★★★
                          </div>
                          </div>
                          <span className="average-rating-value">
                            {averageRating.toFixed(1)}
                          </span>
                        </div>
                        <h3 className="store-name-dogcafe">{storeItem.store_name}</h3>
                        <p className="store-description">
                          {storeItem.store_description}
                        </p>
                        <p>
                          <strong>住所:</strong> {storeItem.store_address}
                        </p>
                        <p>
                          <strong>電話:</strong> {storeItem.store_phone_number}
                        </p>
                        <p>
                          <strong>営業時間:</strong> {storeItem.store_opening_hours}
                        </p>
                      </Link>
                    );
                  })
                )}
              </div>
            )}
          </>
        )}
      </div>
    </>
  );
};

export default DogCafeStoreList;