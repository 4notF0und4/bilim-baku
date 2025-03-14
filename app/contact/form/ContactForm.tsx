'use client'
import React from "react";
import styles from "./ContactForm.module.css";

const ContactForm = () => {
  return (
    <div className={styles.container}>
    
      <div className={styles.leftSection}>
        <h4>Bİzə yaz</h4>
        <h2>Və ya bizə yazaraq birbaşa soruşun!</h2>
        <p>
          Varius nulla id enim, ante nisl, elementum lobortis tincidunt leo.
          Nisl, tincidunt feugiat dictum consequat faucibus volutpat tristique.
          Varius nulla id enim, ante nisl, elementum lobortis tincidunt leo.
          Nisl, tincidunt feugiat dictum consequat faucibus volutpat tristique.
          Varius nulla id enim, ante nisl, elementum lobortis tincidunt leo.
          Nisl, tincidunt feugiat dictum consequat faucibus volutpat tristique.
        </p>
      </div>

     
      <div className={styles.rightSection}>
        <h4>Ad və Soyad</h4>
        <div className={styles.inputGroup}>
          <input type="text" placeholder="Ad..." className={styles.input} />
          <input type="email" placeholder="E-poçt" className={styles.input} />
        </div>
        <textarea placeholder="Mesajınızı yazın..." className={styles.textarea}></textarea>
        <button className={styles.button}>Göndər</button>
      </div>
    </div>
  );
};

export default ContactForm;
