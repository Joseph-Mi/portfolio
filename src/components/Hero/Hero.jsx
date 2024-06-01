import React from "react";
import styles from "./Hero.module.scss";
import {grtImageUrl} from "../../utils";

export const Hero = () => {
  return (
    <div className={styles.hero}>
      <div className={styles.hero__text}>
        <h1 className={styles.hero__text__name}>Joseph Mi</h1>
        <h2 className={styles.hero__text__desc}>University of Toronto Engineering Student</h2>
      </div>
      <div className={styles.hero__image}>
        <img src={grtImageUrl("hero.png")} alt="Hero" />
      </div>
    </div>
  );
}
