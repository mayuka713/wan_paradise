import React, { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";

interface Store {
  id: number;
  name: string;
}

const DogRunSearch = () => {
  const { id } = useParams <{ id: string }>();
  const [selectedTags, setSelectedTags] = useState<number[]>([]);
  const [storeId, setStoreId] = useState<number | null>(null);
  const [tagId, setTagId] = useState<number | null>(null);
  const [searchResults, setSearchResults] = useState<Store[]>([]); // 検索結果を保存するstate
  const navigate = useNavigate();

  useEffect(() => {
    if (id) {
      console.log(`現在のドッグランID: ${id}`);
      // 必要に応じてidを使って初期データを取得
    }
  }, [id]);

  // タグの選択変更
  const handleTagChange = (tagId: number) => {
    setSelectedTags((prev) =>
      prev.includes(tagId)
        ? prev.filter((id) => id !== tagId)
        : [...prev, tagId]
    );
  };

  // store_id と tag_id の直接挿入の処理
  const handleDirectInsert = () => {
    if (storeId && tagId) {
      fetch(`/api/stores-tags`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ store_id: storeId, tag_id: tagId }),
      })
        .then((response) => response.json())
        .then((data) => console.log("挿入結果:", data))
        .catch((error) => console.error("挿入エラー:", error));
    } else {
      alert("store_idとtag_idを入力してください");
    }
  };

  // タグを使った店舗検索
  const handleSearch = () => {
    fetch(`/api/stores?tags=${selectedTags.join(",")}`)
      .then((response) => response.json())
      .then((data) => setSearchResults(data)) // 検索結果を保存
      .catch((error) => console.error("検索エラー:", error));
  };

  // 東京へのページ遷移
  const handleTokyoClick = () => {
    navigate("/dogrun/tokyo");
  };

  return (
    <div>
      {/* 都道府県のリンク */}
      <h2>DogRunを探す</h2>
      <div>
        <p
          onClick={handleTokyoClick}
          style={{ cursor: "pointer", color: "blue" }}
        >
          東京
        </p>
      </div>
      {/* タグ選択 */}
      <label>
        <input type="checkbox" value={5} onChange={() => handleTagChange(5)} />{" "}
        駐車場あり
      </label>
      <label>
        <input type="checkbox" value={4} onChange={() => handleTagChange(4)} />{" "}
        小型犬エリア有り
      </label>
      {/* 他のタグも追加 */}
      <button onClick={handleSearch}>検索</button>

      {/* store_id と tag_id を直接指定して挿入 */}
      <div>
        <h3>store_id と tag_id の挿入</h3>
        <label>
          store_id:
          <input
            type="number"
            value={storeId ?? ""}
            onChange={(e) => setStoreId(Number(e.target.value))}
          />
        </label>
        <label>
          tag_id:
          <input
            type="number"
            value={tagId ?? ""}
            onChange={(e) => setTagId(Number(e.target.value))}
          />
        </label>
        <button onClick={handleDirectInsert}>挿入</button>
      </div>

      {/* 検索結果の表示 */}
      <div>
        <h3>検索結果</h3>
        {searchResults.length > 0 ? (
          <ul>
            {searchResults.map((store) => (
              <li key={store.id}>{store.name}</li>
            ))}
          </ul>
        ) : (
          <p>該当する店舗がありません。</p>
        )}
      </div>
    </div>
  );
};

export default DogRunSearch;
