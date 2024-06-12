import React from 'react';
import styles from './Portfolio.module.scss';
import projects from "../../data/projects.json";
import ProjectCard from "./ProjectCard"; // Corrected import

const Portfolio = () => {
  return (
    <section className={styles.container} id="projects">
      <h2 className={styles.title}>Projects</h2>
      <div className={styles.projects}>
        {projects.map((project, id) => (
          <ProjectCard key={id} project={project} />
        ))}
      </div>
    </section>
  );
};

export default Portfolio;