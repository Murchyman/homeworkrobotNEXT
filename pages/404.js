import React from 'react';

import styles from '../styles/fourOhFour.module.css';
const fourOhFour = () => {
  return (
    <>
      <div className={styles.container}>
        <div className={styles.subcontainer}>
          <h1>This page is unknown to us or currently under construction,</h1>
          <h1>please be patient as we work to improve the site.</h1>
          <img src='/error.svg' alt='' />
        </div>
      </div>
    </>
  )
};

export default fourOhFour;
