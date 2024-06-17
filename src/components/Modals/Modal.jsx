import React, { useState } from "react";
import styles from "./Modal.module.scss";
import { getImageUrl } from "../../utils/utils";

const Modal = ({ isOpen, onClose, project }) => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  if (!isOpen) return null;

  const handleNext = () => {
    setCurrentImageIndex((prevIndex) => (prevIndex + 1) % project.images.length);
  };

  const handlePrev = () => {
    setCurrentImageIndex((prevIndex) =>
      prevIndex === 0 ? project.images.length - 1 : prevIndex - 1
    );
  };

  const handleOverlayClick = (e) => {
    if (e.target === e.currentTarget) {
      onClose();
    }
  };

  return (
    <div className={styles.overlay} onClick={handleOverlayClick}>
      <div className={styles.modal}>
        <h2>{project.title}</h2>
        <p>{project.info}</p>
        <div className={styles.photoScroll}>
          <button onClick={handlePrev} className={`${styles.navButton} ${styles.prev}`}>Previous</button>
          <img
            src={getImageUrl(project.images[currentImageIndex])}
            alt={`Project ${project.title} - ${currentImageIndex + 1}`}
            className={styles.photo}
          />
          <button onClick={handleNext} className={`${styles.navButton} ${styles.next}`}>Next</button>
        </div>
        <ul className={styles.skills}>
          {project.skills.map((skill, id) => (
            <li key={id} className={styles.skill}>
              {skill}
            </li>
          ))}
        </ul>
        <button onClick={onClose} className={styles.closeButton}>
          Close
        </button>
      </div>
    </div>
  );
};

export default Modal;
