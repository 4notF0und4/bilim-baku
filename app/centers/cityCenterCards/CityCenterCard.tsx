import React from "react";
import styles from "./cityCenterCard.module.css";
import { MdContentCopy } from "react-icons/md";
import { FaPhoneVolume } from "react-icons/fa6";
import { BsEnvelopeFill } from "react-icons/bs";
import { IoLocationSharp } from "react-icons/io5";
import Image from "next/image";

const CityCenterCard = () => {
  const cityCenters = [
    {
      id: 1,
      subtitle: "laboratoriyalar",
      title: "Gəncə mərkəzi",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi elementum condimentum risus mauris eu.",
      phone: "+994 12 222 22 22",
      email: "hello@bilimbaku.com",
      location: "Nizami küçəsi 12, Bakı",
      imageUrl: "/images/Ganja.png",
      color: "var(--yellow)",
      background: "#fff3d3",
    },
    {
      id: 2,
      subtitle: "laboratoriyalar",
      title: "Bakı mərkəzi",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi elementum condimentum risus mauris eu.",
      phone: "+994 12 222 22 22",
      email: "info@bilimganja.com",
      location: "Nizami küçəsi 12, Bakı",
      imageUrl: "/images/Baku.png",
      color: "var(--purple)",
      background: "#F0E6FD",
    },
    {
      id: 3,
      subtitle: "laboratoriyalar",
      title: "Naxçıvan mərkəzi",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi elementum condimentum risus mauris eu.",
      phone: "+994 12 222 22 22",
      email: "contact@bilimnakhchivan.com",
      location: "Nizami küçəsi 12, Bakı",
      imageUrl: "/images/Nakhchivan.png",
      color: "var(--blue)",
      background: "#edfafc",
    },
  ];

  return (
    <div className={styles.container}>
      {cityCenters.map((city, index) => (
        <div
          key={city.id}
          className={`${styles.card} ${index % 2 !== 0 ? styles.reverse : ""}`}
          style={{ backgroundColor: city.background }}
        >
          <div className={styles.left}>
            <h4 className={styles.subtitle} style={{ color: city.color }}>
              {city.subtitle}
            </h4>
            <h2 className={styles.title}>{city.title}</h2>
            <p className={styles.description}>{city.description}</p>
            <div className={styles.infoContainer}>
              <div className={styles.infoRow}>
                <div className={styles.infoItem}>
                  <FaPhoneVolume
                    className={styles.icon}
                    style={{ color: city.color }}
                  />
                  <span className={styles.infoText}>{city.phone}</span>
                </div>
                <MdContentCopy
                  className={styles.copyIcon}
                  style={{ color: "#22292E", opacity: 0.3 }}
                />
              </div>

              <div className={styles.infoRow}>
                <div className={styles.infoItem}>
                  <BsEnvelopeFill
                    className={styles.icon}
                    style={{ color: city.color }}
                  />
                  <span className={styles.infoText}>{city.email}</span>
                </div>
                <MdContentCopy
                  className={styles.copyIcon}
                  style={{ color: "#22292E", opacity: 0.3 }}
                />
              </div>

              <div className={styles.infoRow}>
                <div className={styles.infoItem}>
                  <IoLocationSharp
                    className={styles.icon}
                    style={{ color: city.color }}
                  />
                  <span className={styles.infoText}>{city.location}</span>
                </div>
                <MdContentCopy
                  className={styles.copyIcon}
                  style={{ color: "#22292E", opacity: 0.3 }}
                />
              </div>
            </div>
          </div>

          <div className={styles.right}>
            <Image
              src={city.imageUrl}
              alt={city.title}
              width={570}
              height={370}
              className={styles.image}
              priority={index < 2}
            />
          </div>
        </div>
      ))}
    </div>
  );
};

export default CityCenterCard;
