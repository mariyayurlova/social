import React from "react";
import styles from "./ProfileInfo.module.css";
import background from "./../../../images/back.png";
import avatar from "./../../../images/avatar.png";

const ProfileInfo = () =>{

    return (
        <div>
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
        </div>
    )

}

export default ProfileInfo;