

import Spinner from '../components/Spinner';
import styles from '../styles/ReportForm.module.css';
import BasicCard from './BasicCard';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Checkbox from '@mui/material/Checkbox';
import { useState } from 'react';
import { useForm, Controller } from "react-hook-form";


const ReportForm = () => {

    const { register, handleSubmit, watch, formState: { errors } } = useForm();
    const { control, reset } = useForm({
        defaultValues: {
            checkbox: false,
        }
    });

    const onSubmit = (data) => {
        SendQuery(JSON.stringify(data));
    };

    const [answer, setAnswer] = useState('....');
    // Gain some more IQ to make this better, use the proper react form hook way
    const [radio, setRadio] = useState('');
    const [cardprompt, setcardPrompt] = useState('');
    const SendQuery = async (FormData) => {
        setAnswer(<Spinner />);
        FormData = JSON.parse(FormData);


        let prompt = `Write ${radio} on ${FormData.Subject} with a max word count of ${FormData.MaxWordCount} and a goal word count of ${FormData.GoalWordCount}`;
        setcardPrompt(prompt);
        const params = {
            value: prompt,
            secret: process.env.secret,
        };
        const options = {
            method: 'POST',
            body: JSON.stringify(params)
        };

        const response = await fetch('https://i8ljgz0bz3.execute-api.ap-southeast-2.amazonaws.com/default/HWR-OpenAiQuery-Prod', options)
            .then(response => response.json())
        setAnswer(response)


        return response;
    }


    return (<div>

        <form onSubmit={handleSubmit(onSubmit)}>

            <div className={styles.formGroup}>
                <div className={styles.Left}>
                    {/* <div className={styles.heading}>Welcome to the Generator</div> */}
                    <div className={styles.InputContainer}>
                        <TextField fullWidth label="Subject (max 100 characters)" {...register("Subject", { required: true, maxLength: 100 })} />
                    </div>

                    <div className={styles.InputContainer}>
                        <RadioGroup
                            aria-labelledby="demo-radio-buttons-group-label"

                            {...register("RadioChoice")}>
                            <FormControlLabel onChange={(e) => setRadio(e.target.value)} value="a Report" control={<Radio />} label="Report" />
                            <FormControlLabel onChange={(e) => setRadio(e.target.value)} value="some key points I should know when studying" control={<Radio />} label="Notes" />



                        </RadioGroup>

                    </div>

                    {/* number input taking max word count and desired wordcount */}
                    <div className={styles.InputContainer}>

                        <TextField {...register("GoalWordCount", { required: true, min: 0, max: 700 })} label="Goal Wordcount (max 700)" variant="outlined" />

                    </div>

                    <div className={styles.InputContainer}>

                        <TextField {...register("MaxWordCount", { required: true, min: 0, max: 700 })} label="Max WordCount (max 700)" variant="outlined" />

                    </div>

                    <div className={styles.InputContainer}>

                        <Button type='submit' variant="contained">Generate</Button>

                    </div>
                </div>
                <div className={styles.Right}>

                    <BasicCard response={answer} />

                </div>

            </div>

        </form>

    </div>)
};

export default ReportForm;
