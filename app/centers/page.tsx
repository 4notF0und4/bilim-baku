import React from 'react'
import styles from './page.module.css'
import Breadcrumbs from '@/shared/components/breadcrumbs/Breadcrumb'
import CityCenterCard from './cityCenterCards/CityCenterCard'

const page = () => {
  return (
    <div className={styles.container}>
         <Breadcrumbs/>
         <CityCenterCard/>
    </div>
  )
}

export default page