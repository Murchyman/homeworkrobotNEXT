import Head from 'next/head';

import styles from '../styles/Layout.module.css';
import Navbar from './ Navbar';
import Footer from './Footer';
const Layout = ({ children }) => {
    return (
        <div className={styles.Container}>
            <Head>
                <title>HomeWork Robot</title>
                <meta name="description" content="With HomeWork Robot, get instant answers to questions or writing prompts" />
                <script async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-6052671390695750"
                    crossorigin="anonymous"></script>
            </Head>
            <div className={styles.Main}>
                <Navbar />
                {children}

            </div>
            <Footer />
        </div >)
}

export default Layout;
