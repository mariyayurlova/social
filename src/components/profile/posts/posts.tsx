import React from "react";
import styles from "./posts.module.css";
import Post from "./post/post";

export type MessageType = {
    message:string
}

const Posts = () =>{

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
                <Post message="It's my first post"/>
                <Post message="HI, how are you?"/>
            </div>
        </div>
)

}

export default Posts;