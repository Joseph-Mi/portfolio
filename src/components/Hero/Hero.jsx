import React from "react";
import styles from "./Hero.module.scss";
import { getImageUrl } from "../../utils/utils";

const Hero = () => {
  const myImage = getImageUrl("my_photos/heroImage.png");
  const emailImage = getImageUrl("logos/email.png");
  const linkedinImage = getImageUrl("logos/linkedin.png");
  const githubImage = getImageUrl("logos/github.png");
  const resumeImage = getImageUrl("logos/resume.png");

  return (
    <div className={styles.hero}>
      <div>
        <img className={styles.hero__image} src={myImage} alt="Hero" />
      </div>
      <div className={styles.hero__text}>
        <h1 className={styles.hero__text__name}>Joseph Mi</h1>
        <h2 className={styles.hero__text__desc}>University of Toronto Engineering Student</h2>
      </div>
      <div className={styles.key_container}>
        <img src={emailImage} alt="Email" />
        <h3>Email</h3>
        <a href="mailto:jm.josephmi@gmail.com">jm.josephmi@gmail.com</a>
      </div>
      <div className={styles.key_container}>
        <img src={linkedinImage} alt="LinkedIn" />
        <h3>LinkedIn</h3>
        <a href="https://www.linkedin.com/in/joseph-mi/" target="_blank" rel="noopener noreferrer">My LinkedIn</a>
      </div>
      <div className={styles.key_container}>
        <img src={githubImage} alt="GitHub" />
        <h3>GitHub</h3>
        <a href="https://github.com/Joseph-Mi" target="_blank" rel="noopener noreferrer">My Github</a>
      </div>
      <div className={styles.key_container}>
        <img src={resumeImage} alt="Resume" />
        <h3>Resume</h3>
        <a href="/public/YizhouMi.pdf" download="joseph_resume.pdf">My Resume</a>
      </div>
    </div>
  );
}

export default Hero;