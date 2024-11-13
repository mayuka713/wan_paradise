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
  const [selectedTagId, setSelectedTagId] = useState<number | null>(null);

  // 店舗データの取得
  useEffect(() => {
    const fetchStores = async () => {
      try {
        const response = await fetch(`http://localhost:5003/stores/list/${prefectureId}`);
        const data: Store[] = await response.json();
        setStores(data);
      } catch (error) {
        console.error("店舗情報の取得に失敗しました:", error);
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
        setTags(data);
      } catch (error) {
        console.error("タグ情報の取得に失敗しました:", error);
      }
    };
    fetchTags();
  }, []);

  // タグ選択のハンドリング
  const handleTagClick = (tagId: number) => {
    setSelectedTagId(tagId === selectedTagId ? null : tagId); // 同じタグを選択するとフィルタ解除
  };

  // フィルタリングされた店舗一覧
  const filteredStores = selectedTagId
    ? stores.filter((store) => store.tags.some((tag) => tag.id === selectedTagId))
    : stores;

  return (
    <div style={{ textAlign: "center", padding: "20px", backgroundColor: "#FAF3E0" }}>
    
      <p style={{ fontSize: "14px", marginBottom: "20px" }}>行きたいドッグランの条件を探す</p>

      {/* タグボタン */}
      <div style={{ display: "flex", flexWrap: "wrap", justifyContent: "center", gap: "10px" }}>
        {tags.map((tag) => (
          <button
            key={tag.id}
            style={{
              backgroundColor: selectedTagId === tag.id ? "#D1E8E2" : "#FFF",
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

      {/* フィルタリングされた店舗表示 */}
      <div style={{ marginTop: "30px" }}>
        {filteredStores.length > 0 ? (
          filteredStores.map((store) => (
            <div key={store.id} style={{ marginBottom: "20px" }}>
              <h3>{store.name}</h3>
              <p>{store.description}</p>
              <p>住所: {store.address}</p>
              <a href={store.store_url} target="_blank" rel="noopener noreferrer">
                URL
              </a>
              <br />
              <img src={store.store_img} alt={store.name} style={{ width: "200px", height: "auto" }} />
            </div>
          ))
        ) : (
          <p>該当するドッグランが見つかりません。</p>
        )}
      </div>
      <div style={{ marginTop: "30px", textAlign: "center" }}>
        <h2>タグ一覧</h2>
        <ul style={{ listStyle: "none", padding: 0 }}>
          {tags.map((tag) => (
            <li key={tag.id} style={{ padding: "5px" }}>
              {tag.name}
            </li>
          ))}
        </ul>
      </div>

    </div>
  );
};

export default DogRunStoreList;
