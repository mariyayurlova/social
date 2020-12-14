import React from "react";
import styles from "./Post.module.css";
import ava from "./../../../../images/ava.png";

type PostType = {
    id: string,
    message: string,
    likesCount: number,
    key: number
}

const Post:React.FC<PostType> = (props) =>{

    return (
        <div key={props.key} id={props.id}>
            <div className={styles.wrapper__messages_item}>
                <div className={styles.wrapper__messages_item_images}>
                    <img src={ava}/>
                </div>
                <p>{props.message}</p>
                <span>Likes: {props.likesCount}</span>
            </div>
        </div>
    )

}

export default Post;