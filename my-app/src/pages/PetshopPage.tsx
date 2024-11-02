import React, { useState } from "react";
import { Link, useParams, useNavigate, useLocation } from "react-router-dom";
import "./PetshopPage.css";
import petshop from "../assets/images/petshop.png";


const prefectureNames: { [key: string]: string } = {
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
const PetshopPage: React.FC = () => {
  const { prefecture } = useParams<{ prefecture: string }>();
  const location = useLocation();
  const navigate = useNavigate();
  const [selectedOptions, setSelectedOptions] = useState<string[]>([]);
  const [isDropdownVisible, setIsDropdownVisible] = useState(false)
  // ドロップダウンの表示/非表示を切り替える
  const toggleDropdown = () => {
    setIsDropdownVisible(!isDropdownVisible);
  };

  const handleOptionClick = (option: string) => {
    setSelectedOptions((preSelected) =>
      preSelected.includes(option)
        ? preSelected.filter((item) => item! == option)
        : [...preSelected, option]
    );
  };
  // 都道府県のリンククリック時の処理
  const handlePrefectureClick = (prefectureKey: string) => {
    navigate(`/petshop/${prefectureKey}`);
  };
  return (
    <div className="petshop-page">
      <header className="header">
        <Link to="/" style={{ textDecoration:"none", color: "black"}} >
          wan paradise
        </Link>
      </header>
      <h1>ペットショップ</h1>
      <div className="tab-container" onClick={toggleDropdown}>
        <span>全国のペットショップを探す</span>
        <div className="dogcafe-img">
          <img src={petshop}
            alt="ペットショップのイラスト"
            className="petshop-illust" />
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
export default PetshopPage;