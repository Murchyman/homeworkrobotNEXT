import styles from '../styles/Footer.module.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { library } from '@fortawesome/fontawesome-svg-core'
import { fab } from '@fortawesome/free-brands-svg-icons'
import { fas } from '@fortawesome/free-solid-svg-icons'
library.add(fab, fas)

const Footer = () => {
    return (
        <div className={styles.container}>
            <div className={styles.Footer}>

                <div className={styles.FooterLeft}>
                    <p>Neo.  &copy;{new Date().getFullYear()}</p>
                    <p>Terms</p>
                    <p>Privacy</p>
                </div>
                <div className={styles.FooterRight}>

                    <FontAwesomeIcon icon={["fab", "twitter"]} />
                    <FontAwesomeIcon icon={["fab", "facebook"]} />
                    <FontAwesomeIcon icon={["fab", "github"]} />
                    <FontAwesomeIcon icon={["fab", "linkedin"]} />

                    <FontAwesomeIcon icon="envelope" />


                </div>
            </div>


        </div>
    )






};

export default Footer;
