import React, { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";

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

  // 店舗データ取得
  useEffect(() => {
    const fetchStores = async () => {
      try {
        const queryString = selectedTagIds.length > 0 ? `?tagIds=${selectedTagIds.join(",")}` : "";
        const response = await fetch(`http://localhost:5003/dogcafe/list/${prefectureId}${queryString}`);
        if (!response.ok) {
          throw new Error("店舗データの取得に失敗しました");
        }
        const data: Store[] = await response.json();
        setStore(data);
      } catch (error) {
        console.error("店舗データ取得エラー:", error);
        setError("店舗データの取得に失敗しました");
      }
    };
    fetchStores();
  }, [prefectureId, selectedTagIds]);

  // タグ選択ロジック
  const handleTagClick = (tagId: number) => {
    setSelectedTagIds((prev) =>
      prev.includes(tagId) ? prev.filter((id) => id !== tagId) : [...prev, tagId]
    );
  };

  return (
    <>
      <header style={{ textAlign: "center", fontSize: "24px", padding: "10px" }}>
        Wan Paradise
      </header>

      <div style={{ textAlign: "center", padding: "20px", backgroundColor: "#FAF3E0" }}>
        {selectedPrefecture === "ドッグカフェ情報がありません" ? (
          <h2>{selectedPrefecture}</h2>
        ) : (
          <>
            <h2>{selectedPrefecture}のドッグカフェ</h2>
            <p style={{ fontSize: "14px", fontWeight: "bold", marginBottom: "20px" }}>
              ドッグカフェの条件を絞り込む
            </p>
            <div style={{ display: "flex", flexWrap: "wrap", justifyContent: "center", gap: "10px" }}>
              {tags.map((tag) => (
                <button
                  key={tag.id}
                  onClick={() => handleTagClick(tag.id)}
                  style={{
                    backgroundColor: selectedTagIds.includes(tag.id) ? "#859F3D" : "white",
                    color: "#282d27",
                    padding: "10px 15px",
                    borderRadius: "20px",
                    cursor: "pointer",
                    border: "1px solid #ccc",
                  }}
                >
                  {tag.name}
                </button>
              ))}
            </div>
            {error && <p style={{ color: "red" }}>{error}</p>}

            <div style={{ marginTop: "20px" }}>
              {store.length === 0 ? (
                <p>該当する店舗が見つかりませんでした。</p>
              ) : (
                store.map((storeItem) => (
                  <Link
                    key={storeItem.store_id}
                    to={`/dogcafe/detail/${storeItem.store_id}`}
                    style={{ textDecoration: "none", color: "inherit" }}
                  >
                    <div
                      style={{
                        border: "1px solid #ccc",
                        borderRadius: "10px",
                        padding: "20px",
                        marginBottom: "20px",
                        backgroundColor: "#fff",
                      }}
                    >
                      <img
                        src={storeItem.store_img}
                        alt={storeItem.store_name}
                        style={{ width: "300px", height: "300px", borderRadius: "10px" }}
                      />
                      <h3>{storeItem.store_name}</h3>
                      <p>{storeItem.store_description}</p>
                      <p>
                        <strong>住所:</strong> {storeItem.store_address}
                      </p>
                      <p>
                        <strong>電話:</strong> {storeItem.store_phone_number}
                      </p>
                      <p>
                        <strong>営業時間:</strong> {storeItem.store_opening_hours}
                      </p>
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
