'use client'
import React from 'react'
import styles from './newsCard.module.css'
import Image from 'next/image'

const NewsCard: React.FC = () => {
  return (
    <div className={styles.cardGrid}>
      {[1, 2, 3, 4, 5, 6, 7, 8].map((i) => (
        <div key={i} className={styles.card}>
          <Image
            src={`/images/newsImg/${i}.jpg`}
            alt={`News image ${i}`}
         
            width={1000}
            height={600}
          
            style={{ objectFit: "cover" }}
            className={styles.cardImage}
          />
          <div className={styles.cardContent}>
            <h2 className={styles.cardTitle}>Bİlİm Bakı yeni yarışlar elan edir!</h2>
            <span className={styles.cardDate}>29 Avq 2021</span>
          </div>
        </div>
      ))}
    </div>
  )
}

export default NewsCard
