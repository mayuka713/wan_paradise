import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";


interface Hospital {
  store_id: number;
  store_name: string;
  store_description: string;
  store_address: string;
  store_phone: number;
  store_url: string;
  store_img: string;
  tags: { id: number; name: string }[];
}

interface HospitalTag {
  id: number;
  name: string;
}

const HospitalStoreList: React.FC = () => {
  const { prefectureId } = useParams<{ prefectureId: string }>(); // URLのパラメータから都道府県IDを取得する
  const [stores, setStores] = useState<Hospital[]>([]);// 病院リストの状態を定義する
  const [hospitalTags, setHospitalTags] = useState<HospitalTag[]>([]); //タグ情報の状態を定義する
  const [selectedHospitalTags, setSelectedHospitalTags] = useState<number[]>([]); // 選択されたタグのID
  const [selectedPrefecture, setSelectedPrefecture] = useState<string>("");
  const [filteredHospitalStores, setFilteredHospitsalStores] = useState<Hospital[]>([]);

  // タグデータの取得
  useEffect(() => {
    const fetchHospitalTags = async () => {
      try {
        const response = await fetch("http://localhost:5003/hospital-tags"); // タグデータを取得
        const data: HospitalTag[] = await response.json();
        setHospitalTags(data); // 取得したデータを状態に設定
      } catch (error) {
        console.error("タグデータの取得に失敗しました:", error);
      }
    };
    fetchHospitalTags();
  }, []);

  //病院データの取得
  useEffect(() => {
    const fetchHospitalStores = async () => {
      try {
        const response = await fetch(
          `http://localhost:5003/Hospital/list/${prefectureId}?tags=${selectedHospitalTags.join(",")}`
        );
        const data: Hospital[] = await response.json();
        setStores(data);
        setFilteredHospitsalStores(data);
      } catch (error) {
        console.error("病院データの取得に失敗しました:", error);
      }
    };
    fetchHospitalStores();
  }, [prefectureId, selectedHospitalTags]);
  

  // タグ選択による病院データのフィルタリング	
  useEffect(() => {
    const filteredStores = stores.filter((store) =>
      selectedHospitalTags.length === 0
        ? true // タグが選択されていない場合はすべての病院を表示
        : store.tags.some((tag) => selectedHospitalTags.includes(tag.id)) // タグが一致する病院のみ表示
    );
    setFilteredHospitsalStores(filteredStores); // フィルタリングされた病院リストを設定
  }, [selectedHospitalTags, stores]);



  return (
    <div>
      <h2>動物病院一覧</h2>
      {/* 絞り込みタグ */}
      <div>
        {hospitalTags.map((tag) => (
          <button
            key={tag.id}
            onClick={() => {
              setSelectedHospitalTags((prev) =>
                prev.includes(tag.id)
                  ? prev.filter((id) => id !== tag.id)
                  : [...prev, tag.id]
              );
            }}
            style={{
              margin: "5px",

            }}
          >
            {tag.name}
          </button>
        ))}
      </div>
      {/* 病院リスト */}
      <div>
        {filteredHospitalStores.length > 0 ? (
          filteredHospitalStores.map((store) => (
            <div key={store.store_id}>
              <h3>{store.store_name}</h3>
              <p>{store.store_description}</p>
              <p>住所: {store.store_address}</p>
              <p>電話番号: {store.store_phone}</p>
              <a href={store.store_url} target="_blank" rel="noopener noreferrer">詳細はこちら</a>
            </div>
          ))
        ) : (
          <p>該当する病院がありません。</p>
        )}
      </div>
    </div>
  );
};
export default HospitalStoreList;
