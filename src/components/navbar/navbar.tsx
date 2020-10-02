import React from "react";
import styles from "./navbar.module.css";

const Navbar = () =>{

    return (
        <div className={styles.sidebar}>
            <a className={styles.sidebar__link} href="">Profile</a>
            <a className={styles.sidebar__link} href="">Messages</a>
            <a className={styles.sidebar__link} href="">News</a>
            <a className={styles.sidebar__link} href="">Music</a>

            <div className={styles.settings}>
                <a className={styles.sidebar__link} href="">Settings</a>
            </div>
        </div>
    )

}

export default Navbar;