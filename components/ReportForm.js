

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

    const [answer, setAnswer] = useState('');
    // Gain some more IQ to make this better, use the proper react form hook way
    const [radio, setRadio] = useState('');
    const SendQuery = async (FormData) => {
        setAnswer(<Spinner />);
        FormData = JSON.parse(FormData);
        console.log(FormData);
        let prompt = `Write ${radio} on ${FormData.Subject} with a max word count of ${FormData.MaxWordCount} and a goal word count of ${FormData.GoalWordCount}`;
        console.log(prompt);
        const params = {
            value: prompt
        };
        const options = {
            method: 'POST',
            body: JSON.stringify(params)
        };

        const response = await fetch('https://gwwzx7smad.execute-api.ap-southeast-2.amazonaws.com/default/test', options)
            .then(response => response.json())
        setAnswer(response)


        return response;
    }


    return (<div>

        <form onSubmit={handleSubmit(onSubmit)}>

            <div className={styles.formGroup}>
                <div className={styles.Left}>

                    <div className={styles.InputContainer}>
                        <TextField fullWidth label="Subject" {...register("Subject", { required: true })} />
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

                        <TextField {...register("GoalWordCount", { required: true })} label="Goal Wordcount" variant="outlined" />

                    </div>

                    <div className={styles.InputContainer}>

                        <TextField {...register("MaxWordCount", { required: true })} label="Max WordCount" variant="outlined" />

                    </div>

                    <div className={styles.InputContainer}>

                        <Button type='submit' variant="contained">Generate</Button>

                    </div>
                </div>
                <div className={styles.Right}>

                    <BasicCard response={answer} queryType={radio} />

                </div>

            </div>

        </form>

    </div>)
};

export default ReportForm;
