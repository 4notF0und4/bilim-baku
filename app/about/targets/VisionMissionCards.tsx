import React from 'react'
import styles from './visionMissionCards.module.css'
import Vision from '@/shared/components/icons/Vision'
import Target from '@/shared/components/icons/Target'

const VisionMissionCards = () => {
  return (
   <section className={styles.cardsContainer}>
 
    <article className={`${styles.card}  ${styles.leftCard}`}>
        <header className={styles.cardHeader}>
        <Vision/>
            <h4>Vizyonumuz</h4>
        </header>
        <p>Adipiscing mauris facilisis rutrum quis egestas nec eget a. Tellus non
          vitae urna eget. Pulvinar donec molestie a phasellus nibh eget etiam.
          Tincidunt amet mollis facilisis id fringilla suspendisse. At magna est
          facilisi ullamcorper lectus orci maecenas in ut. Auctor scelerisque id
          dictum volutpat cum ac.</p>
    </article>
  
    <article className={`${styles.card} ${styles.rightCard}`}>
        <header className={styles.cardHeader}>
        <Target/>
            <h4>Missiyamız</h4>
        </header>
        <p>Adipiscing mauris facilisis rutrum quis egestas nec eget a. Tellus non
          vitae urna eget. Pulvinar donec molestie a phasellus nibh eget etiam.
          Tincidunt amet mollis facilisis id fringilla suspendisse. At magna est
          facilisi ullamcorper lectus orci maecenas in ut. Auctor scelerisque id
          dictum volutpat cum ac.</p>
    </article>
   </section>
  )
}

export default VisionMissionCards