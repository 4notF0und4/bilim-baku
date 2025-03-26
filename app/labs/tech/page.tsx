"use client";

import Image from "next/image";
import styles from "./page.module.css";
import Breadcrumbs from "@/shared/components/navigation/Breadcrumb";
import Frame from "@/shared/components/Frames/Frame";

const TechPage = () => {
  return (
    <div className={styles.container}>
      <Breadcrumbs/>
      <div className={styles.ageGroups}>
        <span className={styles.ageGroup1}>6-8 yaş</span>
        <span className={styles.ageGroup2}>9-11 yaş</span>
        <span className={styles.ageGroup3}>12-14 yaş</span>
      </div>

    <div className={styles.contentLayout}>
    <div className={styles.parent}>
        <div className={styles.div1}>
          <Image
            src="/images/lab1.png"
            alt="Tech Image"
            width={800}
            height={400}
            className={styles.image}
            priority={true}
          />
        </div>
         <div className={styles.div2}>
          <Image
            src="/images/labsExtra/tech1.png"
            alt="Tech Extra Image 1"
            width={400}
            height={400}
            className={styles.image}
          />
        </div>
        <div className={styles.div3}>
          <Image
            src="/images/labsExtra/tech1.png"
            alt="Tech Extra Image 2"
            width={400}
            height={200}
            className={styles.image}
          />
        </div>
        <div className={styles.div4}>
          <Image
            src="/images/labsExtra/tech2.png"
            alt="Tech Extra Image 3"
            width={400}
            height={200}
            className={styles.image}
          />
        </div>
      </div>

     <div className={styles.right}>      
      <div className={styles.details}>
        <h4 className={styles.labTitle}>Laboratorİyalar</h4>
        <h2 className={styles.labName}>Texnologiya laboratoriyası</h2>
        <p className={styles.description}>
          Morbi elementum condimentum risus mauris eu. Mauris, tincidunt aliquam adipiscing ut
          platea turpis aenean massa. Viverra lobortis malesuada pharetra, leo lacinia.
          Morbi elementum condimentum risus mauris eu. Mauris, tincidunt aliquam adipiscing ut
          platea turpis aenean massa.
        </p>
      </div>

  {/* Svg-ye foreign object elave etmishem */}
      <div className={styles.topics}>
        <h4 className={styles.topicsTitle}>Laboratoriya mövzuları</h4>
        <div className={styles.topicsGrid}>
          <div className={styles.topic}><Frame>Kodlama və alqoritm</Frame></div>
          <div className={styles.topic}><Frame>3D proqramlaşdırma</Frame></div>
          <div className={styles.topic}><Frame>3D modelləşdirmə</Frame></div>
          <div className={styles.topic}><Frame>Artırılmış reallıq</Frame></div>
          <div className={styles.topic}><Frame>Robotik layihələr</Frame></div>
          <div className={styles.topic}><Frame>Elektronik proqramlaşdırma</Frame></div>
        </div>
      </div>

 
      <div className={styles.registrationButtonContainer}>
        <button className={styles.registrationButton}>Qeydiyyat</button>
      </div></div>

    </div>
      
    </div>
  );
};

export default TechPage;

