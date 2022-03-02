import React from 'react';
import Button from '@mui/material/Button';
import styles from '../styles/fourOhFour.module.css';
import Link from 'next/link'



const fourOhFour = () => {



  return (
    <>
      <div className={styles.container}>
        <div className={styles.subcontainer}>
          <h1>You are currently offline</h1>
          <h1>Press below to retry connection</h1>
          {/* refresh page onclick */}
          <Button style={{ minWidth: '22em', minHeight: '4em' }} variant="contained"><Link href='/'>Reconnect</Link></Button>

          
        </div>
        <img src='/offline.png' alt='' />
      </div>
    </>
  )
};

export default fourOhFour;
