import React from 'react';
import Image from 'next/image';
import styles from '../styles/fourOhFour.module.css';
const fourOhFour = () => {
  return (
    <>
      <div className={styles.container}>
        <div className={styles.subcontainer}>
          <h1>This page or link is unknown to us or currently under construction,</h1>
          <h1>please be patient as we work to improve the site.</h1>
          <Image src='/error.svg' width={1000} height={700} />
        </div>
      </div>
    </>
  )
};

export default fourOhFour;
