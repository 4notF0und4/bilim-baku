import React from "react";
import Card from "./Card";
import styles from "./cardsGrid.module.css";

const CardsGrid = () => {
  return (
    <div className={styles.grid}>
      <Card bgColor="#ECF8FE" iconColor="var(--blue)" title="Məktəblilərə hazırlanmış təlimlər"
        description="They include an hour of workshop training provided to private and public schools..." />
      <Card bgColor="#F1E6FE" iconColor="var(--purple)" title="STEM Laboratoriyaları"
        description="Our STEM labs provide hands-on experiments and innovative tools for students..."/>
      <Card bgColor="#FFF9E7" iconColor="var(--yellow)" title="Kodlaşdırma Kursları"
        description="We offer coding courses in Python, JavaScript, and more for young programmers..."
      />
      <Card bgColor="#E6E0FB"iconColor="var(--dark-blue)" title="Robototexnika Klubu"
        description="Join our robotics club to build, program, and compete in robotics competitions..."/>
    </div>
  );
};

export default CardsGrid;
