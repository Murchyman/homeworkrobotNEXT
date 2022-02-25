import Button from '@mui/material/Button';
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
          <span className={styles.heading}>
            <span className={styles.purple}>Automaticaly</span>  get <span className={styles.blue}>instant answers </span>
            to homework <span className={styles.pink}>questions</span> or <span className={styles.orange}>writing prompts</span></span>
          <span className={styles.paragraph}>Homework Robot is the Ai driven study tool that delivers you high quality answers, notes and reports. Best of all Homework Robot is 100% free to use!
          </span>
          <div className={styles.buttonContainer}>
            <Link href='/Generator' passHref><Button style={{ minWidth: '12em', minHeight: '4em' }} variant="contained">Get Started</Button></Link>
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
