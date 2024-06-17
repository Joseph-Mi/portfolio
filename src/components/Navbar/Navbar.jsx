// src/components/Navbar/Navbar.jsx

import React from 'react';
import { Link } from 'react-router-dom';
import styles from './Navbar.module.scss'; 
import Hero from '../Hero/Hero';

const Navbar = () => {
  return (
    <nav className={styles.navbar}>
      <div className={styles.heroContainer}>
        <Hero />
      </div>
      <div className={styles.navLinks}>
        <ul>
        <li>
            <Link to="/home">
              <button className={styles.navButton}>Home</button>
            </Link>
          </li>
          <li>
            <Link to="/about">
              <button className={styles.navButton}>About</button>
            </Link>
          </li>
          <li>
            <Link to="/resume">
              <button className={styles.navButton}>Background</button>
            </Link>
          </li>
          <li>
            <Link to="/portfolio">
              <button className={styles.navButton}>Projects</button>
            </Link>
          </li>
          <li>
            <Link to="/contact">
              <button className={styles.navButton}>Contact</button>
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;