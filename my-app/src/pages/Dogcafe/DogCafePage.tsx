import React from "react";
import { Link, useNavigate, useParams, useLocation } from "react-router-dom";
import "./DogCafePage.css";
import DogCafeImage from "../assets/images/Dogcafe/dogcafe.png";
import DogCafeRegionList from "./DogCafeRegionList";


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
        <img src="/images/Dogcafe/dogcafe.png" alt="ドッグカフェのイラスト" style={{ width: "100%" }} />
      </div>
    </div>
  );
};

export default DogCafePage;
