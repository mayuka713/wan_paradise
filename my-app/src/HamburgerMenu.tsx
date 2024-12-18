import React, { useState } from "react";
import "./HamburgerMenu.css";

const HamburgerMenu: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
    console.log("Menu state:", !isOpen);
  };
  

  return (
    <div className= "hamburger-menu">
      <button 
        className={`hamburger-icon ${isOpen ? "open" : ""}`}
        onClick={toggleMenu}
        aria-label= "メニューを開く"
        >
          
        <span className="line"></span>
        <span className="line"></span>
        <span className="line"></span>
        </button>

     {/* メニュー項目 */}
   <nav className="menu open">


      <ul>
        <li>
          <a href="/">ホーム</a>
        </li>
        <li>
          <a href="/favorites">お気に入り</a>
        </li>
        <li>
          <a href="/dogrun">ドッグラン</a>
        </li>
        <li>
          <a href="/dogcafe">ドッグカフェ</a>
        </li>
        <li>
          <a href="/petshop">ペットショップ</a>
        </li>
        <li>
          <a href="/hospital">動物病院</a>
        </li>
      </ul>
    </nav>
  </div>
  );
};

export default HamburgerMenu;