import React from 'react';
import styles from '../styles/Generator.module.css';
import Button from '../components/Button';
import Spinner from '../components/Spinner';
import Sidebar from '../components/Sidebar';

import { useState } from 'react';



const Generator = () => {




  const [question, setQuestion] = useState('');
  const [answer, setAnswer] = useState('Answer....');
  const [wordcount, setWordcount] = useState('');
  const sendToFunction = async () => {
    setAnswer(<Spinner />);
    const params = {
      value: question,
      wordcount: wordcount
    };
    const options = {
      method: 'POST',
      body: JSON.stringify(params)
    };

    const response = await fetch('https://gwwzx7smad.execute-api.ap-southeast-2.amazonaws.com/default/test', options)
      .then(response => response.json())
    setAnswer(response)
    //setQuestion(question + '\n\n' + response)

    return response;
  }





  return (<div className={styles.Container} >
    {/* <Sidebar /> */}

    <h1>Generator</h1>


    <textarea className={styles.inputField}
      value={question} onChange={e => setQuestion(e.target.value)}
      placeholder='Write a report on the history of Australia'
    />
    <div className={styles.InputContainer}>
      <input className={styles.wordCount} value={wordcount} onChange={e => setWordcount(e.target.value)} placeholder='Max WordCount' />
    </div>
    <Button onClick={sendToFunction} Text='Generate' />



    <div className={styles.Answer}>

      {answer}

    </div>

  </div>
  )

};

export default Generator;

