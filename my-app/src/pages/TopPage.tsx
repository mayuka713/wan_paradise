import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "./TopPage.css";
import HamburgerMenu from "../HamburgerMenu";
import DogrunImage from "../pages/assets/images/Dogrun/dogrun.png";
import dogcafe from "../pages/assets/images/Dogcafe/dogcafe.png";
import petshop from "../pages/assets/images/Petshop/petshop.png";
import hospital from "../pages/assets/images/Hospital/hospital.png";
import dogrunNameTag from "../pages/assets/images/Dogrun/dogrun-nametag.png";
import dogCafeNameTag from "../pages/assets/images/Dogcafe/dogcafe-nametag.png";
import petshopNameTag from "../pages/assets/images/Petshop/petshop-nametag.png";
import hospitalNameTag from "../pages/assets/images/Hospital/hospital-nametag.png";
import Header from "./Header";

const TopPage: React.FC = () => {
  // フェードイン用の useEffect
  useEffect(() => {
    const handleScroll = () => {
      const fadeElements = document.querySelectorAll<HTMLElement>(".fade-in");
      fadeElements.forEach((el) => {
        const rect = el.getBoundingClientRect();
        if (rect.top < window.innerHeight * 1) {
          el.classList.add("show");
        }
      });
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll();

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // スケールアップアニメーション用の状態管理
  const [showText, setShowText] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      setShowText(true);
    }, 500); // 0.5秒後にアニメーション開始
  }, []);

  return (
    <div className="TopPage-container">
      {/* ハンバーガーメニュー */}
      <HamburgerMenu />
      <Header />

      {/* メインタイトル（スケールアップ適用） */}
      <p className={`main-title scale-up ${showText ? "show" : ""}`}>
        ドッグラン、ドッグカフェ、ペットショップや動物病院など
        <br />
        様々なわんこの情報をご紹介しております!
      </p>

      {/* 各セクション */}
      <div className="info-section fade-in">
        <div className="image-container">
          <Link to="/dogrun">
            <img src={dogrunNameTag} alt="ドッグランネームタグ" />
            <img src={DogrunImage} alt="ドッグランのイラスト" className="top-image" />
          </Link>
        </div>
      </div>

      <div className="info-section reverse fade-in">
        <div className="image-container">
          <Link to="/dogcafe">
            <img src={dogCafeNameTag} alt="ドッグカフェネームタグ" />
            <img src={dogcafe} alt="ドッグカフェのイラスト" className="top-image" />
          </Link>
        </div>
      </div>

      <div className="info-section fade-in">
        <div className="image-container">
          <Link to="/petshop">
            <img src={petshopNameTag} alt="ペットショップネームタグ" />
            <img src={petshop} alt="ペットショップのイラスト" className="top-image" />
          </Link>
        </div>
      </div>

      <div className="info-section reverse fade-in">
        <div className="image-container">
          <Link to="/hospital">
            <img src={hospitalNameTag} alt="病院ネームタグ" />
            <img src={hospital} alt="病院のイラスト" className="top-image" />
          </Link>
        </div>
      </div>

      {/* フッター */}
      <footer className="footer">wan paradise</footer>
    </div>
  );
};

export default TopPage;
