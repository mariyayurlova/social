import React from "react";
import styles from "./DialogsPost.module.css";
// @ts-ignore
import {DialogsPostsType} from "../DialogsPosts";
import {Typography} from "@material-ui/core";



const DialogsPost = (props:DialogsPostsType) =>{

    return (
        <div className={styles.dialogs__posts_message}>
            <div className={styles.dialogs__posts_item}>
                <div className={styles.dialogs__posts_item_image}>
                    <img src={props.image}/>
                </div>
                <Typography variant="subtitle1" component="h2">
                    {props.name}
                </Typography>
            </div>
            <div className={styles.dialogs__posts_text}>
                <Typography variant="subtitle1" component="h2">
                    {props.text}
                </Typography>
            </div>
        </div>
    )

}

export default DialogsPost;