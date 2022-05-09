import { FaGithub, FaLinkedinIn, FaCodepen } from 'react-icons/fa';

import classes from './Home.module.css';

const Home = () => {
  return (
    <section className={classes['home']} id='home'>
      <div className={classes['wrapper']}>
        <div className={classes['dots']}>
          <div className={`${classes['dot']} ${classes['dot-red']}`}></div>
          <div className={`${classes['dot']} ${classes['dot-yellow']}`}></div>
          <div className={`${classes['dot']} ${classes['dot-green']}`}></div>
        </div>

        <div className={classes['content']}>
          <article className={classes['column-left']}>
            <h1 className={classes['title']}>
              Hi, I'm <br />
              <span className={classes['name']}>Nguyen Hoang</span> <br />
              Front End Dev
            </h1>
            <a
              className={`${classes['btn']} ${classes['btn-contact']}`}
              href='#contact'
            >
              Contact Me
            </a>
          </article>
          <article className={classes['column-right']}>
            <div className={classes['profile']}>
              <div className={classes['profile-bg']}></div>
            </div>
            <div className={classes['socials']}>
              <a
                href='https://www.linkedin.com/in/hoang-nguyen-8b6733228/'
                target='_blank'
                rel='noreferrer'
                aria-label='linkedin'
              >
                <FaLinkedinIn
                  className={`${classes['icon']} ${classes['linkedin']}`}
                />
              </a>
              <a
                href='https://github.com/Hoang0211'
                target='_blank'
                rel='noreferrer'
                aria-label='github'
              >
                <FaGithub
                  className={`${classes['icon']} ${classes['github']}`}
                />
              </a>
              <a
                href='https://codepen.io/n3verland0211'
                target='_blank'
                rel='noreferrer'
                aria-label='codepen'
              >
                <FaCodepen
                  className={`${classes['icon']} ${classes['codepen']}`}
                />
              </a>
            </div>
          </article>
        </div>
      </div>
    </section>
  );
};

export default Home;
