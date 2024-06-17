import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import styles from './App.module.scss';
import Navbar from './components/Navbar/Navbar';
import AnimatedRoutes from './components/AnimatedRoutes/AnimatedRoutes';

const App = () => {
  return (
    <Router>
      <div className={styles.bg}>
        <div className={styles.stars} id="stars"></div>
        <div className={styles.stars2} id="stars2"></div>
        <div className={styles.stars3} id="stars3"></div>
        <div className={styles.app}>
          <div className={styles.sidebar}>
            <Navbar />
          </div>
          <div className={styles.main}>
            <AnimatedRoutes />
          </div>
        </div>
      </div>
    </Router>
  );
};

export default App;
