
import styles from '../styles/DeadReportForm.module.css';
import BasicCard from './BasicCard';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { library } from '@fortawesome/fontawesome-svg-core'
import { fas } from '@fortawesome/free-solid-svg-icons'
import { useState } from 'react';
library.add(fas)







const DeadReportForm = () => {
    const [Demoanswer, setDemoAnswer] = useState('');

    const ButtonClick = () => {
        setDemoAnswer('Kangaroos are marsupials that live in Australia and some surrounding islands. They are the largest marsupials and the largest native mammals in Australia. They have powerful hind legs that they use to hop around, and they are known for their large, powerful tails. Kangaroos eat mostly grass, but they will also eat leaves, flowers, and fruits. The females have pouches on their bellies where they carry their young. The young kangaroos, called joeys, stay in their mothers pouches until they are old enough to start hopping around on their own. Kangaroos can live for up to 20 years.');
    }


    return (<div>

        <form>

            <div className={styles.formGroup}>
                <div className={styles.Left}>
                    {/* <div className={styles.heading}>Welcome to the Generator</div> */}
                    <div className={styles.InputContainer}>
                        <TextField label={'Subject'} fullWidth value={'The Kangaroo'} />

                    </div>

                    <div className={styles.InputContainer}>
                        <RadioGroup
                            aria-labelledby="demo-radio-buttons-group-label"

                        >
                            <FormControlLabel value="a Report" control={<Radio checked />} label="Report" />
                            <FormControlLabel value="some key points I should know when studying" control={<Radio disabled />} label="Notes" />



                        </RadioGroup>

                    </div>

                    {/* number input taking max word count and desired wordcount */}
                    <div className={styles.InputContainer}>

                        <TextField label="Goal Wordcount" value={'100'} variant="outlined" />

                    </div>

                    <div className={styles.InputContainer}>

                        <TextField label="Max WordCount" value={'150'} variant="outlined" />

                    </div>

                    <div className={styles.InputContainer}>

                        <Button onClick={ButtonClick} variant="contained">Generate </Button> <span> ⬅</span>


                    </div>
                </div>
                <div className={styles.Right}>

                    <BasicCard response={Demoanswer} />

                </div>

            </div>

        </form>

    </div >)
};

export default DeadReportForm;
