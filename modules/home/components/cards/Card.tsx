
import React from "react";
import Link from "next/link";
import { MdOutlineSubdirectoryArrowRight } from "react-icons/md";
import Palette from "./Palette"; 
import styles from "./card.module.css";

interface CardProps {
  bgColor: string;
  iconColor: string;
  title: string;
  description: string;
}

const Card: React.FC<CardProps> = ({ bgColor, iconColor, title,description  }) => {
  return (
    <div className={styles.card} style={{ backgroundColor: bgColor, height: "430px" }}>
     
      <div className={styles.svgWrapper}>
        <Palette color={iconColor}/>
      </div>
      
      <h2 className={styles.cardTitle}>{title}</h2>
     
      <p className={styles.cardDescription}>
      {description}
      </p>
    
      <div className={styles.cardFooter}>
        <Link className={styles.cardLink} style={{ color: iconColor }} href="#">
         Bax
        </Link>
        <div className={styles.iconWrapper} style={{ color: iconColor }}>
       <MdOutlineSubdirectoryArrowRight />
        </div>
      </div>
    </div>
  );
};

export default Card;
