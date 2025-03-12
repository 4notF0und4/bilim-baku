import React from 'react'
import styles from  './history.module.css'  

const History: React.FC = () => {
  return (
 <section className={styles.historyContainer}>
    <header className={styles.header}>
        <h4 className={styles.title}>Haqqımızda</h4>
        <h2 className={styles.subtitle}>Bilim Bakının tarixi</h2>
    </header>
    <article className={styles.article}>
        <h3 className={styles.description}>Varius nulla id enim, ante nisl, elementum lobortis tincidunt leo. Nisl, tincidunt feugiat dictum consequat faucibus volutpat tristique.</h3>
        <p className={styles.text}>Adipiscing mauris facilisis rutrum quis egestas nec eget a. Tellus non vitae urna eget. Pulvinar donec molestie a phasellus nibh eget etiam.
          Tincidunt amet mollis facilisis id fringilla suspendisse. At magna est facilisi ullamcorper lectus orci maecenas in ut. 
          Auctor scelerisque id dictum volutpat cum ac. Nunc, nulla pharetra, scelerisque urna odio nibh magna eros. Egestas quis metus nisl scelerisque viverra nulla sit mauris pulvinar.
          <br/>
          Ut accumsan donec duis vitae, nunc facilisis tortor vel dictum. Egestas at elit et, turpis lorem. Faucibus diam adipiscing consectetur augue. Porta in risus pharetra, sit sit. 
          Velit vitae integer varius feugiat donec elit id erat a. Hac vel eget consectetur risus, cras tristique nec dolor pellentesque. Sit vestibulum magna fringilla bibendum mauris, consequat a amet, vestibulum.
          Posuere proin faucibus ac odio mi neque diam, elit. Tortor ac, justo, viverra scelerisque sit vitae vitae vulputate. Varius aliquet vel ipsum enim, adipiscing. Sodales velit ac nunc, adipiscing consequat sit odio.
          Accumsan lorem morbi eget quis sem eu. <span className={styles.highlight}>Daha çox</span></p>
    </article>
 </section>
  )
}

export default History