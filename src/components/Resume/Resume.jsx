import React from "react";
import styles from "./Resume.module.scss";

const Resume = () => {
  return (
    <div className={styles.resumeContainer}> 
      <h1>Academic and Career Background</h1>
      <section className={styles.timeline}>
        <div className={styles.titleWrapper}>
          <h3>Experiences</h3>
        </div>
        <ol className={styles.timelineList}>
          <li className={styles.timelineItem}>
            <h4 className={styles.timelineItemTitle}>Software Developer Intern</h4>
            <span>May 2024 — Current</span>
            <p className={styles.timelineText}>
              Developed a web application for ConfiDens Analytics, an AI-driven platform that helps dentists find the best locations to build, relocate, and purchase dental offices across North America.
              <br />
              Utilized technologies and frameworks including Vue, Laravel, MySQL, and Bootstrap.
            </p>
          </li>
          <li className={styles.timelineItem}>
            <h4 className={styles.timelineItemTitle}>UTFR Mapping and Firmware</h4>
            <span>November 2023 — Current</span>
            <p className={styles.timelineText}>
              Integrated Unity splines into the upcoming Driverless simulation engine.
              <br />
              Wrote algorithms for reading and writing GPS messages to the car's CAN bus.
              <br />
              Equipped the car with corner modules to actively receive heat and turn sensor data.
            </p>
          </li>
          <li className={styles.timelineItem}>
            <h4 className={styles.timelineItemTitle}>UTSM Powertrain Electronics Member</h4>
            <span>September 2023 — Current</span>
            <p className={styles.timelineText}>
              Modeled and designed the heat sink to carry the current hydrogen fuel cell, finalized the fuel cell resistors and capacitors to be used in the powertrain circuit, and conducted BMS integration testing.
              <br />
              Furthermore, assisted with carbon fiber layout for the car's body.
            </p>
          </li>
          <li className={styles.timelineItem}>
            <h4 className={styles.timelineItemTitle}>Titan Tutors Tutor</h4>
            <span>2022 — Current</span>
            <p className={styles.timelineText}>
              Provided high school students with comprehensive lessons and materials on subjects including Advanced Functions, Calculus, and Python programming.
            </p>
          </li>
          <li className={styles.timelineItem}>
            <h4 className={styles.timelineItemTitle}>Junior Automotive Technician</h4>
            <span>June 2022 — October 2022</span>
            <p className={styles.timelineText}>
              Worked as a Junior Automotive Technician at Active Green + Ross.
              Assisted in diagnosing and repairing vehicles, performing oil changes, brake changes, alignments, tire changes, transmission fluid changes, and AC repairs.
            </p>
          </li>
        </ol>
      </section>

      <section className={styles.timeline}>
        <div className={styles.titleWrapper}>
          <h3>Education</h3>
        </div>
        <ol className={styles.timelineList}>
          <li className={styles.timelineItem}>
            <h4 className={styles.timelineItemTitle}>Engineering Science, University of Toronto</h4>
            <span>September 2023 — Current</span>
            <p className={styles.timelineText}>
              Pursuing an undergraduate B.A.Sc. in Engineering Science, one of Canada's top engineering programs. Class 2T7 + PEY.
            </p>
            <ul className={styles.dotJots}>
              <li>DV Firmware, UTFR</li>
              <li>Powertrain, UTSM</li>
              <li>Magenta B, SKULE Volleyball</li>
              <li>Technical Volunteer, Engineering Science Educational Conference</li>
            </ul>
          </li>
          <li className={styles.timelineItem}>
            <h4 className={styles.timelineItemTitle}>Agincourt Collegiate Institute</h4>
            <span>September 2019 — June 2023</span>
            <p className={styles.timelineText}>
              Graduated with a 98% average and a Manufacturing SHSM Certificate, earning the Ontario Scholar Award.
            </p>
            <ul className={styles.dotJots}>
              <li>Founder, Agincourt Science Club in 2021 (over 80 active meeting participants in 2022/2023)</li>
              <li>Electrical Subteam, Agincourt Skunkworks (FIRST Robotics, Team 1246)</li>
              <li>Vice President, Agincourt KAST</li>
              <li>Student Representative, Student Administrative Council</li>
              <li>Head of HR, Agincourt Business Council</li>
              <li>Academic Tutor for two year, Numeracy Program</li>
            </ul>
          </li>
          <li className={styles.timelineItem}>
            <h4 className={styles.timelineItemTitle}>Univeristy of Toronto</h4>
            <span>May 2023 — August 2023</span>
            <p className={styles.timelineText}>
              UofT Data Science Mini Coure, Taught by Michael Gerzhoy. Focused on utilizing R, a statistical programming language, to analyze specific data sets and compute trend interpretations.
            </p>
          </li>
          <li className={styles.timelineItem}>
            <h4 className={styles.timelineItemTitle}>UTSM Powertrain Electronics Member</h4>
            <span>September 2023 — Current</span>
            <p className={styles.timelineText}>
              Modeled and designed the heat sink to carry the current hydrogen fuel cell, finalized the fuel cell resistors and capacitors to be used in the powertrain circuit, and conducted BMS integration testing.
              <br />
              Furthermore, assisted with carbon fiber layout for the car's body.
            </p>
          </li>
        </ol>
      </section>
    </div>
  );
}

export default Resume;
