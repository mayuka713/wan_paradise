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
import "./DogCafePage.css";
import dogcafe from "../assets/images/dogcafe.png";
var prefectureNames = {
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
// DogCafePageコンポーネント（都道府県別のページ）
var DogcafePage = function () {
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
        if (prefectureKey === "kansai") {
            navigate("/dogcafe/kansai"); // 関西のドッグカフェページに遷移
        }
        else if (prefectureKey === "osaka") {
            navigate("/dogrun/osaka"); // 大阪のドッグランページに遷移
        }
        else {
            navigate("/dogcafe/".concat(prefectureKey)); // その他の都道府県のページに遷移
        }
    };
    return (<div className="dogcafe-page">
        <header className="header">
          <Link to="/" style={{ textDecoration: "none", color: "black" }}>
            wan paradise
          </Link>
        </header>
        <h1>ドッグカフェ</h1>
        <div className="tab-container" onClick={toggleDropdown}>
          <span className="dogcafe-title">全国のドッグカフェを探す</span>
          <div className="dogcafe-img">
            <img src={dogcafe} alt="ドッグカフェのイラスト" className="dogcafe-illust"/>
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
export default DogcafePage;
