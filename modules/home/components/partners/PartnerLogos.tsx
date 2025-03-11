import React from 'react'
import AsanLogo from '@/shared/components/icons/AsanLogo'
import TurkTekLogo from '@/shared/components/icons/TurkTekLogo'
import styles from  './partnerLogos.module.css'

const PartnerLogos = () => {
  return (
    <div className={styles.container} >
        <div><AsanLogo/></div>
        <div><TurkTekLogo/></div>
        <div><AsanLogo/></div>
        <div><TurkTekLogo/></div>
    </div>
  )
}

export default PartnerLogos