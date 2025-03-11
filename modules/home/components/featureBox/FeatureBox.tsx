
import React from "react";
import styles from "./featureBox.module.css";

const FeatureBox: React.FC = () => {
  return (
    <div className={styles.featureBox}>
      <div className={styles.textContainer}>
        <h4 className={styles.title}>X Ə B Ə R L Ə R</h4>
        <h2 className={styles.heading}>Ən son yeniliklər</h2>
      </div>
      <div className={styles.buttonContainer}>
        <button className={styles.button}>Hamsına bax</button>
      </div>
    </div>
  );
};

export default FeatureBox;
