import classes from "./ProjectItem.module.css";

const ProjectItem = (props) => {
  return (
    <div className={classes["project-item"]}>
      <a
        className={classes["project-item"]}
        target="_blank"
        href={props.link}
        rel="noreferrer"
      >
        <img src={props.img} alt={props.title} />
      </a>
      <div className={classes["project-title"]}>{props.title}</div>
      <div className={classes["project-overview"]}>
        <div className={classes["technology"]}>Techonology: {props.tech}</div>
        <div className={classes["intro"]}>{props.intro}</div>
        {props.code && (
          <div className={classes["code"]}>
            You can find the code{" "}
            <a target="_blank" href={props.code} rel="noreferrer">
              here
            </a>
          </div>
        )}
      </div>
    </div>
  );
};
export default ProjectItem;
