import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

interface DogCafe {
  store_id: number;
  name: string;
  description: string;
  address: string;
  phone_number: string;
  store_url: string;
  store_img: string;
  tags: { id: number; name: string }[];
}


interface Dog_cafe_tags {
  id: number;
  name: string;
}


const DogCafesStoreList: React.FC = () => {
  const { prefectureId } = useParams<{ prefectureId: string }>();

  const [selectedDogCafeTagIds, setSelectedDogCafeTagIds] = useState<number[]>([]);
  const [dog_cafe_tags, setDogCafeTags] = useState<Dog_cafe_tags[]>([]);
  const [selectedPrefecture, setSelectedPrefecture] = useState<string>("");

  // タグデータの取得
  useEffect(() => {
    const fetchDogCafeTags = async () => {
      try {
        const response = await fetch(`http://localhost:5003/dog_cafe_tags?/list?prefecture=${prefectureId}`);
        const data: Dog_cafe_tags[] = await response.json();
        setDogCafeTags(data);
      } catch (error) {
        console.error("タグ情報の取得に失敗しました:", error);
      }
    };
    if (prefectureId) {
    fetchDogCafeTags();
    }
  }, [prefectureId]);


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
            {dog_cafe_tags.map((dogCafeTag: Dog_cafe_tags ) => (
              <button
                key={dogCafeTag.id}
                onClick={() => handleClickDogCafeTag(dogCafeTag.id)}
                style={{
                  marginRight: "10px",
                  backgroundColor: selectedDogCafeTagIds.includes(dogCafeTag.id)
                    ? "#B6A28E"
                    : "white",
                }}
              >
                {dogCafeTag.name}
              </button>
            ))}
          </div>
          <h3>店舗一覧</h3>
  
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

export default DogCafesStoreList;
