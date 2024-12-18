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
        className={`menu-button ${isOpen ? "open" : ""}`}
        onClick={toggleMenu}
        aria-label= "メニューを開く"
        >
           {/* 状態に応じてテキストを変更する */}
        {isOpen ? "Close" : "Menu"}
        <span className="menu-underline"></span> 
      </button>

     {/* メニュー項目 */}
     <nav className={`menu ${isOpen ? "open" : ""}`}>
      <ul>
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