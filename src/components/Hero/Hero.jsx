import React from "react";
import styles from "./Hero.module.scss";
import { getImageUrl } from "../../utils/utils";

const Hero = () => {
  console.log("Hero component is rendering");

  const imageURL = getImageUrl("my_photos/heroImage.png");

  return (
    <div className={styles.hero}>
      <div>
        <img className={styles.hero__image} src={imageURL} alt="Hero" />
      </div>
      <div className={styles.hero__text}>
        <h1 className={styles.hero__text__name}>Joseph Mi</h1>
        <h2 className={styles.hero__text__desc}>University of Toronto Engineering Student</h2>
      </div>
      <div className="key_container">
        <img src="" alt="" />
        <h3>Email</h3>
        <a href="jm.josephmi@gmail.com">jm.josephmi@gmail.com</a>
      </div>
      <div>
        <img src="" alt="" />
        <h3>LinkedIn</h3>
        <a href="https://www.linkedin.com/in/joseph-mi/">Joseph Mi</a>
      </div>
      <div>
        <img src="" alt="" />
        <h3>GitHub</h3>
        <a href="https://github.com/Joseph-Mi" ></a>
      </div>
      <div>
        <img src="" alt="" />
        <h3 >Resume</h3>
      </div>
    </div>
  );
}

export default Hero;