import Welcome from "./Welcome/Welcome";
import About from "./About/About";
import Projects from "./Projects/Projects";
import Contact from "./Contact/Contact";

const Sections = () => {
  return (
    <main>
      <Welcome />
      <About />
      <Projects />
      <Contact />
    </main>
  );
};

export default Sections;
