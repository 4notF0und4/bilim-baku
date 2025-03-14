'use client'
import { useRouter } from 'next/navigation';
import React from 'react'
import styles from './hero.module.css'
import { FaArrowLeft, FaArrowRight } from "react-icons/fa6";



const Hero: React.FC = () => {
  const router = useRouter();
const handleNewsClick = () => {
  router.push('/news/1');
}
  return (
    <section className={styles.hero}>
        <div className={styles.content}>
            {/* sol teref */}
        <div className={styles.textContent}>
            <span className={styles.date}>29 Avq 2021</span>
            <h2 className={styles.title}>BİLİM BAKI YENİ YARIŞLAR ELAN EDİR!</h2>
            <p className={styles.description}>Morbi elementum condimentum risus mauris eu. Mauris, tincidunt
            aliquam adipiscing ut platea turpis aenean massa. Viverra lobortis
            malesuada pharetra, leo.</p>
            <button className={styles.newsButton} onClick={handleNewsClick}>Xəbərə bax</button>
        </div>

          {/* sag teref */}
          <div className={styles.navigation}>
            <button className={styles.navButton} ><FaArrowLeft />
            </button>
            <button className={styles.navButton}><FaArrowRight />
            </button>
          </div>

        </div>
    </section>
  )
}

export default Hero