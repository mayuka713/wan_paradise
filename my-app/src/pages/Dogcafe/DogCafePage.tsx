import React, { useState } from "react";
import { Link, useParams, useNavigate, useLocation } from "react-router-dom";
import "./DogCafePage.css";
import dogcafe from "../assets/images/Dogcafe/dogcafe.png";

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

// DogCafePageコンポーネント（都道府県別のページ）
const DogcafePage = () => {
  const { prefecture } = useParams<{ prefecture: string }>();
  const location = useLocation();
  const navigate = useNavigate();
  const [selectedOptions, setSelectedOptions] = useState<string[]>([]);
  const [isDropdownVisible, setIsDropdownVisible] = useState(false);
  // ドロップダウンの表示/非表示を切り替える
  const toggleDropdown = () => {
    setIsDropdownVisible(!isDropdownVisible);
  };


  const handleOptionClick = (option: string) => {
    setSelectedOptions((preSelected) =>
      preSelected.includes(option)
        ? preSelected.filter((item) => item ! == option)
        : [...preSelected, option]
    );
  };
  // 都道府県のリンククリック時の処理
  const handlePrefectureClick = (prefectureKey: string) => {
    if (prefectureKey === "kansai") {
      navigate("/dogcafe/kansai"); // 関西のドッグカフェページに遷移
    } else if (prefectureKey === "osaka") {
      navigate("/dogcafe/osaka");// 大阪のドッグカフェページに遷移
    } else {
      navigate(`/dogcafe/${prefectureKey}`);// その他の都道府県のページに遷移
    }
  };
    return (
      <div className="dogcafe-page">
        <header className="header">
          <Link to="/" style={{ textDecoration: "none", color: "black"}}>
            wan paradise
          </Link>
        </header>
        <h1>ドッグカフェ</h1>
        <div className="tab-container" onClick={toggleDropdown}>
          <span className="dogcafe-title">全国のドッグカフェを探す</span>
          <div className="dogcafe-img">
            <img src={dogcafe}
              alt="ドッグカフェのイラスト"
              className="dogcafe-illust" />
          </div>
        </div>
        {/* ドロップダウンメニューの表示 */}
        {isDropdownVisible && (
          <div className="dropdown-menu">
            <ul>
              {Object.keys(prefectureNames).map((key) => (
                <li key={key} onClick={() => handlePrefectureClick(key)}>
                  {prefectureNames[key]}
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>
    );
  };
  export default DogcafePage;
