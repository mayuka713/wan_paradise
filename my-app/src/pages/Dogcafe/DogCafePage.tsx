import React from "react";
import { Link, useNavigate, useParams, useLocation } from "react-router-dom";
import "./DogCafePage.css";
import DogCafeRegionList from "./DogCafeRegionList";



const DogCafePage: React.FC = () => {
  const navigate = useNavigate();
  const handleClick = () => {
    navigate("/DogCafeRegionList");
  };

  return (
    <div className="dogcafe-page-container">
      <p onClick={handleClick} className="search-dogcafe">
        全国のドッグカフェを探す
      </p>
      <div>
        <img src="https://res.cloudinary.com/do4lxnof9/image/upload/v1733201770/wan_paradise/DogCafe/dogcafe.img.png"
          alt="ドッグカフェのイラスト" 
          className="dogcafe-image" />
      </div>
    </div>
  );
};

export default DogCafePage;