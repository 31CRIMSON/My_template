import React, { useState } from "react";
import { Link } from 'react-router-dom';
import '/src/pages/styles/Menu.sass';

import MenuIcon from '@/images/MenuIcon.svg';

function Menu() {
  const [menuOpened, setMenuOpened] = useState(false);

  const toggleMenu = () => {
    setMenuOpened(!menuOpened);
  };

  return (
    <header>
      {menuOpened ? (
        <div className="menu-icon" onClick={toggleMenu}>
          <img src={MenuIcon} alt="Menu Icon" />
        </div>
      ) : (
        <div className="menu-icon" onClick={toggleMenu}>
          <img src={MenuIcon} alt="Menu Icon" />
        </div>
      )}
      <nav className={menuOpened ? "menu show" : "menu"}>
        <ul>
          <li><Link to="/home" onClick={() => setMenuOpened(false)} className="Homepage">Homeage</Link></li>
          <li><Link to="/article" onClick={() => setMenuOpened(false)}>Article</Link></li>
          <li><Link to="/article" onClick={() => setMenuOpened(false)}>Article1</Link></li>
          <li><Link to="/article" onClick={() => setMenuOpened(false)}>Article2</Link></li>
        </ul>
      </nav>
    </header>
  );
}

export default Menu;
