import React from "react";
import styles from "./DialogsPost.module.css";
// @ts-ignore
import {DialogsPostsType} from "../DialogsPosts";



const DialogsPost = (props:DialogsPostsType) =>{

    return (
        <div className={styles.dialogs__posts_message}>
            <div className={styles.dialogs__posts_item}>
                <div className={styles.dialogs__posts_item_image}>
                    <img src={props.image}/>
                </div>
                <span className={styles.dialogs__posts_item_name}>{props.name}</span>
            </div>
            <div className={styles.dialogs__posts_text}>
                <p>{props.text}</p>
            </div>
        </div>
    )

}

export default DialogsPost;