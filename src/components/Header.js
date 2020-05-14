import React, { useState } from "react";
import { Link } from "react-router-dom";
import MenuModal from "./MenuModal";

export default function Header() {
  const [visible, setVisible] = useState(false);

  const handleMenuClick = () => {
    setVisible(!visible);
  };

  return (
    <div>
      <div className="header__container">
        <div className="header__menu-icon" onClick={(e) => handleMenuClick()}>
          <img src="/imgs/hamburgericon.svg" alt="menu" />
        </div>

        <MenuModal
          handleMenuClick={() => handleMenuClick()}
          menuVisibility={visible}
        />

        <Link to="/" className="header__title">
          Annie Taylor Chen
        </Link>
        <nav className="header__menu">
          <Link to="/about" className="header__menu__item">
            About
          </Link>
          <Link to="/projects" className="header__menu__item">
            Projects
          </Link>
          <Link to="/contact" className="header__menu__item">
            Contact
          </Link>
        </nav>
      </div>
    </div>
  );
}
