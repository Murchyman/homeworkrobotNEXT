import Button from '@mui/material/Button';
import Image from 'next/image'
import example from '../assets/example.png'
import styles from '../styles/Home.module.css'
import Link from 'next/link';
import DeadReportForm from '../components/DeadReportForm';
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
            <Link href='/Generator'><Button className="navbar-brand" style={{ minWidth: '16em', minHeight: '4em' }} variant="contained">Get Started</Button></Link>
            <Link href='/About'><Button className="navbar-brand" style={{ minWidth: '16em', minHeight: '4em' }} variant="outlined">Learn More</Button></Link>

          </div>

        </div>

        <div className={styles.right}>
          <div className={styles.image}>
            <DeadReportForm />
          </div>

        </div>
      </div>




    </div>
  )
}
