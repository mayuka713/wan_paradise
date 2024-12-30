import React from "react";
import { Link } from "react-router-dom";
import HamburgerMenu from "../HamburgerMenu";
import "./Header.css";

const Header: React.FC = () => { 
  return (
    <>
    <HamburgerMenu />
   {/* ヘッダー */}
      <header className="App-header">
        <h1>Wan Paradise</h1>
        <nav className="header-nav">
          <Link to="/dogrun">ドッグラン</Link>
          <Link to="/dogcafe">ドッグカフェ</Link>
          <Link to="/petshop">ペットショップ</Link>
          <Link to="/hospital">動物病院</Link>
          <Link to="/favorite">お気に入り</Link>
        </nav>
      </header>
      </>
  );
};

export default Header;

