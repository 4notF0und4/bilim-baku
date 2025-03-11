
import React from "react";
import styles from "./galleryFeatBox.module.css";

const GalleryFeatBox: React.FC = () => {
  return (
    <div className={styles.featureBox}>
      <div className={styles.textContainer}>
        <h4 className={styles.title}>Q A L A R E Y A</h4>
        <h2 className={styles.heading}>Xüsusi anlardan görüntülər</h2>
      </div>
      <div className={styles.buttonContainer}>
        <button className={styles.button}>Hamsına bax</button>
      </div>
    </div>
  );
};

export default GalleryFeatBox;

