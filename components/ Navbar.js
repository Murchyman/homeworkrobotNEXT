import styles from '../styles/Navbar.module.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { library } from '@fortawesome/fontawesome-svg-core'
import { fas } from '@fortawesome/free-solid-svg-icons'
import Link from 'next/link'
library.add(fas)
const Navbar = () => {
    return <div>
        <div className={styles.NavBar}>
            <div className={styles.Logo}>
                <FontAwesomeIcon icon={["fas", "robot"]} />
            </div>
            <div className={styles.NavBarLinks}>

                <div className={styles.linkItem}><Link href='/'>Home</Link></div>
                <div className={styles.linkItem}><Link href='/About'>About</Link></div>
                <div className={styles.linkItem}>   <Link href='/Generator'>Generator</Link></div>

            </div>
        </div>

    </div >;
};

export default Navbar;
