import classes from "./Home.module.css";

const Home = () => {
  return (
    <section className={classes["welcome-section"]} id="home">
      <h1>Hello, I'm Nguyen Hoang</h1>
      <p>Some content</p>
    </section>
  );
};

export default Home;
