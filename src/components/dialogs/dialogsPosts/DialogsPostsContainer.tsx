import React, {ChangeEvent} from "react";
import styles from "./DialogsPosts.module.css";
import DialogsPost from "./dialogsPost/DialogsPost";
import ava from './../../../images/ava.png';
import TextField from "@material-ui/core/TextField";
import {Button} from "@material-ui/core";
import {createStyles, makeStyles, Theme} from "@material-ui/core/styles";
import {
    changeMessageBodyAC,
    sendMessageAC
} from "../../../redux/dialogs-reducer";
import {
    MessagesType,
    PostsType, StoreType
} from "../../../redux/store";
import Post from "../../profile/posts/post/Post";
import DialogsPosts from "./DialogsPosts";

export type DialogsPostsType = {
    id: number
    image: string
    name: string
    text: string
}

const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        root: {
            '& .MuiTextField-root': {
                margin: theme.spacing(1),
                width: '100%',
            },
            '& .MuiInputLabel-root': {
                padding: '15px'
            },
            '& .MuiOutlinedInput-root.Mui-focused .MuiOutlinedInput-notchedOutline': {
                borderColor: '#A52A2A'
            },
            '& .MuiFormLabel-root.Mui-focused': {
                color: '#A52A2A',
                padding: '0'
            },
            '& .MuiButtonBase-root': {
                display: 'block',
                width: '180px',
                padding: '0'
            },
        }
    }),
);

type MessageTypeInnerFirst = {
    store: StoreType
}



const DialogsPostsContainer:React.FC<MessageTypeInnerFirst> = (props) =>{

    let state = props.store.getState();

    let addMessage = () => {
        props.store.dispatch(sendMessageAC())
    }

    let onMessageChange = (text: string) => {
        props.store.dispatch(changeMessageBodyAC(text))
    }

    return <DialogsPosts onAddMessage={addMessage} onMessageChange={onMessageChange} messages={state.dialogsPage.messages} newMessageBody={state.dialogsPage.newMessageBody}/>

}

export default DialogsPostsContainer;