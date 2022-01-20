import { FaBars } from "react-icons/fa";

import classes from "./Header.module.css";

const Header = () => {
  return (
    <header>
      <nav className={classes["nav"]}>
        <span className={classes["nav__logo"]}>Nguyen Hoang</span>

        <input type="checkbox" className={classes["check"]} id="check" />
        <label className={classes["nav__toggle"]} for="check">
          <FaBars className={classes["bar-icon"]} />
        </label>

        <ul className={classes["nav__list"]}>
          <li className={classes["nav__item"]}>
            <a href="#home" className={classes["nav__link"]}>
              Home
            </a>
          </li>
          <li className={classes["nav__item"]}>
            <a href="#about" className={classes["nav__link"]}>
              About
            </a>
          </li>
          <li className={classes["nav__item"]}>
            <a href="#projects" className={classes["nav__link"]}>
              Projects
            </a>
          </li>
          <li className={classes["nav__item"]}>
            <a href="#contact" className={classes["nav__link"]}>
              Contact
            </a>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
