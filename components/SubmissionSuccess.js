import React from 'react'
import styles from '../styles/SubmissionSuccess.module.css'
const SubmissionSuccess = (props) => {
    return (
        <div className={styles.container}>
            <div className={styles.subContainer}>

                <div className={styles.heading}>
                    <h1>Thank you!</h1>
                </div>
                <div className={styles.subHeading}>
                    <h2>We’ll get back to you as soon as possible
                        at {props.email}</h2>
                </div>
            </div>
        </div>
    )
}

export default SubmissionSuccess