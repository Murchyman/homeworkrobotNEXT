
import styles from '../styles/DeadReportForm.module.css';
import BasicCard from './BasicCard';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import { useState } from 'react';
import Paper from '@mui/material/Paper';









const DeadReportForm = () => {
    const answervalue = 'Services and facilities can affect how liveable a place is by providing residents with amenities that make their lives easier and more enjoyable. Services and facilities can include things like public transportation, libraries, parks, and recreation centres. These amenities can make a neighbourhood more attractive to residents and help to promote a sense of community. They can also make it easier for residents to get around and access the services and facilities they need.'
    const [Demoanswer, setDemoAnswer] = useState(answervalue);
    const ButtonClick = () => {
        setDemoAnswer(answervalue);
    }


    return (<div>

        <form>

            <div className={styles.formGroup}>
                <div className={styles.Left}>
                    <h2>Step 1, Homework 🤦‍♀️</h2>
                    <Paper className={styles.question} elevation={5}>Task 2a: Explain how services and facilities can affect how liveable a place is.
                        <br /> Please type your answer in the box provided (50-100 words):
                    </Paper>
                    <h2>Step 2, Homework Robot 🤖</h2>
                    {/* <div className={styles.heading}>Welcome to the Generator</div> */}
                    <div className={styles.InputContainer}>
                        <TextField
                            multiline
                            label={'Subject'} maxRows={4} fullWidth value={'how services and facilities can affect how liveable a place is'} />

                    </div>

                    <div className={styles.InputContainer}>
                        <RadioGroup
                            aria-labelledby="demo-radio-buttons-group-label"

                        >
                            <FormControlLabel value="a Report" control={<Radio checked />} label="Report" />
                            <FormControlLabel value="some notes about" control={<Radio disabled />} label="Notes" />



                        </RadioGroup>

                    </div>

                    {/* number input taking max word count and desired wordcount */}
                    <div className={styles.InputContainer}>

                        <TextField label="Goal Wordcount" value={'50-100'} variant="outlined" />

                    </div>


                    <div className={styles.InputContainer}>

                        <Button onClick={ButtonClick} variant="contained">Generate </Button>


                    </div>
                </div>
                <div className={styles.Right}>

                    <BasicCard response={Demoanswer} />

                </div>
                <h2>Step 3, Repeat 😎</h2>

            </div>

        </form>

    </div >)
};

export default DeadReportForm;
