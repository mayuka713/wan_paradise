// src/pages/DogRunPage.tsx
import React, { useState } from "react";
import { Link, useParams, useNavigate, useLocation } from "react-router-dom";
import "./DogRunPage.css";

const options = [
  "駐車場あり",
  "人工芝生",
  "天然芝生",
  "利用料金無料",
  "営業24時間",
  "大型犬OK",
];
const prefectureNames: { [key: string]: string } = {
  hokkaido: "北海道",
  tohoku: "東北",
  kanto: "関東",
  chubu: "中部",
  kansai: "関西",
  chugoku: "中国",
  shikoku: "四国",
  kyushu: "九州",
  okinawa: "沖縄",
};

// DogRunDetailPage コンポーネント（都道府県別のページ）
const DogRunDetailPage: React.FC = () => {
  const { prefecture } = useParams<{ prefecture: string }>(); // URLから都道府県を取得
  const location = useLocation();
  const queryParams = new URLSearchParams(location.search); // クエリパラメータを取得
  const [selectedOptions, setSelectedOptions] = useState<string[]>([]);
  const [isDropdownVisible, setIsDropdownVisible] = useState(false)
  const displayPrefecture = prefectureNames[prefecture || ""] || prefecture;
  const navigate = useNavigate();
  // ドロップダウンの表示/非表示を切り替える
  const toggleDropdown = () => {
    setIsDropdownVisible(!isDropdownVisible);
  };

  // 条件の選択/解除
  const handleOptionClick = (option: string) => {
    setSelectedOptions((prevSelected) =>
      prevSelected.includes(option)
        ? prevSelected.filter((item) => item !== option) // 選択済みのオプションを削除
        : [...prevSelected, option] // 新しいオプションを追加
    );
  };

  // 条件に基づいて遷移する関数
  const handleSearch = () => {
    if (selectedOptions.includes("駐車場あり") && selectedOptions.includes("人工芝生")) {
      navigate(`/dogrun/${prefecture}/parking-artificial-grass`); // 遷移先のルート
    }
    // 他の条件に基づく遷移をここに追加可能
  };

  // クエリパラメータに基づいた条件
  const hasParking = queryParams.get("parking") === "true";
  const grassType = queryParams.get("grass");



  return (
    <div className="dogrun-detail-page">
      <header className="header">
        <Link to="/" style={{ textDecoration: "none", color: "black" }}>
          wan paradise
        </Link>
      </header>
      <div className="tab-container" onClick={toggleDropdown}></div>
      {/* ドロップダウンメニューの表示 */}
      {isDropdownVisible && (
        <div className="dropdown-menu">
          <ul>
            {Object.keys(prefectureNames).map((key) => (
              <li key={key}>
                <Link to={`/dogrun/${key}`}>{prefectureNames[key]}</Link>
              </li>
            ))}
          </ul>
        </div>

      )}

      {/* 選択された都道府県に基づく詳細ページ */}
      <h1>Dog run</h1>
      <h2> {displayPrefecture}</h2>

      {/* 条件に基づく動的コンテンツ */}
      <div className="conditions">
        <h3>該当するドッグランの特徴:</h3>
        <ul>
          {hasParking && <li>駐車場あり</li>}
          {grassType === "artificial" && <li>人工芝生</li>}
          {grassType === "natural" && <li>天然芝生</li>}
          {/* 他の条件も追加可能 */}
        </ul>
      </div>



      {/* 条件選択用のボタン（動的な変更が可能） */}
      <p>行きたいドッグランの希望条件を選択してください:</p>
      <div className="options-container">
        {options.map((option) => (
          <button
            key={option}
            onClick={() => handleOptionClick(option)}
            className={selectedOptions.includes(option) ? "selected" : ""}
          >
            {option}
          </button>
        ))}
      </div>
      <div className="selected-options">
        <h3>選択された条件:</h3>
        <ul>
          {selectedOptions.length > 0 ? (
            selectedOptions.map((option) => <li key={option}>{option}</li>)
          ) : (
            <p>条件が選択されていません</p>
          )}
        </ul>
      </div>
      <button onClick={handleSearch}>検索</button>
    </div>
  );
};

// DogRunPage コンポーネント（都道府県を選ぶメインページ）
const DogRunPage: React.FC = () => {
  const [isDropdownVisible, setIsDropdownVisible] = useState(false);

  const toggleDropdown = () => {
    setIsDropdownVisible(!isDropdownVisible);
  };

  return (
    <div className="dogrun-page">
      <header className="header">wan paradise</header>
      <div className="tab-container" onClick={toggleDropdown}>
        <span>全国のドッグランを探す</span>
      </div>
      {/* ドロップダウンメニューの表示 */}
      {isDropdownVisible && (
        <div className="dropdown-menu">
          <ul>
            <li>
              <Link to="/dogrun/hokkaido">北海道</Link>
            </li>
            <li>
              <Link to="/dogrun/tohoku">東北</Link>
            </li>
            <li>
              <Link to="/dogrun/kanto">関東</Link>
            </li>
            <li>
              <Link to="/dogrun/chubu">中部</Link>
            </li>
            <li>
              <Link to="/dogrun/kansai">関西</Link>
            </li>
            <li>
              <Link to="/dogrun/chugoku">中国</Link>
            </li>
            <li>
              <Link to="/dogrun/shikoku">四国</Link>
            </li>
            <li>
              <Link to="/dogrun/kyushu">九州</Link>
            </li>
            <li>
              <Link to="/dogrun/okinawa">沖縄</Link>
            </li>
          </ul>
        </div>
      )}
    </div>
  );
};

export { DogRunPage, DogRunDetailPage };

