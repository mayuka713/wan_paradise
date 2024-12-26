import React, { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import "./DogRunStoreList.css";

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

  // 各都道府県を設定
  useEffect(() => {
    const prefectureNames: { [key: string]: string } = {
      "1": "北海道",
      "13": "東京",
      "27": "大阪",
    };
    setSelectedPrefecture(prefectureNames[prefectureId ?? ""] || "ドッグラン情報がありません");
  }, [prefectureId]);

  // タグ選択の処理
  const handleTagClick = (tagId: number) => {
    setSelectedTagIds((prev) =>
      prev.includes(tagId) ? prev.filter((id) => id !== tagId) : [...prev, tagId]
    );
  };

  // 店舗データの取得
  useEffect(() => {
    const fetchStores = async () => {
      try {
        let url = `http://localhost:5003/stores/list/${prefectureId}/1`;
        if (selectedTagIds.length > 0) {
          url = `http://localhost:5003/stores/list/tag/${prefectureId}/1?tagIds=${selectedTagIds.join(",")}`;
        }
        const response = await fetch(url);
        if (!response.ok) {
          throw new Error("データ取得に失敗しました");
        }
        const data = await response.json();
        console.log("取得した店舗データ:", data);
        setStore(data);
      } catch (error) {
        console.error("データ取得中にエラーが発生しました:", error);
      }
    };
    fetchStores();
  }, [prefectureId, selectedTagIds]);


  return (
    <>
    <header className="header">Wan Paradise</header>
    <div className="content">
      {selectedPrefecture === "ドッグラン情報がありません" ? (
        <h2>{selectedPrefecture}</h2>
      ) : (
        <>
          <h2>{selectedPrefecture}のドッグラン</h2>
          <div className="tags-container">
            {store.map((storeItem) => {
            const reviews = storeItem.reviews || []; // reviewsがundefinedの場合、空配列を使用
            const averageRating =
              reviews.length > 0
                ? reviews.reduce((sum, review) => sum + review.rating, 0) / reviews.length
                : 0;
            
            console.log("reviews:", reviews);
            console.log("averageRating:", averageRating);
            console.log("Width of stars-filled:", (averageRating / 5) * 100);

              return (
                <Link to={`/dogrun/detail/${storeItem.store_id}`} className="store-item" key={storeItem.store_id}>
                  <img src={storeItem.store_img} alt={storeItem.store_name} className="store-image" />
                  <div className="star-container">
                  {/*背景を星*/}
                  <div className="stars-background">★★★★★</div>
                  {/* 塗りつぶし部分 */}
                  <div className="stars-filled"
                    style= {{
                      width: `${(averageRating / 5) * 100}%`,
                  }}
                >  
                  ★★★★★
                    </div>
                  </div>
                  <span className="average-rating-value">{averageRating.toFixed(1)}</span>
                  <h3 className="store-name">{storeItem.store_name}</h3>
                  <p>{storeItem.store_description}</p>
                  <p><strong>住所: </strong>{storeItem.store_address}</p>
                  <p><strong>電話: </strong> {storeItem.store_phone_number}</p>
                  <p><strong>営業時間: </strong>{storeItem.store_opening_hours}</p>
                </Link>
              );
            })}
          </div>
        </>
      )}
    </div>
  </>
);
};

export default DogRunStoreList;