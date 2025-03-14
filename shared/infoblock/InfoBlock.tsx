'use client'
import React from 'react'
import Image from 'next/image'
import styles from './InfoBlock.module.css'


const InfoBlock: React.FC = () => {
  return (
    <div className={styles.infoBlock}>
      <Image src="/images/info-img.jpg" alt="About Bilim Baku" width={640} height={640} className={styles.image} style={{ width: "100%", height: "auto" }} quality={100} priority/>
      <div className={styles.textContent}>
        <h4>H A Q Q I M I Z D A</h4>
        <h2>Bilim Bakı Haqqında Məlumat</h2>
        <p>
          Varius nulla id enim, ante nisl, elementum lobortis tincidunt leo. Nisl, tincidunt feugiat dictum consequat faucibus volutpat tristique.
        </p>
        <div className={styles.specialContent}>
          <p>Morbi elementum condimentum risus mauris eu. Mauris, tincidunt aliquam adipiscing ut platea turpis aenean massa.</p>
          <p>Viverra lobortis malesuada pharetra, leo lacinia.</p>
          <p>Lectus auctor sed id magna aliquam quam. Ultrices faucibus facilisi velit purus neque.</p>
          <p>Risus id auctor mauris ut duis eu felis tortor.</p>
          <p>Odio ante blandit egestas sed arcu. Sit tellus ac amet sit vulputate. Euismod pellentesque morbi libero, montes, nulla.</p>
        </div>
        <button className={styles.button}>Ətraflı bax</button>
      </div>
    </div>
  );
};

export default InfoBlock