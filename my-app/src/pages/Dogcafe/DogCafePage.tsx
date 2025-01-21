import React from "react";
import { useNavigate } from "react-router-dom";
import "./DogCafePage.css";
import Header from "../Header";
import HamburgerMenu from "../../HamburgerMenu";


const DogCafePage: React.FC = () => {
  const navigate = useNavigate();
  const handleClick = () => {
    navigate("/DogCafeRegionList");
  };

  return (
    <>
    <HamburgerMenu />
    <Header/>

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
    </>
  );
};

export default DogCafePage;