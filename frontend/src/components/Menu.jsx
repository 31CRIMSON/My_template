import React, { useState } from "react";
import { Link } from 'react-router-dom';
import '/$styles/Menu.sass';

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
          <li><Link to="/article-1" onClick={() => setMenuOpened(false)}>Why Dima is great</Link></li>
          <li><Link to="/article-2" onClick={() => setMenuOpened(false)}>Why Dima is awesome</Link></li>
          <li><Link to="/article-3" onClick={() => setMenuOpened(false)}>Why Dima is good</Link></li>
        </ul>
      </nav>
    </header>
  );
}

export default Menu;
