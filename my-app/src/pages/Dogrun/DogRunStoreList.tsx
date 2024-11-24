import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

interface Store {
  store_id: number;
  store_name: string;
  store_description: string;
  store_address: string;
  store_phone: number;
  store_url: string;
  store_img: string;
}

interface StoreTag {
  id: number;
  name: string;
  description: string;
  address: string;
  phone_number: number;
  store_url: string;
  store_img: string;
  tags: Tag[];
}

interface Tag {
  id: number;
  name: string;
}

interface FacilityTag {
  id: number;
  name: string;
}

const DogRunStoreList: React.FC = () => {
  const { prefectureId } = useParams<{ prefectureId: string }>();
  const [store, setStore] = useState<Store[]>([]);
  const [stores, setStores] = useState<StoreTag[]>([]);
  const [tags, setTags] = useState<Tag[]>([]);
  const [tagsFacility, setTagsFacility] = useState<FacilityTag[]>([]);
  const [selectedPrefecture, setSelectedPrefecture] = useState<string>("");
  const [selectedTagIds, setSelectedTagIds] = useState<number[]>([]);
  const [selectedFacilityTagIds, setSelectedFacilityTagIds] = useState<number[]>([]);

  // ストアデータの取得
  useEffect(() => {
    const fetchStore = async () => {
      try {
        const response = await fetch(`http://localhost:5003/stores/list/${prefectureId}`);
        const data: Store[] = await response.json();
        setStore(data);
      } catch (error) {
        console.error("設備タグ情報の取得に失敗しました:", error);
      }
    };
    fetchStore();
  }, []);


  // 店舗データの取得
  useEffect(() => {
    if (selectedTagIds.length === 0 && selectedFacilityTagIds.length === 0) {
      setStores([]);
      return;
    }

    const fetchStoresByTags = async () => {
      try {
        const response = await fetch(`http://localhost:5003/stores/list/${prefectureId}?tags=${selectedTagIds.join(",")}`
        );
        const data = await response.json();
        setStores(data);
        console.log("バックエンドからのデータ:", data);
      } catch (error) {
        console.error("該当する店舗情報が見つかりませんでした:", error);
      }
    };

    fetchStoresByTags();
  }, [selectedTagIds, selectedFacilityTagIds, prefectureId]);

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
        console.log("取得したタグデータ:", data);
        setTags(data);
      } catch (error) {
        console.error("タグ情報の取得に失敗しました:", error);
      }
    };
    fetchTags();
  }, []);

  // 設備タグデータの取得
  useEffect(() => {
    const fetchTagsFacility = async () => {
      try {
        const response = await fetch("http://localhost:5003/tags_facility");
        const data: FacilityTag[] = await response.json();
        console.log("取得した設備タグデータ:", data);
        setTagsFacility(data);
      } catch (error) {
        console.error("設備タグ情報の取得に失敗しました:", error);
      }
    };
    fetchTagsFacility();
  }, []);


  // タグ選択のハンドリング
  const handleTagClick = (tagId: number) => {
    setSelectedTagIds((prevSelectedTagIds) => {
      const updatedTags = prevSelectedTagIds.includes(tagId)
        ? prevSelectedTagIds.filter((id) => id !== tagId)
        : [...prevSelectedTagIds, tagId];
      return updatedTags;
    });
  };

  // 設備タグ選択のハンドリング
  const handleFacilityTagClick = (facilityTagId: number) => {
    setSelectedFacilityTagIds((prevSelectedFacilityTagIds) => {
      const updatedFacilityTags = prevSelectedFacilityTagIds.includes(facilityTagId)
        ? prevSelectedFacilityTagIds.filter((id) => id !== facilityTagId)
        : [...prevSelectedFacilityTagIds, facilityTagId];
      return updatedFacilityTags;
    });
  };

  // フィルタリングされた店舗一覧
  const filteredStores = stores.filter(
    (store) =>
      store.tags.some((tag) => selectedTagIds.includes(tag.id)) &&
      (selectedFacilityTagIds.length === 0 ||
        selectedFacilityTagIds.some((facilityId) => store.tags.some((tag) => tag.id === facilityId)))
  );

  const isPrefectureSupported = selectedPrefecture !== "ドッグラン情報がありません";

  return (
    <div style={{
      textAlign: "center",
      padding: "20px",
      backgroundColor: "#FAF3E0",
    }}
    >
      {isPrefectureSupported ? (
        <>
          <h2>{selectedPrefecture}のドッグラン</h2>
          <p style={{
            fontSize: "14px",
            marginBottom: "20px",
            fontWeight: "bold",
            fontFamily: "'ゴシック', YuGothic,'游ゴシック体',sans-serif",
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
            {tags.map((tag) => (
              <button
                key={tag.id}
                onClick={() => handleTagClick(tag.id)}
                style={{
                  backgroundColor: selectedTagIds.includes(tag.id) ? "#D1E8E1" : "#FFF",
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
              fontFamily: "'ゴシック', YuGothic,'游ゴシック体',sans-serif",
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
            {tagsFacility.map((facility) => (
              <button
                key={facility.id}
                onClick={() => handleFacilityTagClick(facility.id)}
                style={{
                  backgroundColor: selectedFacilityTagIds.includes(facility.id)
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
                {facility.name}
              </button>
            ))}
          </div>

          {store.map((store) => (
            <div key={store.store_id} style={{ marginBottom: "20px" }}>
              <h3>{store.store_name}</h3>
              <p>{store.store_description}</p>
              <p>住所: {store.store_address}</p>
              <br/>
              <img
                src={store.store_img}
                alt={store.store_name}
                style={{ width: "200px", height: "300" }} />
              <a href={store.store_url} target="_blank" rel="noopener noreferrer">
                URL
              </a>
            </div>
          ))}
        </>
      ) : (
        <>
          <h2>ドッグラン情報がありません</h2>
        </>
      )}
    </div>
  );
};

export default DogRunStoreList;
