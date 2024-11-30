import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

interface Store {
  store_id: number;
  store_name: string;
  store_description: string;
  store_address: string;
  store_phone_number: number;
  store_url: string;
  store_img: string;
  reference: string;

}

interface Tag {
  id: number;
  name: string;
  tag_type: number;
}

interface FacilityTag {
  id: number;
  name: string;
}

const DogRunStoreList: React.FC = () => {
  const { prefectureId } = useParams<{ prefectureId: string }>();
  const [store, setStore] = useState<Store[]>([]);
  const [tags, setTags] = useState<Tag[]>([]);
  const [type1Tag, setType1Tag] = useState<Tag[]>([]);
  const [type2Tag, setType2Tag] = useState<Tag[]>([]);
  const [selectedPrefecture, setSelectedPrefecture] = useState<string>("");
  const [selectedTagIds, setSelectedTagIds] = useState<number[]>([]);


  // 店舗データを取得する
  useEffect(() => {
    const fetchStores = async () => {
      try {
        const response = await fetch(
          `http://localhost:5003/stores/list/${prefectureId}`
        );
        const data = await response.json();
        setStore(data);
      } catch (error) {
        console.error("店舗データの取得に失敗しました:", error);
      }
    };
    fetchStores();
  }, [prefectureId]);

  // タグデータの取得
  useEffect(() => {
    const fetchTags = async () => {
      try {
        const response = await fetch("http://localhost:5003/tags");
        const data: Tag[] = await response.json();
        //タグを分類する
        const type1 = data.filter((tag) => tag.tag_type === 1);
        const type2 = data.filter((tag) => tag.tag_type === 2);

        //状態を更新する
        setTags(data);
        setType1Tag(type1);
        setType2Tag(type2);
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

  // 各都道府県の表示
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

  const isPrefectureSupported =
    selectedPrefecture !== "ドッグラン情報がありません";

  return (
    <div
      style={{
        textAlign: "center",
        padding: "20px",
        backgroundColor: "#FAF3E0",
      }}
    >
      {isPrefectureSupported && (
        <>
          <h2>{selectedPrefecture}のドッグラン</h2>
          <p
            style={{
              fontSize: "14px",
              marginBottom: "20px",
              fontWeight: "bold",
            }}
          >
            条件を絞り込む
          </p>
          <div
            style={{
              display: "flex",
              flexWrap: "wrap",
              justifyContent: "center",
              gap: "10px",
            }}
          >
            {type1Tag.map((tag) => (
              <button
                key={tag.id}
                onClick={() => console.log(`Tag ${tag.id} clicked`)}
                style={{
                  backgroundColor: selectedTagIds.includes(tag.id)
                    ? "#D1E8E1"
                    : "#FFF",
                  color: "#333",
                  padding: "10px 15px",
                  border: "1px solid #333",
                  borderRadius: "20px",
                  cursor: "pointer",
                  fontSize: "14px",
                }}
              >
                {tag.name}
              </button>
            ))}
            {type2Tag.map((tag) => (
              <button
                key={tag.id}
                onClick={() => console.log(`Tag ${tag.id} clicked`)}
                style={{
                  backgroundColor: "#FFF",
                  color: "#333",
                  padding: "10px 15px",
                  border: "1px solid #333",
                  borderRadius: "20px",
                  cursor: "pointer",
                  fontSize: "14px",
                }}
              >
                {tag.name}
              </button>
            ))}
          </div>
          <p
            style={{
              fontSize: "14px",
              marginBottom: "20px",
              fontWeight: "bold",
            }}
          >
            設備
          </p>
          <div
            style={{
              display: "flex",
              flexWrap: "wrap",
              justifyContent: "center",
              gap: "10px",
            }}
          >
          </div>
          {store && store.length > 0 && (
            store.map((storeItem) => (
              <div key={storeItem.store_id} style={{ marginBottom: "30px" }}>
                <img
                  src={storeItem.store_img}
                  alt={storeItem.store_name}
                  style={{ width: "400px", height: "300px" }}
                />
                <p>{storeItem.store_name}</p>
                <p>引用: Photostudio S CO.LTD</p>
                <p>{storeItem.store_description}</p>
                <p>住所: {storeItem.store_address}</p>
                <p>電話: {storeItem.store_phone_number}</p>
                <a
                  href={storeItem.store_url}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  お店の詳細
                </a>
              </div>
            ))
          )}
        </>
      )}
    </div>
  );
};

export default DogRunStoreList;
