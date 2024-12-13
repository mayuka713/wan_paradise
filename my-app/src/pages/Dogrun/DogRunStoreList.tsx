import React, { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";

interface Store {
  store_id: number;
  store_name: string;
  store_description: string;
  store_address: string;
  store_opening_hours: string;
  store_phone_number: string;  
  store_dogrun_detail: string;
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

const DogRunStoreList: React.FC = () => {
  const { prefectureId } = useParams<{ prefectureId: string }>();
  const [store, setStore] = useState<Store[]>([]);
  const [type1Tag, setType1Tag] = useState<Tag[]>([]);
  const [type2Tag, setType2Tag] = useState<Tag[]>([]);
  const [selectedPrefecture, setSelectedPrefecture] = useState<string>("");
  const [selectedTagIds, setSelectedTagIds] = useState<number[]>([]);
  const [error, setError] = useState<string | null>(null);

  // タグの一覧を取得する
  useEffect(() => {
    const fetchTags = async () => {
      try {
        const response = await fetch(`http://localhost:5003/tags`);
        if (!response.ok) {
          throw new Error("タグ情報の取得に失敗しました");
        }
        const data: Tag[] = await response.json();
        const type1 = data.filter((tag) => tag.tag_type === 1);
        const type2 = data.filter((tag) => tag.tag_type === 2);

        setType1Tag(type1);
        setType2Tag(type2);
        setError(null); // エラーをリセット
      } catch (error) {
        console.error(error);
        setError("タグ情報の取得に失敗しました");
      }
    };
    fetchTags();
  }, []);

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
    const selectedName = prefectureNames[prefectureId ?? ""] || "ドッグラン情報がありません";
    setSelectedPrefecture(selectedName);
  }, [prefectureId]);

  // タグ選択のハンドリング
  const handleTagClick = (tagId: number) => {
    setSelectedTagIds((prev) =>
      prev.includes(tagId) ? prev.filter((id) => id !== tagId) : [...prev, tagId]
    );
  };

  // 店舗データとレビューを取得して設定する関数
  const fetchStores = async () => {
    try {
      let storeUrl = `http://localhost:5003/stores/list/${prefectureId}`;
      if (selectedTagIds.length > 0) {
        storeUrl = `http://localhost:5003/stores/list/tag/${prefectureId}?tagIds=${selectedTagIds.join(",")}`;
      }

      const storeResponse = await fetch(storeUrl);

      if (!storeResponse.ok) {
        throw new Error("サーバーからデータを取得できませんでした");
      }

      const storeData: Store[] = await storeResponse.json();
      setStore(storeData);
    } catch (error) {
      console.error("データ取得中にエラーが発生しました:", error);
    }
  };

  // 店舗データとレビューを取得する
  useEffect(() => {
    fetchStores();
  }, [prefectureId, selectedTagIds]);

  return (
    <>
      {/* ヘッダー */}
      <header
        style={{
          fontFamily: "NewCezannePro-M, FOT-ニューセザンヌ Pro M, sans-serif",
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
        }}
      >
        {selectedPrefecture === "ドッグラン情報がありません" ? (
          <h2>{selectedPrefecture}</h2>
        ) : (
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
                    backgroundColor: selectedTagIds.includes(tag.id) ? "#859F3D" : "white",
                    color: "#282d27",
                    padding: "10px 15px",
                    borderRadius: "20px",
                    cursor: "pointer",
                    fontSize: "15px",
                    transition: "all 0.3s ease",
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
                    backgroundColor: selectedTagIds.includes(tag.id) ? "#859F3D" : "white",
                    color: selectedTagIds.includes(tag.id) ? "white" : "black",
                    padding: "10px 15px",
                    borderRadius: "20px",
                    cursor: "pointer",
                    fontSize: "15px",
                    transition: "all 0.3s ease",
                  }}
                >
                  {tag.name}
                </button>
              ))}
            </div>
            {error && <p style={{ color: "red" }}>{error}</p>}
            {store.length > 0  &&
              store.map((storeItem) => (
                <Link
                  key={storeItem.store_id}
                  to={`/dogrun/detail/${storeItem.store_id}`}
                  style={{
                    display: "inline-block",
                    marginTop: "10px",
                    padding: "10px 15px",
                    borderRadius: "5px",
                    textDecoration: "none",
                    color: "inherit",
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
                      style={{ width: "300px", height: "300px", borderRadius: "10px" }}
                    />
                    <p style={{ fontWeight: "bold" }}>{storeItem.store_name}</p>
                    <p>{storeItem.store_description}</p>
                    <p style={{ fontWeight: "bold", display: "inline" }}>住所:</p>{" "}
                    <p style={{ display: "inline" }}>{storeItem.store_address}</p>
                    <br />
                    <p style={{ fontWeight: "bold", display: "inline" }}>電話: {storeItem.store_phone_number}</p>
                    <br />
                    <p style={{ fontWeight: "bold", display: "inline" }}>営業時間:</p>{" "}
                    <p style={{ display: "inline " }}>{storeItem.store_opening_hours}</p>
                     </div>
                  </Link>
                  ))}
              </>
            )}
        </div>
       </>
     );
   };

export default DogRunStoreList;
