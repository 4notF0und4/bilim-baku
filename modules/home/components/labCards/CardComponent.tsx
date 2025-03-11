import React from "react";
import Image from "next/image";
import Link from "next/link";
import { MdOutlineSubdirectoryArrowRight } from "react-icons/md";
import styles from "./cardComponent.module.css";
import HeartIcon from "@/shared/components/icons/heartIcon";

const cardData = [
  { image: "/images/lab1.jpg", title: "Təbiət elmləri laboratoriyası", description: "Ornare et, sem non leo. Eleifend orci odio egestas luctus aliquet eu feugiat. Quis pellentesque varius tellus sollicitudin. Nunc nunc, tempus felis vestibulum pellentesque leo pellentesque cursus.", link: "#" },
  { image: "/images/lab2.jpg", title: "İncəsənət laboratoriyası", description: "Ornare et, sem non leo. Eleifend orci odio egestas luctus aliquet eu feugiat. Quis pellentesque varius tellus sollicitudin. Nunc nunc, tempus felis vestibulum pellentesque leo pellentesque cursus.", link: "#" },
  { image: "/images/lab3.jpg", title: "Riyaziyyat laboratoriyası", description: "Ornare et, sem non leo. Eleifend orci odio egestas luctus aliquet eu feugiat. Quis pellentesque varius tellus sollicitudin. Nunc nunc, tempus felis vestibulum pellentesque leo pellentesque cursus.", link: "#" },
  { image: "/images/lab4.jpg", title: "Astronomiya və kosmos laboratoriyası", description: "Ornare et, sem non leo. Eleifend orci odio egestas luctus aliquet eu feugiat. Quis pellentesque varius tellus sollicitudin. Nunc nunc, tempus felis vestibulum pellentesque leo pellentesque cursus.", link: "#" },
  { image: "/images/lab5.jpg", title: "Texnologiya laboratoriyası", description: "Ornare et, sem non leo. Eleifend orci odio egestas luctus aliquet eu feugiat. Quis pellentesque varius tellus sollicitudin. Nunc nunc, tempus felis vestibulum pellentesque leo pellentesque cursus.", link: "#" },
  { image: "/images/lab6.jpg", title: "Sahibkarlıq laboratoriyası", description: "Ornare et, sem non leo. Eleifend orci odio egestas luctus aliquet eu feugiat. Quis pellentesque varius tellus sollicitudin. Nunc nunc, tempus felis vestibulum pellentesque leo pellentesque cursus.", link: "#" }
];

const CardComponents = () => {
  return (
    <div className={styles.grid}>
      {cardData.map((card, index) => (
        <div key={index} className={styles.card}>
          <div className={styles.imageContainer}>
            <Image src={card.image} alt={card.title} width={300} height={200} className={styles.image} />
            <div className={styles.iconWrapper}>
<HeartIcon/>
            </div>
          </div>
          <h2 className={styles.title}>{card.title}</h2>
          <p className={styles.description}>{card.description}</p>
          <div className={styles.footer}>
            <Link href={card.link} className={styles.link}>Daha çox</Link>
            <MdOutlineSubdirectoryArrowRight />
          </div>
        </div>
      ))}
    </div>
  );
};

export default CardComponents;
