import React from "react";
import styles from "./DialogsPosts.module.css";
import DialogsPost from "./dialogsPost/DialogsPost";
import ava from './../../../images/ava.png';
import avatar from './../../../images/avatar.png';

export type DialogsPostsType = {
    id: number
    image: string
    name: string
    text: string
}



const DialogsPosts = () =>{

    return (
        <div className={styles.dialogs__posts}>
            <div className={styles.dialogs__posts_messages}>
                <DialogsPost id={1} image={ava} name="Sasha" text="Contrary to popular belief, Lorem Ipsum is not simply random text."/>
                <DialogsPost id={2} image={avatar} name="Me" text="Contrary to popular "/>
                <DialogsPost id={3} image={ava} name="Sasha" text="Contrary to popular belief, Lorem Ipsum is not simply"/>
            </div>
            <div className={styles.dialogs__posts_type}>
                <textarea name="message" placeholder="your message"></textarea>
                <button>Send</button>
            </div>
        </div>
    )

}

export default DialogsPosts;