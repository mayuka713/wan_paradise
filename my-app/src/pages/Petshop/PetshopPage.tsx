import React, { useState } from "react";
import { Link, useParams, useNavigate, useLocation } from "react-router-dom";
import "./PetshopPage.css";
import PetshopImage from "../assets/images/Petshop/petshop.png";

const PetshopPage: React.FC = () => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate('/PetshopRegionsList');
  };
  return (
    <div style={{ textAlign: 'center', marginTop: '20px' }}>
    <h1>wan paradise</h1>
    <p onClick={handleClick} style={{ cursor: 'pointer', fontSize: '18px' }}>
      全国のペットショップを探す
    </p>
    <div>
      <img src={PetshopImage} alt="ペットショップのイラスト" style={{ width: '100%' }} />
    </div>
  </div>
  );
};



export default PetshopPage;