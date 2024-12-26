import React, { useState } from "react";
import "./HamburgerMenu.css";

const HamburgerMenu = () => {
  const [isOpen, setIsOpen] = useState(false);

  const menuItems = [
    { label: "お気に入り", link: "/favorites" },
    { label: "ドッグラン", link: "/dogrun" },
    { label: "ドッグカフェ", link: "/dogcafe" },
    { label: "ペットショップ", link: "/petshop" },
    { label: "動物病院", link: "/hospital" },

  ];
  const togglwMenu = () => {
    setIsOpen((prev) => !prev);

  };
  return (
    <div className="hamburger-menu">
      <label className="burger" htmlFor="burger">
        <input type="checkbox" id="burger" onClick={togglwMenu} />
        <span />
        <span />
        <span />
      </label>
      <nav className={`menu ${isOpen ? "visible" : ""}`}>
        <ul>
          {/*メニュー項目をループで表示*/}
          {menuItems.map((item, index) => (
            <li key={index}>
              <a href={item.link}>{item.label}</a>
            </li>
          ))}

        </ul>
      </nav>
    </div>
  );
};

export default HamburgerMenu;
