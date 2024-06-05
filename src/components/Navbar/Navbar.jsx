import React from 'react';
import styles from './Navbar.module.scss'; // Assuming you have a CSS module for styling
import Hero from '../Hero/Hero';

const Navbar = () => {
  return (
    <nav className={`${styles.navbar} position-relative`}>
      <div className={`${styles.heroContainer} position-absolute top-0 start-0 w-100`}>
        <Hero></Hero>
      </div>
      <div className={`${styles.sidebar} position-absolute bottom-0 start-50 translate-middle-x`}>
        <ul className="list-unstyled d-flex justify-content-center">
          <li className="mx-2">
            <a href="#about">About</a>
          </li>
          <li className="mx-2">
            <a href="#education">Education</a>
          </li>
          <li className="mx-2">
            <a href="#experience">Experience</a>
          </li>
          <li className="mx-2">
            <a href="#projects">Projects</a>
          </li>
          <li className="mx-2">
            <a href="#contact">Contact</a>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;