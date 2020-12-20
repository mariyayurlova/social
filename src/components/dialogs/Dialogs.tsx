import React from "react";
import styles from "./Dialogs.module.css";
import DialogsPeoples from "./dialogsPeoples/DialogsPeoples";
import DialogsPosts from "./dialogsPosts/DialogsPosts";
import {Typography} from "@material-ui/core";
import {ActionsType, PostsPageType, DialogsPageType} from "../../redux/state";
import Posts from "../profile/posts/Posts";

type DialogPostsType = {
    dialogsPage: DialogsPageType
    dispatch: (action: ActionsType) => void
}

const Dialogs:React.FC<DialogPostsType> = (props) =>{

    return (
        <div className={styles.dialogs}>
            <Typography variant="h4" component="h2">
                Dialogs
            </Typography>
            <div className={styles.dialogs__inner}>
                <DialogsPeoples/>
                <DialogsPosts messages={props.dialogsPage.messages} dispatch={props.dispatch}/>
            </div>
        </div>
    )

}

export default Dialogs;