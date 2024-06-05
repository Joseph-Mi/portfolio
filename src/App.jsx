// src/App.jsx

import React from 'react';
import styles from './App.module.scss';
import Navbar from './components/Navbar/Navbar';

const App = () => {
  return <div className={styles.App}>
    <Navbar />
  </div>
};

export default App;
