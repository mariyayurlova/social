import React from "react";
import styles from "./Dialogs.module.css";
import DialogsPeoples from "./dialogsPeoples/DialogsPeoples";
import DialogsPosts from "./dialogsPosts/DialogsPosts";
import {Typography} from "@material-ui/core";
import {ActionsType, DialogsPageType, PostsPageType, StoreType} from "../../redux/store";
import Posts from "../profile/posts/Posts";
import DialogsPostsContainer from "./dialogsPosts/DialogsPostsContainer";

type DialogPostsType = {
    store: StoreType
}

const Dialogs:React.FC<DialogPostsType> = (props) =>{

    return (
        <div className={styles.dialogs}>
            <Typography variant="h4" component="h2">
                Dialogs
            </Typography>
            <div className={styles.dialogs__inner}>
                <DialogsPeoples/>
                <DialogsPostsContainer store={props.store}/>
            </div>
        </div>
    )

}

export default Dialogs;