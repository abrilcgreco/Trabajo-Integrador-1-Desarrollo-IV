import "./Header.css";

import { FaSearch } from "react-icons/fa";
import { FaShoppingCart } from "react-icons/fa";
import { FaBars } from "react-icons/fa";

function Header() {
  return (
    <header className="header">

      <div className="logo"></div>

      <nav>

        <ul>

          <li>
            <a href="#">Inicio</a>
          </li>

        </ul>

      </nav>

      <div className="header-right">

        <div className="search-box">

          <input
            type="text"
            placeholder=""
          />

          <FaSearch className="search-icon"/>

        </div>

        <FaBars className="icon"/>

        <FaShoppingCart className="icon"/>

      </div>

    </header>
  );
}

export default Header; 

