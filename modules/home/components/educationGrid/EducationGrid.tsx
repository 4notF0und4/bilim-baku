
import React from "react";
import Image from "next/image";
import styles from "./educationGrid.module.css";

const EducationGrid = () => {
  return (
    <div className={styles.gridContainer}>
      <div className={styles.itemOne}>
        <Image 
          src="/images/edu1.jpg" 
          alt="Education 1" 
          fill 
          priority
          sizes="(max-width: 768px) 100vw, 37.5rem"
          style={{ objectFit: "cover" }}
        />
        <div className={styles.overlay}>
    <h2>Bİlİm Bakı yenİ yarışlar elan edİr! Qoşulmağa tələsİn!</h2>
    <span>29 Avq 2021</span>
  </div>
      </div>
      <div className={styles.itemTwo}>
        <Image 
          src="/images/edu2.jpg" 
          alt="Education 2" 
          fill 
          sizes="(max-width: 768px) 100vw, 37.5rem"
          style={{ objectFit: "cover" }} 
        />
        <div className={styles.overlay}>
    <h2>Bİlİm Bakı yenİ yarışlar elan edİr! Qoşulmağa tələsİn!</h2>
    <span>29 Avq 2021</span>
  </div>
      </div>
      <div className={styles.itemThree}>
        <Image 
          src="/images/edu3.jpg" 
          alt="Education 3" 
          fill 
          sizes="(max-width: 768px) 100vw, 37.5rem"
          style={{ objectFit: "cover" }} 
        /> <div className={styles.overlay}>
        <h2>Bİlİm Bakı yenİ yarışlar elan edİr! Qoşulmağa tələsİn!</h2>
        <span>29 Avq 2021</span>
      </div>
      </div>
      <div className={styles.itemFour}>
        <Image 
          src="/images/edu4.jpg" 
          alt="Education 4" 
          fill 
          sizes="(max-width: 768px) 100vw, 37.5rem"
          style={{ objectFit: "cover" }}
        /> <div className={styles.overlay}>
        <h2>Bİlİm Bakı yenİ yarışlar elan edİr! Qoşulmağa tələsİn!</h2>
        <span>29 Avq 2021</span>
      </div>
      </div>
    </div>
  );
};

export default EducationGrid;

