import React from 'react'
import styles from './page.module.css'
import Breadcrumbs from '@/shared/components/navigation/breadcrumbs/Breadcrumb'
import Labs from './laboratories/LaboratoryCards'

const page = () => {
  return (
    <div className={styles.container}>
        <Breadcrumbs/>
        <Labs/>
    </div>
  )
}

export default page