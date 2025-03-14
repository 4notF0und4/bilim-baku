'use client'
import React from 'react'
import Facebook from '@/shared/components/icons/Facebook';
import Twitter from '@/shared/components/icons/Twitter';
import Instagram from '@/shared/components/icons/Instagram';
import styles from './share.module.css'

const Share = () => {
  return (
    <div className={styles.container}>

        <span>Paylaş:</span>
<div className={styles.socialNetworks}>
        <div className={styles.circle}><Facebook/></div>
        <div className={styles.circle}><Twitter/></div>
        <div className={styles.circle}><Instagram/></div>
      </div>

    </div>
 
  )
}

export default Share