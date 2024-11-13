import React from "react";
import { useNavigate } from "react-router-dom";
import DogcafeImage from "../assets/images/Dogcafe/dogcafe.png";
import DogcafeRegionList from "./DogCafeRegionList";


const DogCafePage: React.FC = () => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate("/DogCafeRegionList");
  };

  return (
    <div style={{ textAlign: "center", marginTop: "20px" }}>
      <h1>wan paradise</h1>
      <p onClick={handleClick} style={{ cursor: "pointer", fontSize: "18px" }}>
        全国のドッグカフェを探す
      </p>
      <div>
        <img src={DogcafeImage} alt="ドッグカフェのイラスト" style={{ width: "100%" }} />
      </div>
    </div>
  );
};

export default DogCafePage;
