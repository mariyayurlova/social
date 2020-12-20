import React from "react";
import styles from "./Profile.module.css";
import Posts from "./posts/Posts";
import ProfileInfo from "./profileInfo/ProfileInfo";
import {PostsPageType, ActionsType} from "../../redux/state";


type ProfilePostsType = {
    profilePage: PostsPageType
    dispatch: (action: ActionsType) => void
}


const Profile:React.FC<ProfilePostsType> = (props) =>{

    return (
        <div className={styles.wrapper}>
            <ProfileInfo/>
            <Posts posts={props.profilePage.posts} dispatch={props.dispatch}/>
        </div>
    )

}

export default Profile;