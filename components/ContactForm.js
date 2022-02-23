import React from 'react'
import styles from '../styles/ContactForm.module.css'
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import { useForm } from "react-hook-form";
import { useState } from 'react';
import ReCAPTCHA from 'react-google-recaptcha'
import Link from 'next/link'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { library } from '@fortawesome/fontawesome-svg-core'
import { fab } from '@fortawesome/free-brands-svg-icons'
import { fas } from '@fortawesome/free-solid-svg-icons'
library.add(fab, fas)

const ContactForm = (props) => {
    const { register, handleSubmit, watch, formState: { errors } } = useForm();
    const [answer, setAnswer] = useState('')

    const onSubmit = (data) => {
        SendQuery(JSON.stringify(data));
    };

    const SendQuery = async (FormData) => {
        FormData = JSON.parse(FormData);
        const params = {
            Text: FormData.Message,
            Email: FormData.Email,
            Name: FormData.Name,
        }
        // const params = {
        //     value: prompt,
        //     secret: process.env.secret,
        // };
        // const options = {
        //     method: 'POST',
        //     body: JSON.stringify(params)
        // };
        const options = {
            method: 'POST',
            body: JSON.stringify(params)
        };

        const response = await fetch('https://hjvt786p0a.execute-api.ap-southeast-2.amazonaws.com/default/neoAffiliatesBeta', options)
            .then(response => response.json()).catch(err => console.log(err));

        { props.setIsSubmitted(true) }
        { props.setEmail(FormData.Email) }

        setAnswer('successfully sent');

        return response;
    }



    return (
        <>

            <div className={styles.Container}>
                <div className={styles.heading}>Need Some Help?</div>
                <div className={styles.subHeading}><span>We&apos;d love to help you out, please contact us below</span></div>
                <div className={styles.FormBox}>
                    <TextField id="outlined-basic" error={errors.Name} fullWidth label="Name" variant="outlined" {...register("Name", { required: true, maxLength: 30 })} />

                </div>

                <div className={styles.FormBox}>
                    <TextField id="outlined-basic" error={errors.Email} helperText="Must be vailid email." fullWidth label="Email" variant="outlined" {...register("Email", { required: true, maxLength: 30, pattern: /^\S+@\S+$/i })} />
                </div>

                <div className={styles.FormBox}>
                    <TextField id="outlined-basic" error={errors.Message} fullWidth multiline minRows={4} label="Message" variant="outlined" {...register("Message", { required: true, maxLength: 500 })} />
                </div>
                <div className={styles.FormBox}>
                    <ReCAPTCHA size="normal" sitekey="6LdNzJceAAAAAEruX-w1fyEVaMUZzbbmwgPig14I" />
                </div>
                <div className={styles.FormBox}>
                    <Button variant="contained" style={{ minWidth: '100%', minHeight: '3em' }} onClick={handleSubmit(onSubmit)}>SubmiT</Button>
                </div>
                <div className={styles.links}><Link passHref href={'mailto:support@homeworkrobot.net'}><span><FontAwesomeIcon icon="envelope" />  support@homeworkrobot.net</span></Link> </div>
                <img src='/support.png' alt='' />


            </div>

        </>
    )
}
export default ContactForm