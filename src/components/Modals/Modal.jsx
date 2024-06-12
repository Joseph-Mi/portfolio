import React from "react";
import styles from "./Modal.module.scss";
import { getImageUrl } from "../../utils/utils";

const Modal = ({ isOpen, onClose, project }) => {
  if (!isOpen) return null;

  return (
    <div className={styles.overlay}>
      <div className={styles.modal}> 
        <h2>{project.title}</h2>
        <p>{project.description}</p>
        <div className={styles.photoScroll}>
          {project.images.map((image, index) => (
            <img
              key={index}
              src={getImageUrl(image)} // Use the correct variable name here
              alt={`Project ${project.title} - ${index + 1}`}
              className={styles.photo}
            />
          ))}
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