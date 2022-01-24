import ReactDOM from "react-dom";

import classes from "./StatusModal.module.css";

const portalElement = document.getElementById("overlays");

const Backdrop = () => {
  return <div className={classes.backdrop} />;
};

const StatusModal = (props) => {
  return (
    <>
      {ReactDOM.createPortal(<Backdrop />, portalElement)}
      {ReactDOM.createPortal(
        <div className={classes["modal"]}>
          <div className={classes["status"]}>{props.status}</div>
          <button onClick={props.hideStatus}>Close</button>
        </div>,
        portalElement
      )}
    </>
  );
};

export default StatusModal;
