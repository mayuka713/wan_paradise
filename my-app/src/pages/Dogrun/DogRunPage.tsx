import React from "react";
import { Link, useNavigate, useParams, useLocation } from "react-router-dom";
import "./DogRunPage.css";
import DogrunImage from "../assets/images/Dogrun/dogrun.png";
import DogrunRegionList from "./DogrunRegionList";
import DogRunStoreList from "../assets/images/Dogrun/dogrun_tsubasa.png";

const DogRunPage: React.FC = () => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate('/DogrunRegionsList');
  };
  return (
    <div style={{ textAlign: 'center', marginTop: '20px' }}>
    <h1>wan paradise</h1>
    <p onClick={handleClick} style={{ cursor: 'pointer', fontSize: '18px' }}>
      全国のドッグランを探す
    </p>
    <div>
      <img src={DogrunImage} alt="ドッグランのイラスト" style={{ width: '100%' }} />
    </div>
  </div>
  );
};


export default DogRunPage;
