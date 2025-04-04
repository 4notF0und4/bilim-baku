
'use client'
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
import { toast } from 'react-toastify';
const handlePhoneClick = () => {
  const phoneNumber = "+994122222222"; 
  window.location.href = `https://wa.me/${phoneNumber}`;
};


const handleMailTo = () => {
  const email = "hello@bilimbaku.com";

  window.open(`https://mail.google.com/mail/?view=cm&fs=1&to=${email}`, "_blank");
};
const contactInfo = [
  
  {
    icon: <FaPhoneVolume size={24} color="#8B85FF" onClick={handlePhoneClick}/>,
    text: "+994 12 222 22 22"
  },
  {
    icon: <BsEnvelopeFill size={24} color="#8B85FF" onClick={handleMailTo}/>,
    text: "hello@bilimbaku.com"
  },
  {
    icon: <IoLocationSharp size={24} color="#8B85FF" />,
    text: "Nizami küçəsi 12, Bakı"
  }
];

const ContactOption = () => {
  const handleCopy = (text: string) => {
    navigator.clipboard.writeText(text);
    toast.success("Mətn uğurla kopyalandı!");
  }
 
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
        <p className={styles.description}>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem, reprehenderit.
        </p>

        {contactInfo.map((contact, index) => (
          <div key={index} className={styles.contatcsWrapper}>
            {contact.icon}
            <h3>{contact.text} <MdContentCopy className={styles.copyIcon} style={{ cursor: 'pointer' }} onClick={() => handleCopy(contact.text)} /></h3>
          </div>
        ))}

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

