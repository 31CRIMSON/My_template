import { useState } from "react";
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';
import { Link } from 'react-router-dom';
import '/src/pages/styles/Menu.sass';

function Menu () {
  const [menuOpened, setMenuOpened] = useState(false);

  const toggleMenu = () => {
    setMenuOpened(!menuOpened);
  };

  return (
    <header>
      {menuOpened ? (
        <CloseIcon className="menu-icon" onClick={toggleMenu}/>
      ) : (
        <MenuIcon className="menu-icon" onClick={toggleMenu}/>
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