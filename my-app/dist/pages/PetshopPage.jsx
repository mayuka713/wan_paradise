var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
import React, { useState } from "react";
import { Link, useParams, useNavigate, useLocation } from "react-router-dom";
import "./PetshopPage.css";
import petshop from "../assets/images/petshop.png";
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
// PetshopPage コンポーネント（都道府県別のページ）
var PetshopPage = function () {
    var prefecture = useParams().prefecture;
    var location = useLocation();
    var navigate = useNavigate();
    var _a = useState([]), selectedOptions = _a[0], setSelectedOptions = _a[1];
    var _b = useState(false), isDropdownVisible = _b[0], setIsDropdownVisible = _b[1];
    // ドロップダウンの表示/非表示を切り替える
    var toggleDropdown = function () {
        setIsDropdownVisible(!isDropdownVisible);
    };
    var handleOptionClick = function (option) {
        setSelectedOptions(function (preSelected) {
            return preSelected.includes(option)
                ? preSelected.filter(function (item) { return item == option; })
                : __spreadArray(__spreadArray([], preSelected, true), [option], false);
        });
    };
    // 都道府県のリンククリック時の処理
    var handlePrefectureClick = function (prefectureKey) {
        navigate("/petshop/".concat(prefectureKey));
    };
    return (<div className="petshop-page">
      <header className="header">
        <Link to="/" style={{ textDecoration: "none", color: "black" }}>
          wan paradise
        </Link>
      </header>
      <h1>ペットショップ</h1>
      <div className="tab-container" onClick={toggleDropdown}>
        <span>全国のペットショップを探す</span>
        <div className="dogcafe-img">
          <img src={petshop} alt="ペットショップのイラスト" className="petshop-illust"/>
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
export default PetshopPage;
