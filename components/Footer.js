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
                    <div className={styles.linkItem}><Link href='/'>Neo.  &copy; </Link>{year}</div>
                    <div className={styles.linkItem}><Link href='/Terms'>Terms</Link></div>
                    <div className={styles.linkItem}><Link href='/Privacy'>Privacy</Link></div>
                </div>
                <div className={styles.FooterRight}>

                    {/* <div className={styles.linkItem}><Link href='/Wip' passHref><FontAwesomeIcon icon={["fab", "twitter"]} /></Link></div>
                    <div className={styles.linkItem}><Link href='/Wip' passHref><FontAwesomeIcon icon={["fab", "facebook"]} /></Link></div> */}
                    <div className={styles.linkItem}><Link href='https://github.com/Murchyman' passHref><FontAwesomeIcon icon={["fab", "github"]} /></Link></div>
                    <div className={styles.linkItem}><Link href='https://www.linkedin.com/in/mitchell-benjamin-b9b9b11a2/' passHref><FontAwesomeIcon icon={["fab", "linkedin"]} /></Link></div>
                    <div className={styles.linkItem}><Link href='mitchellrbenjamin@outlook.com' passHref><FontAwesomeIcon icon="envelope" /></Link></div>



                </div>
            </div>


        </div>
    )






};

export default Footer;
