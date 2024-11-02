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
import "./HospitalPage.css";
import hospital from "../assets/images/hospital.png";
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
// hospital コンポーネント（都道府県別のページ）
var HospitalPage = function () {
    var prefecture = useParams().prefecture; // URLから都道府県を取得
    var location = useLocation();
    //useNavigateはページ遷移を行うためのフック
    var navigate = useNavigate();
    var _a = useState([]), selectedOptions = _a[0], setselectedOptions = _a[1];
    var _b = useState(false), isDropdownVisible = _b[0], setIsDropdownVisible = _b[1];
    // ドロップダウンの表示/非表示を切り替える
    var toggleDropdown = function () {
        setIsDropdownVisible(!isDropdownVisible);
    };
    // 条件の選択/解除
    var handleOptionClick = function (option) {
        setselectedOptions(function (prevSelected) {
            return prevSelected.includes(option)
                ? prevSelected.filter(function (item) { return item == option; }) // 選択済みのオプションを削除
                : __spreadArray(__spreadArray([], prevSelected, true), [option], false);
        } // 新しいオプションを追加
        );
    };
    // 都道府県のリンククリック時の処理
    var handlePrefectureClick = function (prefectureKey) {
        navigate("/hospital/".concat(prefectureKey));
    };
    return (<div className="hospital-page">
      <header className="header">
        <Link to="/" style={{ textDecoration: "none", color: "black" }}>
          wan paradise
        </Link>
      </header>
      <h1>動物病院</h1>
      <div className="tab-container" onClick={toggleDropdown}>
        <span>全国の動物病院を探す</span>
        <div className="hospital-img">
          <img src={hospital} alt="病院のイラスト" className="hospital-illust"/>
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
export default HospitalPage;
