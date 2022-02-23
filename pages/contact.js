import React from 'react'
import SubmissionSuccess from '../components/SubmissionSuccess'
import styles from '../styles/contact.module.css'
import ContactForm from '../components/ContactForm'
import { useState } from 'react'

const contact = () => {

    const [isSubmitted, setIsSubmitted] = useState(false)
    const [email, setEmail] = useState('')

    function getComponent(isSubmitted) {
        if (isSubmitted) {
            return <SubmissionSuccess email={email} />
        }
        else {
            return <ContactForm setEmail={setEmail} setIsSubmitted={setIsSubmitted} />
        }
    }


    return (
        <div className={styles.container}>
            <div className={styles.subContainer}>

                {getComponent(isSubmitted)}


            </div>



        </div >
    )
}

export default contact