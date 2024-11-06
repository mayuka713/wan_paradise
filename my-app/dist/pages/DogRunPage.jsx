var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
// src/pages/DogRunPage.tsx
import React, { useState } from "react";
import { Link, useParams, useNavigate, useLocation } from "react-router-dom";
import "./DogRun/DogRunPage.css";
import Dogrun from "../assets/images/dogrun.png";
var options = ["駐車場あり", "人工芝生", "天然芝生", "利用料金無料", "営業24時間", "大型犬OK",
];
var prefectureNames = {
    hokkaido: "北海道",
    tohoku: "東北地方",
    kanto: "関東地方",
    chubu: "中部地方",
    kansai: "関西地方",
    chugoku: "中国地方",
    shikoku: "四国地方",
    kyushu: "九州地方",
    okinawa: "沖縄",
};
// DogRunDetailPage コンポーネント（都道府県別のページ）
var DogRunDetailPage = function () {
    var prefecture = useParams().prefecture; // URLから都道府県を取得
    var location = useLocation();
    var queryParams = new URLSearchParams(location.search); // クエリパラメータを取得
    var _a = useState([]), selectedOptions = _a[0], setSelectedOptions = _a[1];
    var _b = useState(false), isDropdownVisible = _b[0], setIsDropdownVisible = _b[1];
    var displayPrefecture = prefectureNames[prefecture || ""] || prefecture;
    //useNavigateはページ遷移を行うためのフック
    var navigate = useNavigate();
    // ドロップダウンの表示/非表示を切り替える
    var toggleDropdown = function () {
        setIsDropdownVisible(!isDropdownVisible);
    };
    // 条件の選択/解除
    var handleOptionClick = function (option) {
        setSelectedOptions(function (prevSelected) {
            return prevSelected.includes(option)
                ? prevSelected.filter(function (item) { return item !== option; }) // 選択済みのオプションを削除
                : __spreadArray(__spreadArray([], prevSelected, true), [option], false);
        } // 新しいオプションを追加
        );
    };
    // 条件に基づいて遷移する関数
    var handleSearch = function () {
        if (selectedOptions.includes("駐車場あり") && selectedOptions.includes("人工芝生")) {
            navigate("/dogrun/".concat(prefecture, "/parking-artificial-grass")); // 遷移先のルート
        }
        // 他の条件に基づく遷移をここに追加可能
    };
    // クエリパラメータに基づいた条件
    var hasParking = queryParams.get("parking") === "true";
    var grassType = queryParams.get("grass") === "true";
    return (<div className="dogrun-detail-page">
      <header className="header">
        <Link to="/" style={{ textDecoration: "none", color: "black" }}>
          wan paradise
        </Link>
      </header>
      <div className="tab-container" onClick={toggleDropdown}></div>
      {/* ドロップダウンメニューの表示 */}
      {isDropdownVisible && (<div className="dropdown-menu">
          <ul>
            {Object.keys(prefectureNames).map(function (key) { return (<li key={key}>
                <Link to={"/dogrun/".concat(key)}>{prefectureNames[key]}</Link>
              </li>); })}
          </ul>
        </div>)}

      {/* 選択された都道府県に基づく詳細ページ */}
      <h1>ドッグラン</h1>
      <h2> {displayPrefecture}</h2>

      {/* 条件に基づく動的コンテンツ */}
      <div className="conditions">
        <ul>
          {hasParking && <li>駐車場あり</li>}
          {grassType === true && <li>人工芝生</li>}
          {/* 他の条件も追加可能 */}
        </ul>
      </div>
      {/* 条件選択用のボタン（動的な変更が可能） */}
      <p>行きたいドッグランの希望条件を選択してください</p>
      <div className="options-container">
        {options.map(function (option) { return (<button key={option} onClick={function () { return handleOptionClick(option); }} className={selectedOptions.includes(option) ? "selected" : ""}>
            {option}
          </button>); })}
      </div>
      <div className="selected-options">
        <h3>選択された条件:</h3>
        <ul>
          {selectedOptions.length > 0 ? (selectedOptions.map(function (option) { return <li key={option}>{option}</li>; })) : (<p>条件が選択されていません</p>)}
        </ul>
      </div>
      <button onClick={handleSearch}>検索</button>
    </div>);
};
// DogRunPage コンポーネント（都道府県を選ぶメインページ）
var DogRunPage = function () {
    var _a = useState(false), isDropdownVisible = _a[0], setIsDropdownVisible = _a[1];
    var toggleDropdown = function () {
        setIsDropdownVisible(!isDropdownVisible);
    };
    // 都道府県をクリックしたときの処理
    var handlePrefectureClick = function (key) {
        console.log("Prefecture clicked: ".concat(key));
    };
    return (<div className="dogrun-page">
      <header className="header">wan paradise</header>
      <div className="tab-container" onClick={toggleDropdown}>
        <span>全国のドッグランを探す</span>
        <div className="dogrun-img">
          <img src={Dogrun} alt="ドッグランのイラスト" className="dogrun-illust"/>
        </div>
      </div>
      {/* ドロップダウンメニューの表示 */}
      {isDropdownVisible && (<div className="dropdown-menu">
          <ul>
            {Object.keys(prefectureNames).map(function (key) { return (<li key={key} onClick={function () { return handlePrefectureClick(key); }}>
                {prefectureNames[key]}
              </li>); })}
          </ul>
        </div>)}
    </div>);
};
export { DogRunPage, DogRunDetailPage };
