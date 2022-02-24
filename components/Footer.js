import Link from 'next/link'
import styles from '../styles/Footer.module.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { library } from '@fortawesome/fontawesome-svg-core'
import { fab } from '@fortawesome/free-brands-svg-icons'
import { fas } from '@fortawesome/free-solid-svg-icons'
library.add(fab, fas)

const Footer = () => {
    const year = new Date().getFullYear();
    return (
        <div className={styles.container}>
            <div className={styles.Footer}>

                <div className={styles.FooterLeft}>
                    <div className={styles.linkItem}><>Neo.  &copy;</>{year}</div>
                    <div className={styles.linkItem}><Link href='/Contact'>Contact</Link></div>
                    <div className={styles.linkItem}><Link href='/privacy'>Privacy Policy</Link></div>
                    <div className={styles.linkItem}><Link href='/terms'>Terms of Use</Link></div>
                </div>
                <div className={styles.FooterRight}>


                    <div className={styles.linkItem}> <a href='https://github.com/Murchyman' target="_blank" rel="noopener noreferrer" ><FontAwesomeIcon icon={["fab", "github"]} /></a></div>
                    <div className={styles.linkItem}><a href='https://www.linkedin.com/in/mitchell-benjamin-b9b9b11a2/' target="_blank" rel="noopener noreferrer" ><FontAwesomeIcon icon={["fab", "linkedin"]} /></a></div>
                    <div className={styles.linkItem}> <Link href='/Contact' target="_blank" rel="noopener noreferrer" ><a><FontAwesomeIcon icon="envelope" /></a></Link></div>



                </div >
            </div >


        </div >
    )






};

export default Footer;
