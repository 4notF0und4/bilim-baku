'use client'

import styles from './LaboratoryCards.module.css';
import Image from 'next/image';
import Link from 'next/link';

const LaboratoryCards = () => {
  const labs = [
    {
      id: 1,
      title: 'Təbiət elmləri laboratoriyası',
      slug: 'nature',
      subtitle: 'Laboratorİyalar',
      description: 'Morbi elementum condimentum risus mauris eu. Mauris, tincidunt aliquam adipiscing ut platea turpis aenean massa. Viverra lobortis malesuada pharetra, leo lacinia.',
      imageUrl: '/images/lab1.png',
      colors: {
        background: '#F0E6FD',
        subtitleText: 'var(--purple)',
        registrationButton: 'var(--purple)', 
      },
    },
    {
      id: 2,
      title: 'Astronomiya labaratoriyası',
      slug: 'astronomy',
      subtitle: 'Laboratorİyalar',
      description: 'Morbi elementum condimentum risus mauris eu. Mauris, tincidunt aliquam adipiscing ut platea turpis aenean massa. Viverra lobortis malesuada pharetra, leo lacinia.',
      imageUrl: '/images/lab2.png',
      colors: {
        background: '#fff3d3',
        subtitleText: 'var(--yellow)',
        registrationButton: 'var(--yellow)', 
      },
    },
    
    {
      id: 3,
      title: 'Texnologiya laboratoriyası',
      slug: 'tech',
      subtitle: 'Laboratorİyalar',
      description: 'Morbi elementum condimentum risus mauris eu. Mauris, tincidunt aliquam adipiscing ut platea turpis aenean massa. Viverra lobortis malesuada pharetra, leo lacinia.',
      imageUrl: '/images/lab3.png',
      colors: {
        background: '#d3cafd',
        subtitleText: 'var(--dark-blue)',
        registrationButton: 'var(--dark-blue)', 
      },
    },
    {
      id: 4,
      title: 'İncəsənət labaratoriyası',
      slug: 'art',
      subtitle: 'Laboratorİyalar',
      description: 'Morbi elementum condimentum risus mauris eu. Mauris, tincidunt aliquam adipiscing ut platea turpis aenean massa. Viverra lobortis malesuada pharetra, leo lacinia.',
      imageUrl: '/images/lab4.png',
      colors: {
        background: '#edfafc',
        subtitleText: 'var(--blue)',
        registrationButton: 'var(--blue)', 
      },
    },
    {
      id: 5,
      title: 'Riyaziyyat laboratoriyası ',
      slug: 'math',
      subtitle: 'Laboratorİyalar',
      description: 'Morbi elementum condimentum risus mauris eu. Mauris, tincidunt aliquam adipiscing ut platea turpis aenean massa. Viverra lobortis malesuada pharetra, leo lacinia.',
      imageUrl: '/images/lab5.png',
      colors: {
        background: '#e9cde5',
        subtitleText: '#f20000',
        registrationButton: '#f20000', 
      },
    },
    {
      id: 6,
      title: 'Sahibkarlıq labaratoriyası',
      slug: 'commercy',
      subtitle: 'Laboratorİyalar',
      description: 'Morbi elementum condimentum risus mauris eu. Mauris, tincidunt aliquam adipiscing ut platea turpis aenean massa. Viverra lobortis malesuada pharetra, leo lacinia.',
      imageUrl: '/images/lab6.png',
      colors: {
        background: '#e6f8e9',
        subtitleText: '#00b71d',
        registrationButton: '#00b71d', 
      },
    },
  ];

  return (
    <div className={styles.container}>
      {labs.map((lab, index) => (
        <div 
          key={lab.id}
          className={`${styles.labItem} ${index % 2 !== 0 ? styles.reverse : ''}`}
          style={{
            backgroundColor: lab.colors?.background, 
          }}
        >
          <div className={styles.imageContainer}>
           <Image
           src={lab.imageUrl} alt={lab.title} width={570} height={360} className={styles.labImage} priority={index<2}/>
          </div>
          <div className={styles.content}>
            <h4 className={styles.subtitle} style={{ color: lab.colors?.subtitleText }}>{lab.subtitle}</h4>
            <h2 className={styles.title}>{lab.title}</h2>
            <p className={styles.description}>{lab.description}</p>
            <div className={styles.buttonContainer}>
            <button
  className={styles.registrationButton}
  style={{
    '--registration-button-color': lab.colors?.registrationButton, 
  } as React.CSSProperties} 
>
  Qeydiyyat
</button>       
<Link href={`/labs/${lab.slug}`}>
<button className={styles.moreButton}>Ətraflı bax</button></Link>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default LaboratoryCards;