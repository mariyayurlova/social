import React from "react";
import styles from "./Profile.module.css";
import Posts from "./posts/Posts";
import ProfileInfo from "./profileInfo/ProfileInfo";
import {PostsPageType} from "../../redux/state";


type ProfileType = {
    profilePage: PostsPageType
}


const Profile:React.FC<ProfileType> = (props) =>{

    return (
        <div className={styles.wrapper}>
            <ProfileInfo/>
            <Posts posts={props.profilePage.posts}/>
        </div>
    )

}

export default Profile;