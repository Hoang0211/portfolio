import { FaBars } from "react-icons/fa";

import classes from "./Header.module.css";

const Header = () => {
  return (
    <header>
      <nav className={classes["nav"]}>
        <span className={classes["logo"]}>Nguyen Hoang</span>

        <input type="checkbox" className={classes["check"]} id="check" />
        <label className={classes["toggle"]} htmlFor="check">
          <FaBars className={classes["bars-icon"]} />
        </label>

        <ul className={classes["nav-list"]}>
          <li className={classes["nav-item"]}>
            <a href="#home" className={classes["nav-link"]}>
              Home
            </a>
          </li>
          <li className={classes["nav-item"]}>
            <a href="#about" className={classes["nav-link"]}>
              About
            </a>
          </li>
          <li className={classes["nav-item"]}>
            <a href="#projects" className={classes["nav-link"]}>
              Projects
            </a>
          </li>
          <li className={classes["nav-item"]}>
            <a href="#contact" className={classes["nav-link"]}>
              Contact
            </a>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
