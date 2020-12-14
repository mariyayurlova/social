import React from "react";
import styles from "./ProfileInfo.module.css";
import background from "./../../../images/back.png";
import avatar from "./../../../images/avatar.png";
import {Typography} from "@material-ui/core";


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
                    <Typography variant="h4" component="h2">
                        Masha Yurlova
                    </Typography>
                    <Typography variant="subtitle1" component="h2">
                        Date of Birth: 27.10.1994
                    </Typography>
                    <Typography variant="subtitle1" component="h2">
                        City: Minsk
                    </Typography>
                    <Typography variant="subtitle1" component="h2">
                        Education: BSUIR
                    </Typography>
                    <Typography variant="subtitle1" component="h2">
                        Web site: https://github.com/mariyayurlova
                    </Typography>
                </div>
            </div>
        </div>
    )

}

export default ProfileInfo;