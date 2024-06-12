// src/App.jsx

import React from 'react';
import styles from './App.module.scss';
import Navbar from './components/Navbar/Navbar';
import About from './components/About/About';
import Contact from './components/Contact/Contact';
import Portfolio from './components/Portfolio/Portfolio';
import Resume from './components/Resume/Resume';

const App = () => {
  return <div className={styles.App}>
    <div>
      <Navbar></Navbar>
    </div>
    <div>
      <About></About>
      <Resume></Resume>
      <Contact></Contact>
      <Portfolio></Portfolio>
    </div>
    
    </div>;
   
};

export default App;
