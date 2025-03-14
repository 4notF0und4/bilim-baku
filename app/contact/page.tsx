import React from 'react'
import styles from './page.module.css'
import Breadcrumbs from '@/shared/components/breadcrumbs/Breadcrumb'
import ContactOption from './contactOptions/ContactOption'

const page = () => {
  return (
   <div className={styles.container}>
    <Breadcrumbs/>
    <ContactOption/>
   </div>
  )
}

export default page