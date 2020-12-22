import React from "react";
import styles from "./Profile.module.css";
import Posts from "./posts/Posts";
import ProfileInfo from "./profileInfo/ProfileInfo";
import {PostsPageType, ActionsType} from "../../redux/store";
import PostsContainer from "./posts/PostsContainer";


type ProfilePostsType = {
    store: any
}


const Profile:React.FC<ProfilePostsType> = (props) =>{

    return (
        <div className={styles.wrapper}>
            <ProfileInfo/>
            <PostsContainer store={props.store}/>
        </div>
    )

}

export default Profile;