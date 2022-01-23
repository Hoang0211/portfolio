import { useRef } from "react";
import emailjs from "@emailjs/browser";

import { BsPersonFill } from "react-icons/bs";
import { TiLocation } from "react-icons/ti";
import { MdEmail } from "react-icons/md";

import classes from "./Contact.module.css";

const Contact = () => {
  const form = useRef();

  const formSubmitHandler = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        process.env.REACT_APP_SERVICE_ID,
        process.env.REACT_APP_TEMPLATE_ID,
        form.current,
        process.env.REACT_APP_USER_ID
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
  };

  return (
    <section className={classes["contact"]} id="contact">
      <h1 className={classes["title"]}>Contact</h1>
      <div className={classes["info"]}>
        <h2 className={classes["subtitle"]}>Get in touch</h2>
        <p className={classes["intro"]}>
          Let's work together! If you have any further question, please send me
          email to the address below.
        </p>
        <div className={classes["contact-container"]}>
          <div className={classes["contact-info"]}>
            <BsPersonFill className={classes["info-symbol"]} />
            <div>
              <p className={classes["info-title"]}>Name</p>
              <p>Nguyen Hoang</p>
            </div>
          </div>
          <div className={classes["contact-info"]}>
            <TiLocation className={classes["info-symbol"]} />
            <div>
              <p className={classes["info-title"]}>Address</p>
              <p>Mikkeli, Finland</p>
            </div>
          </div>
          <div className={classes["contact-info"]}>
            <MdEmail className={classes["info-symbol"]} />
            <div>
              <p className={classes["info-title"]}>Email</p>
              <p>n3verland0211@gmail.com</p>
            </div>
          </div>
        </div>
      </div>
      <div className={classes["message"]}>
        <h2 className={classes["subtitle"]}>Message me</h2>
        <form ref={form} onSubmit={formSubmitHandler}>
          <input
            className={classes["input-control"]}
            type="email"
            name="email"
            placeholder="Email"
            required
          />
          <input
            className={classes["input-control"]}
            type="text"
            name="subject"
            placeholder="Subject"
            required
          />
          <textarea
            className={classes["input-control"]}
            name="message"
            placeholder="Message..."
          ></textarea>
          <button className={classes["input-control"]} type="submit">
            Send Message
          </button>
        </form>
      </div>
    </section>
  );
};

export default Contact;
