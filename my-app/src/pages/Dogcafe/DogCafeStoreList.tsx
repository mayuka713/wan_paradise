import React, { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import "./DogCafeStoreList.css";

interface Store {
  store_id: number;
  store_name: string;
  store_description: string;
  store_address: string;
  store_opening_hours: string;
  store_phone_number: string;
  store_dogcafe_detail: string;
  store_img: string;
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
  const [selectedPrefecture, setSelectedPrefecture] = useState<string>("ドッグカフェ情報がありません");
  const [error, setError] = useState<string | null>(null);

  // タグデータ取得
  useEffect(() => {
    const fetchTags = async () => {
      try {
        const response = await fetch("http://localhost:5003/tags");
        if (!response.ok) {
          throw new Error("タグ情報の取得に失敗しました");
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
    setSelectedPrefecture(prefectureNames[prefectureId ?? ""] || "ドッグカフェ情報がありません");
  }, [prefectureId]);


  // タグ選択のハンドリング
  const handleTagClick = (tagId: number) => {
    setSelectedTagIds((prev) =>
      prev.includes(tagId) ? prev.filter((id) => id !== tagId) : [...prev, tagId]
    );
  };
  // 店舗データ取得
  useEffect(() => {
    const fetchStores = async () => {
      try {
        let url = `http://localhost:5003/stores/list/${prefectureId}/2`;
        if ( selectedTagIds.length > 0) {
          url = `http://localhost:5003/stores/list/tag/${prefectureId}/2?tagIds=${selectedTagIds.join(",")}`;
        }
        const response = await fetch(url);
          if (!response.ok) {
            throw new Error("データ取得に失敗しました");
          }
          const data = await response.json();
          console.log("取得した店舗データ:", data);
          setStore(data);
      } catch (error) {
        console.error("店舗データ取得エラー:", error);
      }
    };
    fetchStores();
  }, [prefectureId, selectedTagIds]);

  return (
    <>
      <header className="header">Wan Paradise</header>
      <div className="content">
        {selectedPrefecture === "ドッグカフェ情報がありません" ? (
          <h2>{selectedPrefecture}</h2>
        ) : (
          <>
            <h2>{selectedPrefecture}のドッグカフェ</h2>
            <div className="tags-container">
              {tags.map((tag) => (
                <button
                  key={tag.id}
                  onClick={() => handleTagClick(tag.id)}
                  className={`tag-button ${selectedTagIds.includes(tag.id) ? "selected" : ""}`}
                >
                  {tag.name}
                </button>
              ))}
            </div>
            {error && <p className="error-message">{error}</p>}
            <div className="store-list">
              {store.length === 0 ? (
                <p className="no-store-message">該当する店舗が見つかりませんでした。</p>
              ) : (
                store.map((storeItem) => (
                  <Link
                    key={storeItem.store_id}
                    to={`/dogcafe/detail/${storeItem.store_id}`}
                    className="store-card"
                  >
                    <img src={storeItem.store_img} alt={storeItem.store_name} className="store-image" />
                    <div className="store-info">
                      <h3 className="store-name">{storeItem.store_name}</h3>
                      <p className="store-description">{storeItem.store_description}</p>
                      <p><strong>住所:</strong> {storeItem.store_address}</p>
                      <p><strong>電話:</strong> {storeItem.store_phone_number}</p>
                      <p><strong>営業時間:</strong> {storeItem.store_opening_hours}</p>
                    </div>
                  </Link>
                ))
              )}
            </div>
          </>
        )}
      </div>
    </>
  );
};


export default DogCafeStoreList;
