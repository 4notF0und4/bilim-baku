'use client' 

import React from "react";
import styles from "./headerNews.module.css";

const HeaderNews = () => {
  return (
    <div className={styles.headerNews}>
      <h3 className={styles.subtitle}>X Ə B Ə R L Ə R</h3>
      <h1 className={styles.title}>
        Bilim Bakı Laboratoriyalarına qeydiyyat başladı!
      </h1>
      <button className={styles.button}>Qeydiyyatdan keç</button>
    </div>
  );
};

export default HeaderNews;
