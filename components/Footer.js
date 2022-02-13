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
                    <div className={styles.linkItem}><Link href='/contact'>Contact</Link></div>
                    <div className={styles.linkItem}><Link href='/privacy'>Privacy Policy</Link></div>
                    <div className={styles.linkItem}><Link href='/terms'>Terms of Use</Link></div>
                </div>
                <div className={styles.FooterRight}>

                    {/* <div className={styles.linkItem}><Link href='/Wip' passHref><FontAwesomeIcon icon={["fab", "twitter"]} /></Link></div>
                    <div className={styles.linkItem}><Link href='/Wip' passHref><FontAwesomeIcon icon={["fab", "facebook"]} /></Link></div> */}



                    {/* basicaly, the child of the Link is FontAwesomeIcon which is a functional component which is giving me the functional components cannot
                    be given refs error, essentialy I need to figure out how to apply the following
                    https://nextjs.org/docs/api-reference/next/link#if-the-child-is-a-functional-component
                    to the fontawesome functional component.....

                    fix this by replacing the icon component with an SVG of the icon if this error occurs again
                    */}
                    <div className={styles.linkItem}><Link href='https://github.com/Murchyman' passHref><FontAwesomeIcon icon={["fab", "github"]} /></Link></div>
                    <div className={styles.linkItem}><Link href='https://www.linkedin.com/in/mitchell-benjamin-b9b9b11a2/' passHref><FontAwesomeIcon icon={["fab", "linkedin"]} /></Link></div>
                    <div className={styles.linkItem}><Link href='mailto:support@homeworkrobot.net' passHref><FontAwesomeIcon icon="envelope" /></Link></div>



                </div>
            </div>


        </div>
    )






};

export default Footer;
