import React from "react";
import styles from "./Post.module.css";
import ava from "./../../../../images/ava.png";
import {Typography} from "@material-ui/core";
import SearchIcon from "@material-ui/icons/Search";
import {FavoriteBorderOutlined} from "@material-ui/icons";
import {createStyles, makeStyles, Theme} from "@material-ui/core/styles";

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
                <div className={styles.inner}>
                    <div className={styles.wrapper__messages_item_images}>
                        <img src={ava}/>
                    </div>
                    <Typography variant="subtitle1" component="h2">
                        {props.message}
                    </Typography>
                </div>
                <Typography variant="subtitle2" component="h2" className={styles.likes}>
                    <span>Likes: {props.likesCount}</span>
                    <FavoriteBorderOutlined fontSize="small"/>
                </Typography>
            </div>
        </div>
    )

}

export default Post;