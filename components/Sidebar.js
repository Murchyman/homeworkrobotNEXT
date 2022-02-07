import React from 'react';
import styles from '../styles/Sidebar.module.css';
const Sidebar = () => {
    return (
        <div className={styles.sidebar}>
            <div className={styles.sidebarHeader}>
                <h3>Sidebar</h3>
            </div>
            <div className={styles.sidebarBody}>
                <p>Sidebar body</p>
            </div>
        </div>
    )
};

export default Sidebar;
