import React , { useState }from "react";
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
import "../App.css";
import "./TopPage.css";
import { useFavorites, FavoriteItem }  from "../context/FavoriteContext";
import HamburgerMenu from "../HamburgerMenu";
import "../HamburgerMenu.css";
import DogrunImage from "../pages/assets/images/Dogrun/dogrun.png";
import dogcafe from "../pages/assets/images/Dogcafe/dogcafe.png";
import petshop from "../pages/assets/images/Petshop/petshop.png";
import hospital from "../pages/assets/images/Hospital/hospital.png";
import dogrunNameTag from "../pages/assets/images/Dogrun/dogrun-nametag.png";
import dogCafeNameTag from "../pages/assets/images/Dogcafe/dogcafe-nametag.png";
import petshopNameTag from "../pages/assets/images/Petshop/petshop-nametag.png";
import hospitalNameTag from "../pages/assets/images/Hospital/hospital-nametag.png";

const TopPage: React.FC = () =>  {
  const { addFavorite } = useFavorites(); //useFavoriteでお気に入り機能を取得



const items: FavoriteItem[] = [
  { id: 1, name: "ドッグラン", image: DogrunImage },
  { id: 2, name: "ドッグカフェ", image: dogcafe },
  { id: 3, name: "ペットショップ", image: petshop },
  { id: 4, name: "動物病院", image: hospital },
];

  return (
    <div className="container">
     {/* ハンバーガーメニュー */}
     <HamburgerMenu/>

      <header className="App-header">
        <h1>Wan Paradise</h1>
     
     {/* ヘッダー */}
      </header>
      <p className="main-title">ドッグラン、ドッグカフェ、ペットショップや動物病院など<br></br>
        様々なわんこの情報をご紹介しております。</p>
      
      {/* dogrun */}
      <div className="info-section">
        <div className="text-container">
          <Link to="/dogrun">
            <img src={dogrunNameTag} alt="ドッグランネームタグ" className="dogrun-nametag" />
          </Link>
        </div>
        <div className="image-container">
          <img src={DogrunImage} alt="ドッグランのイラスト" className="image" />
        </div>
      </div>
      {/* dogcafe */}
      <div className="info-section reverse">
        <div className="text-container">
          <Link to="/dogcafe">
            <img src={dogCafeNameTag} alt="ドッグカフェネームタグ" className="dogcafe-nametag" />
          </Link>
        </div>
        <div className="image-container">
          <img src={dogcafe} alt="ドッグカフェイラスト" className="image" />
        </div>
      </div>
      {/* petshop */}
      <div className="info-section">
        <div className="text-container">
          <Link to="/petshop">
            <img src={petshopNameTag} alt="ペットショップネームタグ" className="petshop-nametag" />
          </Link>
        </div>
        <div className="image-container">
          <img src={petshop} alt="ペットショップのイラスト" className="image" />
        </div>
      </div>
      {/* hospital */}
      <div className="info-section reverse">
        <div className="text-container">
          <Link to="/hospital">
            <img src={hospitalNameTag} alt="病院ネームタグ" className="hospital-nametag" />
          </Link>
        </div>
        <div className="image-container">
          <img src={hospital} alt="病院のイラスト" className="image" />
        </div>
      </div>
      
      <footer className="footer">wan paradise</footer>
    </div>
   );
  }


export default TopPage;