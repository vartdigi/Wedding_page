import Menu from '../../../../assets/menu.png';
import './Header.css';
import Krizek from '../../../../assets/krizek.png';
import React, { useState } from 'react';

export const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };
  const handleLinkClick = (sectionId) => {
    setMenuOpen(false);
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
    }
  };
  return (
    <div className="header">
      <div onClick={toggleMenu} className="menu">
        <img src={menuOpen ? Krizek : Menu} />
      </div>
      {menuOpen && (
        <div className="menu-items">
          <a href="#Uvod" onClick={() => handleLinkClick('Uvod')}>
            Úvod
          </a>
          <a href="#Misto" onClick={() => handleLinkClick('Misto')}>
            Místo konání
          </a>
          <a href="#Ubytovani" onClick={() => handleLinkClick('Ubytovani')}>
            Ubytování
          </a>
          <a href="#Program" onClick={() => handleLinkClick('Program')}>
            Program
          </a>
          <a href="#Kontakt" onClick={() => handleLinkClick('Kontakt')}>
            Kontakt
          </a>
        </div>
      )}
    </div>
  );
};
