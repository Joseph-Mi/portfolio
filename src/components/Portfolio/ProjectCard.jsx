import React, { useState } from "react";
import styles from "./ProjectCard.module.scss";
import { getImageUrl } from "../../utils/utils";
import Modal from "../Modals/Modal";
import MediaModal from "../Modals/MediaModal";

const ProjectCard = ({ project }) => {
  const { title, imageSrc, description, skills, info, source, sourceType } = project;
  const [isInfoModalOpen, setIsInfoModalOpen] = useState(false);
  const [isMediaModalOpen, setIsMediaModalOpen] = useState(false);

  const handleOpenInfoModal = () => {
    setIsInfoModalOpen(true);
  };

  const handleCloseInfoModal = () => {
    setIsInfoModalOpen(false);
  };

  const handleOpenMediaModal = () => {
    setIsMediaModalOpen(true);
  };

  const handleCloseMediaModal = () => {
    setIsMediaModalOpen(false);
  };

  return (
    <div className={styles.container}>
      <img
        src={getImageUrl(imageSrc)}
        alt={`Image of ${title}`}
        className={styles.image}
      />
      <h3 className={styles.title}>{title}</h3>
      <p className={styles.description}>{description}</p>
      <ul className={styles.skills}>
        {skills.map((skill, id) => (
          <li key={id} className={styles.skill}>
            {skill}
          </li>
        ))}
      </ul>
      <div className={styles.links}>
        <button onClick={handleOpenInfoModal} className={styles.link}>
          Info
        </button>
        <button onClick={handleOpenMediaModal} className={styles.link}>
          Source
        </button>
      </div>
      <Modal
        isOpen={isInfoModalOpen}
        onClose={handleCloseInfoModal}
        project={project}
      />
      <MediaModal
        isOpen={isMediaModalOpen}
        onClose={handleCloseMediaModal}
        mediaType={sourceType}
        mediaUrl={source}
      />
    </div>
  );
};

export default ProjectCard;