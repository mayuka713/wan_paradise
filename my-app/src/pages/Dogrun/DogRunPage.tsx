import React from "react";
import { Link, useNavigate, useParams, useLocation } from "react-router-dom";
import "./DogRunPage.css";
import DogrunImage from "../assets/images/Dogrun/dogrun.png";
import HamburgerMenu from "../../HamburgerMenu";
import Header from "../Header";
import Footer from "../Footer";



const DogRunPage: React.FC = () => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate('/DogrunRegionsList');
  };
  
  return (
    <>
    <Header/>
    <div className="dogrun-page-container">
    <p onClick={handleClick} className="search-dogrun">
      全国のドッグランを探す
    </p>
    <div>
      <img src={DogrunImage} alt="dogrun-img"/>
    </div>
  </div>
  <Footer/>
  </>

  );
};


export default DogRunPage;