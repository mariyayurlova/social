import React from "react";
import styles from "./Posts.module.css";
import Post from "./post/Post";
import {PostsPageType, PostsType} from "../../../redux/state";

type PostsTypeInner = {
    posts: Array<PostsType>
}

const Posts:React.FC<PostsTypeInner> = (props) =>{

    let PostsMap = props.posts.map((item, index) => {
        return <Post key={index} id={item.id} message={item.message} likesCount={item.likesCount}/>
    })

    return (
        <div>
            <div className={styles.wrapper__posts}>
                <span className={styles.wrapper__posts_title}>My posts</span>
                <div className={styles.wrapper__posts_inner}>
                    <textarea name="message" placeholder="your news"></textarea>
                    <button>Send</button>
                </div>
            </div>
            <div className={styles.wrapper__messages}>
                {PostsMap}
            </div>
        </div>
)

}

export default Posts;