import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
export default function Home() {
  const handleOnClick = () => {
    console.log('clicked')
  }
  return (
    <div className={styles.container}>


      <>
        <div className={styles.container}>

          <h1 className={styles.BigTitle}>Your AI Homework Assistant</h1>

          <p className={styles.TagLine}>With HomeWork Robot, get instant answers to questions or writing prompts</p>



          {/* demo gif */}
          <div className={styles.Gif}><Image src={require('../public/demo.gif')} alt="gif" />
          </div>

        </div>

      </>
    </div>
  )
}
