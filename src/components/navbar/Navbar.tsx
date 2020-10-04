import React from "react";
import styles from "./Navbar.module.css";
import {NavLink} from "react-router-dom";

const Navbar = () =>{

    return (
        <div className={styles.sidebar}>
            <NavLink className={styles.sidebar__link} activeClassName={styles.active} to="/profile">Profile</NavLink>
            <NavLink className={styles.sidebar__link} activeClassName={styles.active} to="/dialogs">Messages</NavLink>
            <a className={styles.sidebar__link} >News</a>
            <a className={styles.sidebar__link} >Music</a>

            <div className={styles.settings}>
                <a className={styles.sidebar__link} >Settings</a>
            </div>
        </div>
    )

}

export default Navbar;