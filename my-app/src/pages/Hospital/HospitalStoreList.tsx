import React, { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";

interface Store {
  store_id: number;
  store_name: string;
  store_description: string;
  store_address: string;
  store_opening_hours: string;
  store_phone_number: string;
  store_url: string;
  store_img: string;
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

  // 店舗データを取得
  useEffect(() => {
    const fetchStores = async () => {
      try {
        let url;
        if (selectedTagIds.length === 0) {
          url = `http://localhost:5003/stores/list/store-type/${prefectureId}/4`;
        } else {
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

  //バックエンドへのリクエスト箇所
  // タグの一覧
  useEffect(() => {
    const fetchTags = async () => {
      try {
        const response = await fetch(`http://localhost:5003/tags`);//http://localhost:5003/tagsがバックエンドリクエスト先
        const data: Tag[] = await response.json();
        const type5 = data.filter((tag) => tag.tag_type === 5);
        setType5Tag(type5);
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
    const selectedName = prefectureNames[prefectureId ?? ""] || "動物病院の情報がありません";
    setSelectedPrefecture(selectedName);
  }, [prefectureId]);



  // タグ選択のハンドリング
  const handleTagClick = (tagId: number) => {
    setSelectedTagIds((prev) =>
      prev.includes(tagId) ? prev.filter((id) => id !== tagId) : [...prev, tagId]
    );
  };


  return (
    <>
    {/* ヘッダー */}
    <header
      style={{
        textAlign: "center",
        fontSize: "20px",
        fontWeight: "bold",
        backgroundColor: "rgb(250, 243, 224)",
        color: "black",
        padding: "10px 0",
      }}
    >
      wan paradise
    </header>

    <div
      style={{
        textAlign: "center",
        padding: "20px",
        backgroundColor: "#FAF3E0",
      }}>
     {error ? (
          <p style={{ color: "red" }}>{error}</p>
     ) : selectedPrefecture === "動物病院の情報がありません" ? (
        <h2 style={{ fontWeight: "bold" }}>{selectedPrefecture}</h2>
      ) : (
        <>
          <h2 style={{ fontWeight: "bold" }}>{selectedPrefecture}の動物病院の一覧</h2>
          <p
            style={{
              fontSize: "14px",
              marginBottom: "20px",
              fontWeight: "bold",
            }}
          >
            動物病院の条件を絞り込む
          </p>
          <div
            style={{
              display: "flex",
              flexWrap: "wrap",
              justifyContent: "center",
              gap: "10px",
            }}
          >
            {type5Tag.map((tag) => (
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
          {store.length > 0 ? (
            store.map((storeItem) => (
              <Link
                key={storeItem.store_id}
                to={`/hospital/detail/${storeItem.store_id}`}
                style={{
                  display: "inline-block",
                  marginTop: "10px",
                  padding: "10px 15px",
                  borderRadius: "5px",
                }}
              >
                <div
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
          ) : (
            <p>動物病院の情報がありませんでした</p>
          )}
        </>
      )}
    </div>
    </>
    );
  };

export default HospitalStoreList;

