import styles from '../styles/Layout.module.css';
import Navbar from './ Navbar';
import Footer from './Footer';
const Layout = ({ children }) => {
    return (
        <div className={styles.Container}>

            <div className={styles.Main}>
                <Navbar />
                {children}

            </div>
            <Footer />
        </div >)
}

export default Layout;
