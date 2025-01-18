import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./PetShopPage.css";
import PetshopImage from "../assets/images/Petshop/petshop.png";
import Header from "../Header";
import Footer from "../Footer";

const PetshopPage: React.FC = () => {
  const navigate = useNavigate();

 
  const handleClick = () => {
    navigate('/PetshopRegionsList');
  };
  return (
    <>
    <Header/>
    <div className="petshop-page-container">
    <p onClick={handleClick} className="search-petshop">
      全国のペットショップを探す
    </p>
    <div>
      <img src={PetshopImage} alt="ペットショップのイラスト" className="petshop-image" />
    </div>
  </div>
  <Footer/>
  </>
  );
};

export default PetshopPage;