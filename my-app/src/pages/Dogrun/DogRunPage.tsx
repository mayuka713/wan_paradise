import React from "react";
import { useNavigate } from "react-router-dom";
import "./DogRunPage.css";
import DogrunImage from "../assets/images/Dogrun/dogrun.png";
import Header from "../Header";
import Footer from "../Footer";



const DogRunPage: React.FC = () => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate('/DogrunRegionsList');
  };

  return (
    <>
      <Header />
      <div className="dogrun-page-container">
        <p onClick={handleClick} className="search-dogrun">
          全国のドッグランを探す
        </p>
        <div>
          <img src={DogrunImage} alt="DogrunImage" className="dogrun-image" />
        </div>
      </div>

    </>

  );
};


export default DogRunPage;