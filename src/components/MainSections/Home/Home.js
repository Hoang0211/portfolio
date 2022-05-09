import { FaGithub, FaLinkedinIn, FaCodepen } from 'react-icons/fa';

import classes from './Home.module.css';

const Home = () => {
  return (
    <section className={classes['home']} id='home'>
      <div className={classes['home__wrapper']}>
        <div className={classes['home__dots']}>
          <div className={`${classes['dot']} ${classes['dot-red']}`}></div>
          <div className={`${classes['dot']} ${classes['dot-yellow']}`}></div>
          <div className={`${classes['dot']} ${classes['dot-green']}`}></div>
        </div>

        <div className={classes['home__content']}>
          <article className={classes['home__column-left']}>
            <h1 className={classes['home__title']}>
              Hi, I'm <br />
              <span className={classes['home__name']}>Nguyen Hoang</span> <br />
              Front End Dev
            </h1>
            <a
              className={`${classes['btn']} ${classes['home__contact']}`}
              href='#contact'
            >
              Contact Me
            </a>
          </article>
          <article className={classes['home__column-right']}>
            <div className={classes['home__profile']}>
              <div className={classes['home__profile-bg']}></div>
            </div>
            <div className={classes['home__socials']}>
              <a
                href='https://www.linkedin.com/in/hoang-nguyen-8b6733228/'
                target='_blank'
                rel='noreferrer'
              >
                <FaLinkedinIn
                  className={`${classes['home__icon']} ${classes['home__socials-linkedin']}`}
                />
              </a>
              <a
                href='https://github.com/Hoang0211'
                target='_blank'
                rel='noreferrer'
              >
                <FaGithub
                  className={`${classes['home__icon']} ${classes['home__socials-github']}`}
                />
              </a>
              <a
                href='https://codepen.io/n3verland0211'
                target='_blank'
                rel='noreferrer'
              >
                <FaCodepen
                  className={`${classes['home__icon']} ${classes['home__socials-codepen']}`}
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
