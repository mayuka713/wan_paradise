import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

interface Store {
  id: number;
  name: string;
  description: string;
  address: string;
  phone_number: string;
  store_url: string;
  store_img: string;
  tags: Tag[];
}

interface Tag {
  id: number;
  name: string;
}

const DogRunStoreList: React.FC = () => {
  const { prefectureId } = useParams<{ prefectureId: string }>();
  const [stores, setStores] = useState<Store[]>([]);
  const [tags, setTags] = useState<Tag[]>([]);
  const [selectedPrefecture, setSelectedPrefecture] = useState<string>("");
  const [selectedTagIds, setSelectedTagIds] = useState<number[]>([]);

  // 店舗データの取得
  useEffect(() => {
    const fetchStores = async () => {
      try {
        const response = await fetch(
          `http://localhost:5003/stores/list/${prefectureId}`
        );
        const data = await response.json();

        if (response.ok) {
          setStores(data);
        } else {
          console.error("APIのレスポンスが配列ではありません:", data);
          setStores([]);
        }
      } catch (error) {
        console.error("店舗情報の取得に失敗しました:", error);
        setStores([]);
      }
    };
    fetchStores();
  }, [prefectureId]);

  // 都道府県名の設定
  useEffect(() => {
    const prefectureNames: { [key: string]: string } = {
      "1": "北海道",
      "13": "東京",
      "14": "神奈川",
      "23": "愛知",
      "26": "京都",
      "27": "大阪",
      "28": "兵庫",
    };

    setSelectedPrefecture(
      prefectureNames[prefectureId ?? ""] || "ドッグラン情報がありません"
    );
  }, [prefectureId]);

  // タグデータの取得
  useEffect(() => {
    const fetchTags = async () => {
      try {
        const response = await fetch("http://localhost:5003/tags");
        const data: Tag[] = await response.json();
        setTags(data);
      } catch (error) {
        console.error("タグ情報の取得に失敗しました:", error);
      }
    };
    fetchTags();
  }, []);

  // タグ選択のハンドリング
  const handleTagClick = (tagId: number) => {
    setSelectedTagIds((prevSelectedTagIds) =>
      prevSelectedTagIds.includes(tagId)
        ? prevSelectedTagIds.filter((id) => id !== tagId)
        : [...prevSelectedTagIds, tagId]
    );
  };

  // フィルタリングされた店舗一覧
  const filteredStores =
    selectedTagIds.length > 0
      ? stores.filter((store) =>
        selectedTagIds.every((tagId) =>
          store.tags.some((tag) => tag.id === tagId)
        )
      ): stores;

  const isPrefectureSupported =
    selectedPrefecture !== "ドッグラン情報がありません";

  return (
    <div
      style={{
        textAlign: "center",
        padding: "20px",
        backgroundColor: "#FAF3E0",
      }}>
      {isPrefectureSupported ? (
        <>
          <h2>{selectedPrefecture}のドッグラン</h2>
          <p style={{ fontSize: "14px", marginBottom: "20px" }}>
            行きたいドッグランの条件を探す
          </p>
          <div
            style={{
              display: "flex",
              flexWrap: "wrap",
              justifyContent: "center",
              gap: "10px",
            }}>
            {tags.map((tag) => (
              <button
                key={tag.id}
                onClick={() => handleTagClick(tag.id)}
                style={{
                  backgroundColor: selectedTagIds.includes(tag.id)
                    ? "#D1E8E2"
                    : "#FFF",
                  color: "#333",
                  padding: "10px 15px",
                  border: "1px solid #333",
                  borderRadius: "20px",
                  cursor: "pointer",
                  fontSize: "14px",
                }}>
                {tag.name}
              </button>
            ))}
          </div>
          {filteredStores.map((store) => {
            console.log("store_img:", store.store_img);

            return (
              <div key={store.id} style={{ marginBottom: "20px" }}>
                <h3>{store.name}</h3>
                <p>{store.description}</p>
                <p>住所: {store.address}</p>
                <a href={store.store_url}target="_blank" rel="noopener noreferrer">URL</a>
                <br />
                <img src={store.store_img || "/images/Dogrun/dogrun_tsubasa.png"} alt={store.name} style={{ width: "200px", height: "auto" }} onError={(e) => {
                  e.currentTarget.src = "/images/Dogrun/dogrun_tsubasa.png"; // エラー時代替画像
                  }}/>
              </div>
            );
          })}
        </>
      ) : (
        <>
          <h2>ドッグラン情報がありません</h2>
          <p>該当するドッグランが見つかりません。</p>
        </>
      )}
    </div>
  );
};

export default DogRunStoreList;
