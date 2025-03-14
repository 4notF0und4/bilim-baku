import React from 'react';
import styles from './contactOption.module.css';
import { MdContentCopy } from "react-icons/md";
import { FaPhoneVolume } from "react-icons/fa6";
import { BsEnvelopeFill } from "react-icons/bs";
import { IoLocationSharp } from "react-icons/io5";
import Facebook from '@/shared/components/icons/Facebook';
import Twitter from '@/shared/components/icons/Twitter';
import Instagram from '@/shared/components/icons/Instagram';
import Image from 'next/image';

const ContactOption = () => {
  return (
    <div className={styles.twoColumnContainer}>
   
      <div className={styles.imageWrapper}>
        <Image
          src="/images/contacts.jpg"
          alt="Contact Image"
       
          width={600}
          height={600}
          style={{ objectFit: 'cover' }}
          priority
        />
      </div>

    
      <div className={styles.contacts}>
        <h4>BİZİMlə əlaqə</h4>
        <h2>Suallarınız varsa bizə ünvanlayın.</h2>
        <p className={styles.description}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem, reprehenderit.</p>
        <div className={styles.contatcsWrapper}>    
          <FaPhoneVolume size={24} color="#8B85FF" />
          <h3>+994 12 222 22 22 <MdContentCopy className={styles.copyIcon}/></h3>
        </div>
        <div className={styles.contatcsWrapper}>
          <BsEnvelopeFill size={24} color="#8B85FF"/>
          <h3>hello@bilimbaku.com <MdContentCopy className={styles.copyIcon}/></h3>
        </div>
        <div className={styles.contatcsWrapper}>
          <IoLocationSharp size={24} color="#8B85FF"/>
          <h3>Nizami küçəsi 12, Bakı <MdContentCopy className={styles.copyIcon}/></h3>
        </div>
        <div className={styles.socialNetworks}>
          <div className={styles.circle}><Facebook /></div>
          <div className={styles.circle}><Twitter /></div>
          <div className={styles.circle}><Instagram /></div>
        </div>
      </div>
    </div>
  );
}

export default ContactOption;
