import CV from "../../../assets/Nguyen-Viet-Hoang-CV.pdf";

import classes from "./About.module.css";

const About = () => {
  return (
    <section className={classes["about"]} id="about">
      <h1 className={classes["title"]}>About</h1>
      <div className={classes["about-container"]}>
        <div className={classes["left-column"]}>
          <div className={classes["about-picture-bg"]}></div>
        </div>
        <div className={classes["right-column"]}>
          <h2 className={classes["subtitle"]}>Personal Statement</h2>
          <p className={classes["statement"]}>
            A hardworking, motivated student with a strong background in front
            end development. I am a third year IT student studying in
            South-Eastern Finland University of Applied Sciences, and I am
            looking for opportunities to gain more experience as a developer.
          </p>
          <h2 className={classes["subtitle"]}>Skills</h2>
          <p>
            A front end developer with primary focus on React:{" "}
            <a target="_blank" href={CV} rel="noreferrer">
              Download Resume
            </a>
          </p>
          <div className={classes["skills-container"]}>
            <ul>
              <li>HTML/CSS</li>
              <li>JavaScript</li>
              <li>JQuery</li>
              <li>React</li>
              <li>Redux</li>
            </ul>

            <ul>
              <li>NodeJS</li>
              <li>MongoDB</li>
              <li>SQL Server</li>
              <li>C#/Unity</li>
              <li>Git</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
