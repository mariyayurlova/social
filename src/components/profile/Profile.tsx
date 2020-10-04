import React from "react";
import styles from "./Profile.module.css";
import Posts from "./posts/Posts";
import ProfileInfo from "./profileInfo/ProfileInfo";

const Profile = () =>{

    return (
        <div className={styles.wrapper}>
            <ProfileInfo/>
            <Posts/>
        </div>
    )

}

export default Profile;