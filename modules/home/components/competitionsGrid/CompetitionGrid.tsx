'use client'
import React from 'react'
import styles from './competitionGrid.module.css'
import { RxDoubleArrowRight } from "react-icons/rx";
import Link from 'next/link';


const CompetitionGrid: React.FC = () => {
  return (
    <div className={styles.gridContainer}>
        <div className={`${styles.gridItem} ${styles.gridItemWithBG}`}>
        

          <div className={styles.circle}>
            <div className={styles.count}>
              <p>12</p>
              <p>Şəkil</p>
            </div>
          </div>
          <div className={styles.content}>
          <Link href='#'>Yarışlar <RxDoubleArrowRight className={styles.icon}/></Link> 
          </div>
        
        </div> 
        <div className={`${styles.gridItem} ${styles.gridItemWithBG}`}>
        

        <div className={styles.circle}>
          <div className={styles.count}>
            <p>12</p>
            <p>Şəkil</p>
          </div>
        </div>
        <div className={styles.content}>
        <Link href='#'>Laboratoriyalar <RxDoubleArrowRight className={styles.icon}/></Link> 
        </div>
      
      </div> <div className={`${styles.gridItem} ${styles.gridItemWithBG}`}>
        

        <div className={styles.circle}>
          <div className={styles.count}>
            <p>12</p>
            <p>Şəkil</p>
          </div>
        </div>
        <div className={styles.content}>
        <Link href='#'>Əyləncələr <RxDoubleArrowRight className={styles.icon}/></Link> 
        </div>
      
      </div> <div className={`${styles.gridItem} ${styles.gridItemWithBG}`}>
        

        <div className={styles.circle}>
          <div className={styles.count}>
            <p>12</p>
            <p>Şəkil</p>
          </div>
        </div>
        <div className={styles.content}>
        <Link href='#'>Tədbirlər <RxDoubleArrowRight className={styles.icon}/></Link> 
        </div>
      
      </div>
    </div>
  )
}

export default CompetitionGrid


