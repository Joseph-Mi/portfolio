import React from 'react';
import styles from "./App.module.scss";
import { About } from "./components/About/About";
import { Contact } from "./components/Contact/Contact";
import { Experience } from "./components/Experience/Experience";
import { Hero } from "./components/Hero/Hero";
import { Navbar } from "./components/Navbar/Navbar.jsx";
import { Projects } from "./components/Projects/Projects";

const App = () => {
  return (
    <div>
      <h1>Hello
        <Navbar></Navbar>
        <div>
            {/* <Hero></Hero> */}
            <About></About>
            <Experience></Experience>
            <Projects></Projects>
            <Contact></Contact>
        </div>
      </h1>
    </div>
  );
};

export default App;