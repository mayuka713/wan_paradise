import React, { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import "./PetShopPage.css";
import Header from "../Header";
import "../Header.css";

interface Store {
  store_id: number;
  store_name: string;
  store_description: string;
  store_address: string;
  store_opening_hours: number;
  store_phone_number: string;
  store_url: string;
  store_img: string;
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

const PetShopStoreList: React.FC = () => {
  const { prefectureId } = useParams<{ prefectureId: string }>();
  const [store, setStore] = useState<Store[]>([]);
  const [type4Tag, setType4Tag] = useState<Tag[]>([]);
  const [selectedPrefecture, setSelectedPrefecture] = useState<string>("");
  const [selectedTagIds, setSelectedTagIds] = useState<number[]>([]);
  const [error, setError] = useState<string | null>(null);

  //タグの一覧
  useEffect(() => {
    const fetchTags = async () => {
      try {
        const response = await fetch(`http://localhost:5003/tags`);
        if (!response.ok) {
          throw new Error("タグ情報の取得に失敗しました");
        }
        const data: Tag[] = await response.json();
        //タグを分類する
        const type4 = data.filter((tag) => tag.tag_type === 4);
        setType4Tag(type4);
        setError(null);
      } catch (error) {
        console.error("タグの取得に失敗しました:", error);
      }
    };
    fetchTags();
  }, []);

  //都道府県名の設定
  useEffect(() => {
    const prefectureNames: { [key: string]: string } = {
      "1": "北海道",
      "13": "東京",
      "27": "大阪",
    };
    const selectedName =
      prefectureNames[prefectureId ?? ""] || "ペットショップ情報がありません";
    setSelectedPrefecture(selectedName);
  }, [prefectureId]);

  const handleTagClick = (tagId: number) => {
    if (selectedTagIds.includes(tagId)) {
      setSelectedTagIds(selectedTagIds.filter((id) => id !== tagId));
    } else {
      setSelectedTagIds([...selectedTagIds, tagId]);
    }
    console.log("選択されたタグID:", selectedTagIds);
  };

  //店舗データの取得
  useEffect(() => {
    const fetchStores = async () => {
      try {
        let url = `http://localhost:5003/stores/list/${prefectureId}/3`;

        if (selectedTagIds.length > 0) {
          url = `http://localhost:5003/stores/list/tag/${prefectureId}/3?tagIds=${selectedTagIds.join(
            ","
          )}`;
        }
        const response = await fetch(url);
        if (!response.ok) {
          throw new Error("データ取得に失敗しました");
        }

        const data = await response.json();
        console.log("Request URL:", url);
        setStore(data);
      } catch (error) {
        console.error("エラー発生してます:", error);
      }
    };
    fetchStores();
  }, [prefectureId, selectedTagIds]);

  return (
    <>
      <Header />
      <div className="content">
        {selectedPrefecture === "ペットショップ情報がありません" ? (
          <h2>{selectedPrefecture}</h2>
        ) : (
          <>
            <h2 className="title">{selectedPrefecture}のペットショップ</h2>
            <p className="search-tags">条件を絞り込む</p>

            {/* タグボタンを表示 */}
            <div className="type4-tags">
              {type4Tag.map((tag) => (
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

            {/* エラーメッセージ */}
            {error ? (
              <p className="error-message">{error}</p>
            ) : (
              <div className="store-list">
                {/* 店舗がない場合 */}
                {store.length === 0 ? (
                  <p className="no-store-message">
                    該当する店舗が見つかりませんでした。
                  </p>
                ) : (
                  /* 店舗がある場合 */
                  store.map((storeItem) => {
                    const reviews = storeItem.reviews || [];
                    const averageRating =
                      reviews.length > 0
                        ? reviews.reduce(
                            (sum, review) => sum + review.rating,
                            0
                          ) / reviews.length
                        : 0;

                    return (
                      <Link
                        to={`/petshop/detail/${storeItem.store_id}`} // 修正済みリンク
                        className="store-item"
                        key={storeItem.store_id}
                      >
                        {/* 店舗画像 */}
                        <div className="store-images">
                          {Array.isArray(storeItem.store_img) &&
                            storeItem.store_img.map((img, index) => (
                              <img
                                key={index}
                                src={img}
                                alt={`${storeItem.store_name} Image ${
                                  index + 1
                                }`}
                                className="store-image"
                              />
                            ))}
                        </div>

                        {/* レビューの評価 */}
                        <div className="star-rating-container">
                          <div className="star-container">
                            <div className="stars-background">★★★★★</div>
                            <div
                              className="stars-filled"
                              style={{
                                width: `${(averageRating / 5) * 100}%`,
                              }}
                            >
                              ★★★★★
                            </div>
                          </div>
                          <span className="average-rating-value">
                            {averageRating.toFixed(1)}
                          </span>
                        </div>

                        {/* 店舗情報 */}
                        <h3 className="store-name">{storeItem.store_name}</h3>
                        <p>{storeItem.store_description}</p>
                        <p>
                          <strong>住所: </strong>
                          {storeItem.store_address}
                        </p>
                        <p>
                          <strong>電話: </strong> {storeItem.store_phone_number}
                        </p>
                        <p>
                          <strong>営業時間: </strong>
                          {storeItem.store_opening_hours}
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

export default PetShopStoreList;
