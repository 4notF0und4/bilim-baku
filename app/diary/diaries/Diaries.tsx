"use client";
import React, { useState } from "react";
import { Pacifico } from "next/font/google";
import styles from "./Diaries.module.css";
import Image from "next/image";

const pacifico = Pacifico({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-pacifico",
  display: "swap",
});

const totalSheets = 6;
const sheetQuestions = [
  "Bilim mərkəzində nələr öyrənmək istəyirsən? (Yaz və ya şəklini çək)",
  "Mərkəzimizdə hansı bölmələr vardır?",
  "Ən çox diqqətini çəkən bölmə hansıdır?",
  "Mərkəzimizdəki gəzintidən nələr öyrəndin?",
  "Hazırladığın işlərdən hanısını daha çox bəyəndin?",
  "Gəzintidə öyrəndiyin məlumatlardan yaşamımıza nə kimi faydaları ola bilər?"
];

const Diaries: React.FC = () => {
  const [currentSheet, setCurrentSheet] = useState<number | null>(null);

  const handleNext = () => {
    setCurrentSheet((prev) => (prev === null ? 0 : prev + 1));
  };

  const handleReset = () => {
    setCurrentSheet(null);
  };

  return (
    <div className={`${styles.container} ${pacifico.variable}`}>
   
      {currentSheet !== null && (
        <div className={`${styles.progressCircle} ${currentSheet + 1}`}>
          {currentSheet + 1}/{totalSheets}
        </div>
      )}

    
      {currentSheet === null ? (
        <div className={styles.left}>
          <h2 className={styles.heading}>Bilim günlüyünə xoş gəlmisiniz!</h2>
          <div className={styles.inputGroup}>
            {["Adınız və soyadınız", "Məktəbiniz", "Sinfiniz"].map((placeholder) => (
              <div key={placeholder} className={styles.inputWrapper}>
                <input type="text" placeholder={placeholder} />
              </div>
            ))}
          </div>
          <div className={styles.buttonGroup}>
            <button className={styles.leftButton} onClick={handleNext}>
              Növbəti
            </button>
            <button className={styles.rightButton}>İndi yox</button>
          </div>
        </div>
      ) : (
        <div className={styles.fullSheet}>
          <h2 className={styles.sheetHeading}>{sheetQuestions[currentSheet]}</h2>
          <div className={styles.fullTextAreaWrapper}>
  <input
    className={styles.fullTextArea}
    placeholder="Buraya yazın..."
  />
</div>
         
         
          <div className={styles.buttonGroup}>
            {currentSheet < totalSheets - 1 ? (
              <button className={styles.leftButton} onClick={handleNext}>
                Növbəti
              </button>
            ) : (
              <button className={styles.leftButton} disabled>
                Bitdi
              </button>
            )}
            <button className={styles.rightButton} onClick={handleReset}>
              İndi yox
            </button>
          </div>
        </div>
      )}

     
      {currentSheet === null && (
        <div className={styles.right}>
          <Image
            src="/images/frame.png"
            alt="Frame"
            width={460}
            height={370}
            className={styles.image}
            priority
          />
        </div>
      )}
    </div>
  );
};

export default Diaries;




