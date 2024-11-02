import React, { useState } from "react";
import { Link, useParams, useNavigate, useLocation } from "react-router-dom";
import "./HospitalPage.css";
import hospital from "../assets/images/hospital.png";

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

// hospital コンポーネント（都道府県別のページ）
const HospitalPage: React.FC = () => {
  const { prefecture } = useParams<{ prefecture: string }>(); // URLから都道府県を取得
  const location = useLocation();
  //useNavigateはページ遷移を行うためのフック
  const navigate = useNavigate();
  const [selectedOptions, setselectedOptions] = useState<string[]>([]);
  const [isDropdownVisible, setIsDropdownVisible] = useState(false)
  // ドロップダウンの表示/非表示を切り替える
  const toggleDropdown = () => {
    setIsDropdownVisible(!isDropdownVisible);
  };
  // 条件の選択/解除
  const handleOptionClick = (option: string) => {
    setselectedOptions((prevSelected) =>
      prevSelected.includes(option)
        ? prevSelected.filter((item) => item! == option)// 選択済みのオプションを削除
        : [...prevSelected, option] // 新しいオプションを追加
    );
  };
  // 都道府県のリンククリック時の処理
  const handlePrefectureClick = (prefectureKey: string) => {
    navigate(`/hospital/${prefectureKey}`);
  };
  return (
    <div className="hospital-page">
      <header className="header">
        <Link to="/" style={{ textDecoration: "none", color: "black" }}>
          wan paradise
        </Link>
      </header>
      <h1>動物病院</h1>
      <div className="tab-container" onClick={toggleDropdown}>
        <span>全国の動物病院を探す</span>
        <div className="hospital-img">
          <img src={hospital}
            alt="病院のイラスト"
            className="hospital-illust" />
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

export default HospitalPage;