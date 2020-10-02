import React from "react";
import styles from "./Profile.module.css";
import background from "../../images/back.png";
import avatar from "../../images/avatar.png";
import ava from "../../images/ava.png";
import Posts from "./posts/Posts";

const Profile = () =>{

    return (
        <div className={styles.wrapper}>
            <div className={styles.wrapper__inner}>
                <img src={background}/>
            </div>
            <div className={styles.wrapper__info}>
                <div className={styles.wrapper__avatar}>
                    <img src={avatar}/>
                </div>
                <div className={styles.wrapper__content}>
                    <span className={styles.wrapper__name}>Masha Yurlova</span>
                    <span className={styles.wrapper__text}>Date of Birth: 27.10.1994</span>
                    <span className={styles.wrapper__text}>City: Minsk</span>
                    <span className={styles.wrapper__text}>Education: BSUIR</span>
                    <span className={styles.wrapper__text}>Web site: https://github.com/mariyayurlova</span>
                </div>
            </div>
            <Posts/>
        </div>
    )

}

export default Profile;