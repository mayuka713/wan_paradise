import React from "react";
import { Link, useNavigate, useParams, useLocation } from "react-router-dom";
import "./DogRunPage.css";
import DogrunRegionList from "./DogrunRegionList";
import HamburgerMenu from "../../HamburgerMenu";


const DogRunPage: React.FC = () => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate('/DogrunRegionsList');
  };
  
  return (
    <div className="dogrun-page-container">
    <h1 className="header">wan paradise</h1>
    <p onClick={handleClick} className="search-dogrun">
      全国のドッグランを探す
    </p>
    <div>
      <img src="https://res.cloudinary.com/do4lxnof9/image/upload/v1733709421/wan_paradise/DogRun/dogrun.illust.png" 
      alt="ドッグランのイラスト"
      className="dogrun-image"/>
    </div>
  </div>
  );
};


export default DogRunPage;