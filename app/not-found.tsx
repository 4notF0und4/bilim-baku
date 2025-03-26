import React from 'react'
import styles from './not-found.module.css'

export default function NotFound() {
    return (
        <div className={styles.container}>
            <h1 className={styles.errorCode}>404</h1>
            <h2 className={styles.errorMessage}>Sorğunuza uyğun səhifə tapılmadı</h2>
        </div>
    )
}