import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

interface Store {
  store_id: number;
  store_name: string;
  store_description: string;
  store_address: string;
  store_opening_hours: number;
  store_phone_number: string;
  store_url: string;
  store_img: string;
  tags: { id: number; name: string }[];
}


interface Tag{
  id: number;
  name: string;
  tag_type: number;
} 


const DogCafesStoreList: React.FC = () => {
  const { prefectureId } = useParams<{ prefectureId: string }>();
  const [store, setStore] = useState<Store[]>([]);
  const [type3Tag, setType3Tag] = useState<Tag[]>([]);
  const [selectedTagIds, setSelectedTagIds] = useState<number[]>([]);
  const [selectedPrefecture, setSelectedPrefecture] = useState<string>("");


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
          url = `http://localhost:5003/stores/list/store-type/${prefectureId}/3`;
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




  // 都道府県名を設定
  useEffect(() => {
    const prefectureNames: { [key: string]: string } = {
      "1":  "札幌",
      "13": "東京",
      "14": "神奈川",
      "23": "愛知",
      "26": "京都",
      "27": "大阪",
      "28": "兵庫",
    };
    if (prefectureId && prefectureId in prefectureNames) {
      setSelectedPrefecture(prefectureNames[prefectureId]);
    } else {
      setSelectedPrefecture("ドッグカフェ情報がありません");
    }
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
      {selectedPrefecture === "ドッグカフェ情報がありません" ? (
        <h2 style={{ fontWeight: "bold" }}>{selectedPrefecture}</h2>
      ) : (
        <>
          <h2 style={{ fontWeight: "bold" }}>{selectedPrefecture}のドッグカフェ</h2>
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
                <img src={storeItem.store_img} alt={storeItem.store_name} style={{ width: "400px", height: "300px", borderRadius: "10px" }}/>
                <p style={{ fontWeight: "bold" }}>{storeItem.store_name}</p>
                <p>{storeItem.store_description}</p>
                <p style={{ fontWeight: "bold", display: "inline" }}>住所:</p><p style={{ display: "inline"}}>{storeItem.store_address}</p>
                <p style={{ display: "inline" }}>{storeItem.store_address}</p><br />
                <p style= {{ fontWeight: "bold", display: "inline"}}>営業時間:</p> <p style={{ display: "inline"}}>{storeItem.store_opening_hours}</p><br />
                <p style= {{ fontWeight: "bold", display: "inline"}}>電話: </p> <p style= {{ display: "inline" }}>{storeItem.store_phone_number}</p><br />
                <a  href={storeItem.store_url} target="_blank" rel="noopener noreferrer">お店の詳細</a>
              </div>
            ))
          ) :  null } {
          }
        </>
      )}
    </div>
  );
};

export default DogCafesStoreList;




  