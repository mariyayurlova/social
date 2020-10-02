import React from "react";
import styles from "./Post.module.css";
import ava from "./../../../../images/ava.png";
import {MessageType} from "../Posts";

const Post = (props:MessageType) =>{

    return (
        <div>
            <div className={styles.wrapper__messages_item}>
                <div className={styles.wrapper__messages_item_images}>
                    <img src={ava}/>
                </div>
                <p>{props.message}</p>
            </div>
        </div>
    )

}

export default Post;