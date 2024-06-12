import React from "react";
import { Worker, Viewer } from "@react-pdf-viewer/core";
import "@react-pdf-viewer/core/lib/styles/index.css";
import styles from "./MediaModal.module.scss";

const MediaModal = ({ isOpen, onClose, mediaType, mediaUrl }) => {
  if (!isOpen) return null;

  const renderMediaContent = () => {
    switch (mediaType) {
      case 'pdf':
        return (
          <iframe
            src={mediaUrl}
            width="100%"
            height="600px"
            style={{ border: 'none' }}
            title="PDF Viewer"
          />
        );
      case 'video':
        return (
          <iframe
            width="560"
            height="315"
            src={mediaUrl}
            title="YouTube video player"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
            className={styles.media}
          />
        );
      case 'iframe':
        return (
          <iframe
            src={mediaUrl}
            title="Embedded content"
            className={styles.media}
            allowFullScreen
          ></iframe>
        );
      case 'website':
        return (
          <iframe
            src={mediaUrl}
            title="Website"
            className={styles.media}
            allowFullScreen
          ></iframe>
        );
      default:
        return <p>Unsupported media type</p>;
    }
  };

  return (
    <div className={styles.overlay} onClick={onClose}>
      <div className={styles.modal} onClick={(e) => e.stopPropagation()}>
        <button onClick={onClose} className={styles.closeButton}>
          &times;
        </button>
        {renderMediaContent()}
      </div>
    </div>
  );
};

export default MediaModal;