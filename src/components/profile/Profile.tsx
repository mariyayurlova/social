import React from "react";
import styles from "./Profile.module.css";
import Posts from "./posts/Posts";
import ProfileInfo from "./profileInfo/ProfileInfo";
import {PostsPageType, ActionsType, StoreType} from "../../redux/store";
import PostsContainer from "./posts/PostsContainer";


type ProfilePostsType = {
    store: StoreType
    dispatch: (action: ActionsType) => void
    profilePage: PostsPageType
}


const Profile:React.FC<ProfilePostsType> = (props) =>{

    return (
        <div className={styles.wrapper}>
            <ProfileInfo/>
            <PostsContainer  profilePage={props.profilePage} store={props.store} dispatch={props.dispatch}/>
        </div>
    )

}

export default Profile;