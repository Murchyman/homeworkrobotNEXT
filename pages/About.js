import React from 'react'
import styles from '../styles/About.module.css'
import Image from 'next/image'
const About = () => {
    return (
        <>
            <div className={styles.container}>

                <div className={styles.HeaderBox}>
                    <div className={styles.heading}>
                        <span> <span className={styles.orange}>Homework Robot</span> was created from a dream to make <span className={styles.blue}>Ai assisted studying</span> accessible to <span className={styles.pink}>as many students as possible</span></span>
                    </div>
                    <div className={styles.subHeading}>
                        <span>Made with 💖 in <span className={styles.orange}>Queensland</span>.</span>
                    </div>
                    <div className={styles.subHeading}>
                        <span>Homework Robot is an artificial intelligence based completion algorithm leveraging the powerful <span className={styles.blue}>GPT-3</span> machine learning technology.</span>
                    </div>

                </div>

                <div className={styles.imageArea}>
                    <Image src='/icons/email.svg' width={1000} height={700} />

                </div>

                <div className={styles.HeaderBox}>
                    <div className={styles.heading}>
                        <span> <span className={styles.orange}>Homework Robot</span> was created from a dream to make <span className={styles.blue}>Ai assisted studying</span> accessible to <span className={styles.pink}>as many students as possible</span></span>
                    </div>
                    <div className={styles.subHeading}>
                        <span>Made with 💖 in <span className={styles.orange}>Queensland</span>.</span>
                    </div>
                    <div className={styles.subHeading}>
                        <span>Homework Robot is an artificial intelligence based completion algorithm leveraging the powerful <span className={styles.blue}>GPT-3</span> machine learning technology.</span>
                    </div>

                </div>

            </div>

            {/* 

                
                Neo  is a growing team based in Queensland Australia. We hire professionals from all across the globe to create our unique products and services.

                Our team is dedicated to providing the best AI assisted education tools and resources to our users.

                If you have any questions or feedback, please don't hesitate to get in touch!

                We are always looking to add new features and improve the product.

                If you are interested in working with us, please get in touch! */}





        </>
    )
}

export default About