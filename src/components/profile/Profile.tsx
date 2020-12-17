import React from "react";
import styles from "./Profile.module.css";
import Posts from "./posts/Posts";
import ProfileInfo from "./profileInfo/ProfileInfo";
import {addPost, changeText, PostsPageType, PostsType} from "../../redux/state";


type ProfilePostsType = {
    profilePage: PostsPageType
    addPost: (postMessage:string) => void
    changeText: (newText:string) => void
}


const Profile:React.FC<ProfilePostsType> = (props) =>{

    return (
        <div className={styles.wrapper}>
            <ProfileInfo/>
            <Posts posts={props.profilePage.posts} addPost={addPost} changeText={changeText}/>
        </div>
    )

}

export default Profile;