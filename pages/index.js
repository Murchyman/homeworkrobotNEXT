import Button from '@mui/material/Button';
import Image from 'next/image'
import example from '../assets/example.png'
import styles from '../styles/Home.module.css'
export default function Home() {
  const handleOnClick = () => {
    console.log('clicked')
  }
  return (
    <div className={styles.container}>





      <div className={styles.subContainer}>
        <div className={styles.left}>
          <span className={styles.heading}>Your <span className={styles.pink}>Ai</span> Homework Assistant. With
            <span className={styles.orange}> HomeWork Robot,</span> get <span className={styles.blue}>instant answers </span>
            to questions or writing prompts</span>
          <span className={styles.paragraph}>Homework Robot is an Ai driven study assistant that lets you focus on the important stuff while our artificial intelligence delivers you high quality notes and reports. Best of all Homework Robot is 100% free to use!
          </span>
          <div className={styles.buttonContainer}>
            <Button style={{ minWidth: '18em', minHeight: '4em' }} variant="contained">Get Started</Button>
            <Button style={{ minWidth: '18em', minHeight: '4em' }} variant="contained">Learn More</Button>
          </div>

        </div>

        <div className={styles.right}>
          <div className={styles.image}>
            <Image
              src={example}
              alt="Picture of the software"
            />
          </div>

        </div>
      </div>




    </div>
  )
}
