import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

interface Shop {
  id: number;
  name: string;
  description: string;
  address: string;
  phone_number: string;
  store_url: string;
  store_img: string;
  tags: { id: number; name: string }[];
}

interface DogCafeTag {
  id: number;
  name: string;
}



const DogCafeStoreList: React.FC = () => {
  const { prefectureId } = useParams<{ prefectureId: string }>();
  const [stores, setStores ] = useState<Shop[]>([]);
  const [selectedDogCafeTagIds, setSelectedDogCafeTagIds] = useState<number[]>([]);
  const [dogCafeTags, setDogCafeTags] = useState<DogCafeTag[]>([]);
  const [selectedPrefecture, setSelectedPrefecture] = useState<string>("");

  // タグデータの取得
  useEffect(() => {
    const fetchDogCafeTags = async () => {
      try {
        const response = await fetch(`http://localhost:5003/dog_cafe_tags/list?prefecture=${prefectureId}`);
        const data: DogCafeTag[] = await response.json();
        setDogCafeTags(data);
      } catch (error) {
        console.error("タグ情報の取得に失敗しました:", error);
      }
    };
    if (prefectureId) {
    fetchDogCafeTags();
    }
  }, [prefectureId]);

  
//店舗データの取得
  useEffect(() => {
    const fetchDogCafeStores = async () => {
      try {
        const queryParams = new URLSearchParams(); 
         if (selectedDogCafeTagIds.length > 0) {
          queryParams.append("tags", selectedDogCafeTagIds.join(","));
         }
         //APIからデータを取得する
        const response = await fetch(`http://localhost:5003/dogcafetags?prefecture&${prefectureId}&&{queryParams.toString()}`);
        const data: Shop[] =  await response.json();
        setStores(data);
    } catch (error) {
      console.error("データー取得中にエラーが発生しました:", error);
    }
  };
   if (prefectureId) {
    fetchDogCafeStores();
   }
    }, [ prefectureId, selectedDogCafeTagIds]);



  // 店舗データのフィルタリング
  const filteredDogCafeStores = stores.filter((store) =>
    selectedDogCafeTagIds.length === 0
      ? true
      : store.tags.some((tag) => selectedDogCafeTagIds.includes(tag.id))
  );

  // タグ選択ハンドラー
  const handleClickDogCafeTag = (dogCafeTagId: number) => {
    setSelectedDogCafeTagIds((prevSelectedDogCafeTagIds) =>
      prevSelectedDogCafeTagIds.includes(dogCafeTagId)
        ? prevSelectedDogCafeTagIds.filter((id) => id !== dogCafeTagId)
        : [...prevSelectedDogCafeTagIds, dogCafeTagId]
    );
  };

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
      prefectureNames[prefectureId ?? ""] || "ドッグカフェ情報がありません"
    );
  }, [prefectureId]);

  const isPrefectureSupported =
    selectedPrefecture !== "ドッグカフェ情報がありません";

  return (
    <div
      style={{
        textAlign: "center",
        padding: "20px",
        backgroundColor: "#FAF3E0",
      }}
    >
      {isPrefectureSupported ? (
        <>
          <h2>{selectedPrefecture}のドッグカフェ</h2>
          <p>条件を絞り込む</p>
          <div>
            {dogCafeTags.map((dogCafeTags) => (
              <button
                key={dogCafeTags.id}
                onClick={() => handleClickDogCafeTag(dogCafeTags.id)}
                style={{
                  marginRight: "10px",
                  backgroundColor: selectedDogCafeTagIds.includes(dogCafeTags.id)
                    ? "#B6A28E"
                    : "white",
                }}
              >
                {dogCafeTags.name}
              </button>
            ))}
          </div>
          <h3>店舗一覧</h3>
          <div>
            {stores.map((store) => (
              <div key={store.id}>
                <h4>{store.name}</h4>
                <p>{store.description}</p>
                <p>{store.address}</p>
              </div>
            ))}
          </div>
        </>
      ) : (
        <>
          <h2>ドッグカフェ情報がありません</h2>
          <p>該当するデータが見つかりません。</p>
        </>
      )}
    </div>
  );
};

export default DogCafeStoreList;
