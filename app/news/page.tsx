'use client'
import Breadcrumbs from '@/shared/components/breadcrumbs/Breadcrumb'
import styles from "./page.module.css"
import React from 'react'
import SearchBar from './search/SearchBar'
import Hero from './heroSection/Hero'
import NewsCard from './newsGrid/NewsCard'
import Pagination from './pagination-component/Pagination'

const page = () => {
  return (
    <div className={styles.container}>
        <Breadcrumbs/>
        <SearchBar/>
        <Hero/>
        <NewsCard/>
        <Pagination/>
    </div>
  )
}

export default page