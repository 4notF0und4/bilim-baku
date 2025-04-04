'use client'
import React from 'react';
import styles from './footer.module.css';
import { MdContentCopy } from "react-icons/md";
import { FaPhoneVolume } from "react-icons/fa6";
import { BsEnvelopeFill } from "react-icons/bs";
import { IoLocationSharp } from "react-icons/io5";
import Facebook from '../icons/Facebook';
import Twitter from '../icons/Twitter';
import Instagram from '../icons/Instagram';
import { toast } from "react-toastify";







const Footer = () => {
  const handleCopy = (text: string) => {
    navigator.clipboard.writeText(text);
  toast.success("Mətn uğurla kopyalandı!");
  }
  const handlePhoneClick = () => {
    const phoneNumber = "+994122222222"; 
    window.location.href = `https://wa.me/${phoneNumber}`;
  };


  const handleMailTo = () => {
    const email = "hello@bilimbaku.com";
  
    window.open(`https://mail.google.com/mail/?view=cm&fs=1&to=${email}`, "_blank");
  };
  



  return (
    <footer className={styles.footer}>
    
      <div className={styles.subscribeSection}>
        <div className={styles.subscribeText}><h2>Abunə ol və heçbir yeniliyi qaçırma!</h2></div>
        
        <form className={styles.subscribeForm}>
          <input type="email" placeholder="E-poçt" aria-label="E-poçt" required />
          <button type="submit">Göndər</button>
        </form>
      </div>
    <div className={styles.twoColumnContainer}>
      <div className={styles.contacts }>
        <h4>Əlaqə</h4>
        <h2>Bizimlə əlaqə</h2>
        <div className={styles.contatcsWrapper}>
      
        <FaPhoneVolume size={24} color="#8B85FF" onClick={handlePhoneClick} style={{ cursor: 'pointer' }}/>
          <h3>+994 12 222 22 22 <MdContentCopy className={styles.copyIcon} onClick={() => handleCopy('+994 12 222 22 22')} style={{ cursor: 'pointer' }}/></h3>
          </div>
        <div className={styles.contatcsWrapper}>
          
     
       
          <BsEnvelopeFill size={24} color="#8B85FF"  style={{ cursor: 'pointer' }} onClick={handleMailTo}/>
  
        <h3>hello@bilimbaku.com <MdContentCopy className={styles.copyIcon} onClick={() => handleCopy('hello@bilimbaku.com')} style={{ cursor: 'pointer' }}/></h3></div>
        <div className={styles.contatcsWrapper}>
        <IoLocationSharp size={24} color="#8B85FF" style={{ cursor: 'pointer' }}/>
        <h3>Nizami küçəsi 12, Bakı <MdContentCopy className={styles.copyIcon} onClick={() => handleCopy('Nizami küçəsi 12, Bakı')} style={{ cursor: 'pointer' }}/></h3></div>
        <div className={styles.socialNetworks}>
        <div className={styles.circle}><Facebook/></div>
        <div className={styles.circle}><Twitter/></div>
        <div className={styles.circle}><Instagram/></div>
      </div>
    
      </div>
     
      <div className={styles.messageForm}>
  <h4>Ad və Soyad</h4>
  <input type="text" aria-label="Ad və Soyad" />
  <input type="email" aria-label="E-poçt"  placeholder='E-poçt'/>
  <textarea aria-label="Mesajınız" placeholder='Mesajınız'></textarea>
  <button type="submit">Göndər</button>
</div>
    </div>
    <div className={styles.footerBottom}>
        <p>Copyright © 2021 <a href='#' className={styles.crocusoft}> Bilim Baku</a>. Bütün hüquqlar qorunur.</p>
        <p>
          <a href="https://crocusoft.com/" target="_blank" className={styles.crocusoft}>
            Crocusoft MMC
          </a>   <span>Tərəfindən hazırlanmışdır: </span>
        </p>
      </div>
    </footer>
  );
};

export default Footer;

