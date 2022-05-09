import CV from '../../../assets/Nguyen-Viet-Hoang-CV.pdf';

import classes from './About.module.css';

const About = () => {
  return (
    <section className={classes['about']} id='about'>
      <h2 className={classes['title']}>About</h2>
      <div className={classes['content']}>
        <article className={classes['column-left']}>
          <div className={classes['picture-bg']}></div>
        </article>
        <article className={classes['column-right']}>
          <h3 className={classes['subtitle']}>Personal Statement</h3>
          <p className={classes['statement']}>
            I am a motivated, hardworking software developer with a strong
            background in front-end development. Rightnow, I am a third year
            student at South-Eastern University of Applied Sciences and looking
            for opportunities to gain more experience as a web developer.
          </p>
          <h3 className={classes['subtitle']}>Skills</h3>
          <p>
            A front end developer with primary focus on React:
            <a target='_blank' href={CV} rel='noreferrer'>
              Download Resume
            </a>
          </p>
          <div className={classes['skills']}>
            <ul>
              <li>HTML/CSS/JS</li>
              <li>CSS Module/SCSS</li>
              <li>Typescript</li>
              <li>ReactJS</li>
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
        </article>
      </div>
    </section>
  );
};

export default About;
