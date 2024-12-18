import { log } from "node:console";
import React, { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";

interface Store {
  store_id: number;
  store_name: string;
  store_description: string;
  store_address: string;
  store_opening_hours: number;
  store_phone_number: string;
  store_url: string;
  store_img: string;
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


const DogCafesStoreList: React.FC = () => {
  const { prefectureId } = useParams<{ prefectureId: string }>();
  const [store, setStore] = useState<Store[]>([]);
  const [type3Tag, setType3Tag] = useState<Tag[]>([]);
  const [selectedPrefecture, setSelectedPrefecture ] = useState<string>("");
  const [selectedTagIds, setSelectedTagIds] = useState<number[]>([]);
  const [error, setError] = useState<string | null>(null);


  //バックエンドへのリクエスト箇所
  // タグの一覧
  useEffect(() => {
    const fetchTags = async () => {
      try {
        const response = await fetch(`http://localhost:5003/tags`);//http://localhost:5003/tagsがバックエンドリクエスト先
        const data: Tag[] = await response.json();
        const type3 = data.filter((tag) => tag.tag_type === 3);
        setType3Tag(type3);
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
      "1": "札幌",
      "13": "東京",
      "14": "神奈川",
      "23": "愛知",
      "26": "京都",
      "27": "大阪",
      "28": "兵庫",
    };
    const selectedName = prefectureNames[prefectureId ?? ""] || "ドッグカフェ情報がありません";
    setSelectedPrefecture(selectedName);
  }, [prefectureId]);

   // タグ選択のハンドリング
   const handleTagClick = (tagId: number) => {
    setSelectedTagIds((prev: number []) => 
     prev.includes(tagId) ? prev.filter((id: number) => id !== tagId)
    ); 



  // 店舗データを取得
  useEffect(() => {
    const fetchStores = async () => {
      try {
        let url = `http://localhost:5003/stores/list/store-type/${prefectureId}/3`;
        if (selectedTagIds.length === 0) {
          // タグが選択されている場合はフィルタリング
          url = `http://localhost:5003/stores/list/tag/${prefectureId}?tagIds=${selectedTagIds.join(",")}`;
        }
        
        const response = await fetch(url); 
        if (!response.ok) {
          throw new Error("データ取得に失敗しました");
        }

        const data = await response.json();
        console.log("取得した店舗データ:", data);
        setStore(data);
      } catch (error) {
        console.error("店舗データの取得に失敗しました:", error);
      }
    };

    fetchStores();
  }, [prefectureId, selectedTagIds]);



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
      }}
      >
      {selectedPrefecture === "ドッグカフェ情報がありません" ? (
        <h2>{selectedPrefecture}</h2>
      ) : (
        <>
          <h2>{selectedPrefecture}のドッグカフェ</h2>
          <p
            style={{
              fontSize: "14px",
              marginBottom: "20px",
              fontWeight: "bold",
            }}
          >
            ドッグカフェの条件を絞り込む
          </p>
          <div
            style={{
              display: "flex",
              flexWrap: "wrap",
              justifyContent: "center",
              gap: "10px",
            }}
          >
            {type3Tag.map((tag) => (
              <button
                key={tag.id}
                onClick={() => handleTagClick(tag.id)}
                style={{
                  backgroundColor: selectedTagIds.includes(tag.id) ? "#859F3D" : "white",
                  color: "#282d27",
                  padding: "10px 15px",
                  border: "1px solid #333",
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
             <Link
                key={storeItem.store_id}
                to={`/dogcafe/detail/${storeItem.store_id}`}
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
                  <p style={{ fontWeight: "bold", display: "inline" }}>住所:</p> 
                  <p style={{ display: "inline" }}>{storeItem.store_address}</p>
                  <p>電話: {storeItem.store_phone_number}</p>
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

export default DogCafesStoreList;


