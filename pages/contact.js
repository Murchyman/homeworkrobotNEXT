import React from 'react'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { library } from '@fortawesome/fontawesome-svg-core'
import { fab } from '@fortawesome/free-brands-svg-icons'
import { fas } from '@fortawesome/free-solid-svg-icons'
library.add(fab, fas)
import Link from 'next/link'
import styles from '../styles/contact.module.css'
const contact = () => {
    return (
        <div className={styles.container}>
            <div className={styles.subContainer}>
                <div className={styles.heading}>Need Some Help?</div>
                <div className={styles.subHeading}><span>We&apos;d love to help you out, please contact us below</span></div>
                <div className={styles.links}><Link passHref href={'mailto:support@homeworkrobot.net'}><span><FontAwesomeIcon icon="envelope" />  support@homeworkrobot.net</span></Link> </div>

            </div>

            <img src='/support.png' alt='' />
        </div >
    )
}

export default contact