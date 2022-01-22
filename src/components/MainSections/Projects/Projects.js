import ProjectItem from "./ProjectItem";

import classes from "./Projects.module.css";

const Projects = () => {
  return (
    <section className={classes["projects"]} id="projects">
      <h1 className={classes["title"]}>Projects</h1>
      <h3 className={classes["subtitle"]}>
        Click on the image to go to project deployed page. <br />
        For more projects, you can go to my{" "}
        <a target="_blank" href="https://github.com/Hoang0211" rel="noreferrer">
          GitHub
        </a>{" "}
        and{" "}
        <a
          target="_blank"
          href="https://codepen.io/n3verland0211"
          rel="noreferrer"
        >
          Codepen
        </a>{" "}
        page!
      </h3>
      <div className={classes["projects-container"]}>
        <ProjectItem
          img={require("../../../assets/HealthyDietQuiz.jpg")}
          link="https://healthy-diet-quiz.herokuapp.com/"
          title="Healthy Diet Quiz"
          tech="HTML, CSS, JS, NodeJS, Express"
          intro="A quiz application that allows users to test their diet! This is a school project that I developed with two other students."
          code="https://github.com/Hoang0211/HealthyDietQuizApp"
        />
        <ProjectItem
          img={require("../../../assets/Calculator.jpg")}
          link="https://codepen.io/n3verland0211/full/RwVjPLQ"
          title="Calculator"
          tech="React"
          intro="A calculator application!"
          code="https://codepen.io/n3verland0211/pen/RwVjPLQ"
        />
        <ProjectItem
          img={require("../../../assets/MovieInfo.jpg")}
          link="https://hoang0211.github.io/movie-info/"
          title="Movie Info"
          tech="React"
          intro="An application that allows users to view movies info!"
          code="https://github.com/Hoang0211/movie-info"
        />
        <ProjectItem
          img={require("../../../assets/WeatherInfo.jpg")}
          link="https://hoang0211.github.io/weather-info/"
          title="Weather Info"
          tech="React"
          intro="An application that allows users to see weather info of different cities!"
          code="https://github.com/Hoang0211/weather-info"
        />
        <ProjectItem
          img={require("../../../assets/TodoList.jpg")}
          link="https://hoang0211.github.io/to-do-list/"
          title="Todo List"
          tech="React"
          intro="An application that allows users to manage tasks that they need to complete!"
          code="https://github.com/Hoang0211/to-do-list"
        />
        <ProjectItem
          img={require("../../../assets/SpaceW.jpg")}
          link="https://n3verland.itch.io/spacew"
          title="SpaceW"
          tech="C#, Unity"
          intro="An offline 2 players board game developed using Unity!"
        />
      </div>
    </section>
  );
};

export default Projects;
