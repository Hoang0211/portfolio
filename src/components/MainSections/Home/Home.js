import { FaGithub, FaLinkedinIn, FaCodepen } from "react-icons/fa";

import classes from "./Home.module.css";

const Home = () => {
  return (
    <section className={classes["home"]} id="home">
      <div className={classes["intro-wrapper"]}>
        <div className={classes["dots-wrapper"]}>
          <div className={classes["dot-yellow"]}></div>
          <div className={classes["dot-green"]}></div>
          <div className={classes["dot-red"]}></div>
        </div>

        <div className={classes["content-wrapper"]}>
          <div className={classes["left-column"]}>
            <h1>
              Hi, I'm <br />
              <span className={classes["name"]}>Nguyen Hoang</span> <br />
              Front End Dev
            </h1>
            <a className={classes["contact-btn"]} href="#contact">
              Contact Me
            </a>
          </div>
          <div className={classes["right-column"]}>
            <div className={classes["profile-picture"]}>
              <div className={classes["profile-picture-bg"]}></div>
            </div>
            <div className={classes["social-container"]}>
              <a
                href="https://www.linkedin.com/in/hoang-nguyen-8b6733228/"
                target="_blank"
                rel="noreferrer"
              >
                <FaLinkedinIn className={classes["linkedin"]} />
              </a>
              <a
                href="https://github.com/Hoang0211"
                target="_blank"
                rel="noreferrer"
              >
                <FaGithub className={classes["github"]} />
              </a>
              <a
                href="https://codepen.io/n3verland0211"
                target="_blank"
                rel="noreferrer"
              >
                <FaCodepen className={classes["codepen"]} />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Home;
