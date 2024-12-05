import React, { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";


interface Store {
  store_id: number;
  store_name: string;
  store_description: string;
  store_address: string;
  store_phone_number: string;
  store_dogrun_detail: string;
  store_img: string;
}

interface Tag {
  id: number;
  name: string;
  tag_type: number;
}

const DogRunStoreList: React.FC = () => {
  const { prefectureId } = useParams<{ prefectureId: string }>();
  const [store, setStore] = useState<Store[]>([]);
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

  // タグの一覧
  useEffect(() => {
    const fetchTags = async () => {
      try {
        const response = await fetch(`http://localhost:5003/tags`);
        const data: Tag[] = await response.json();
        //タグを分類する
        const type1 = data.filter((tag) => tag.tag_type === 1);
        const type2 = data.filter((tag) => tag.tag_type === 2);

        //状態を更新する
        setType1Tag(type1);
        setType2Tag(type2);
      } catch (error) {
        console.error("タグ情報の取得に失敗しました:", error);
      }
    };
    fetchTags();
  }, []);

  // 店舗データを取得
  useEffect(() => {
    const fetchStores = async () => {
      try {
        let url;
        if (selectedTagIds.length === 0) {
          // タグが選択されていない場合は全店舗を取得
          url = `http://localhost:5003/stores/list/store-type/${prefectureId}/1`;
        } else {
          // タグが選択されている場合はフィルタリング
          url = `http://localhost:5003/stores/list/tag/${prefectureId}?tagIds=${selectedTagIds.join(",")}`;
        }
        const response = await fetch(url);
        const data = await response.json();
        setStore(data);
      } catch (error) {
        console.error("店舗データの取得に失敗しました:", error);
      }
    };
    fetchStores();
  }, [prefectureId, selectedTagIds]);


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

  // タグ選択のハンドリング
  const handleTagClick = (tagId: number) => {
    setSelectedTagIds((prev) =>
      prev.includes(tagId) ? prev.filter((id) => id !== tagId) : [...prev, tagId]
    );
  };

  return (
    <div
      style={{
        textAlign: "center",
        padding: "20px",
        backgroundColor: "#FAF3E0",
      }}
    >

      <>
        <h2>{selectedPrefecture}のドッグラン</h2>
        <p
          style={{
            fontSize: "14px",
            marginBottom: "20px",
            fontWeight: "bold",
          }}
        >
          ドッグランの条件を絞り込む
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
              onClick={() => handleTagClick(tag.id)}
              style={{
                backgroundColor: selectedTagIds.includes(tag.id) ? "grey" : "white",
                color: "#282d27",
                padding: "10px 15px",
                border: "1px solid #333",
                borderRadius: "20px",
                cursor: "pointer",
                fontSize: "15px",
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
          ドッグランの設備
        </p>
        <div
          style={{
            display: "flex",
            flexWrap: "wrap",
            justifyContent: "center",
            gap: "10px",
          }}
        >
          {type2Tag.map((tag) => (
            <button
              key={tag.id}
              onClick={() => handleTagClick(tag.id)}
              style={{
                backgroundColor: selectedTagIds.includes(tag.id) ? "grey" : "white",
                color: "#282d27",
                padding: "10px 15px",
                border: "1px solid #333",
                borderRadius: "20px",
                cursor: "pointer",
                fontSize: "15px",
              }}
            >
              {tag.name}
            </button>
          ))}
        </div>
        {store && store.length > 0 && (
          store.map((storeItem) => (
            <Link
              to={`/dogrun/detail/${storeItem.store_id}`}
              style={{
                display: "inline-block",
                marginTop: "10px",
                padding: "10px 15px",
                backgroundColor: "gr",

                borderRadius: "5px",
              }}
            >
              <div
                key={storeItem.store_id}
                style={{
                  marginBottom: "30px",
                  border: "1px solid #000000",
                  borderRadius: "10px",
                  padding: "20px",
                  backgroundColor: "#fff",
                }}
              >
                <img
                  src={storeItem.store_img}
                  alt={storeItem.store_name}
                  style={{ width: "400px", height: "300px", borderRadius: "10px" }}
                />
                <p style={{ fontWeight: "bold" }}>{storeItem.store_name}</p>
                <p>{storeItem.store_description}</p>
                <p style={{ fontWeight: "bold", display: "inline" }}>住所:</p> <p style={{ display: "inline" }}>{storeItem.store_address}</p>
                <p>電話: {storeItem.store_phone_number}</p>
              </div>
            </Link>
          ))
        )}
      </>
    </div>
  );
};

export default DogRunStoreList;