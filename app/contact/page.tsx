import React from 'react'
import styles from './page.module.css'
import Breadcrumbs from '@/shared/components/navigation/breadcrumbs/Breadcrumb'
import ContactOption from './contactOptions/ContactOption'
import ContactForm from './form/ContactForm'

const page = () => {
  return (
   <div className={styles.container}>
    <Breadcrumbs/>
    <ContactOption/>
    <ContactForm/>
   </div>
  )
}

export default page