import React from 'react'
import styles from './page.module.css'
import Breadcrumbs from '@/shared/components/navigation/breadcrumbs/Breadcrumb'
import Diaries from './diaries/Diaries'

const page = () => {
  return (
    <div className={styles.container}>
        <Breadcrumbs/>
        <Diaries/>
    </div>
  )
}

export default page