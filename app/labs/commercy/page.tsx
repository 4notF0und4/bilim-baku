import Breadcrumbs from '@/shared/components/navigation/breadcrumbs/Breadcrumb'
import styles from './page.module.css'
import React from 'react'

const page = () => {
  return (
    <div className={styles.container}>
        <Breadcrumbs/>
    </div>
  )
}

export default page