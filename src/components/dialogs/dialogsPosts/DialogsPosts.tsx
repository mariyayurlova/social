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
    PostsType
} from "../../../redux/store";
import Post from "../../profile/posts/post/Post";

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

type MessageTypeInner = {
    dispatch: (action: any) => void
    messages: Array<MessagesType>
}



const DialogsPosts:React.FC<MessageTypeInner> = (props) =>{
    const classes = useStyles();

    let newMessageElement = React.createRef<HTMLTextAreaElement>();

    let addMessage = () => {
        props.dispatch(sendMessageAC())
    }

    let onMessageChange = (e: ChangeEvent<HTMLTextAreaElement>) => {
        props.dispatch(changeMessageBodyAC(e.currentTarget.value))
    }

    let MessageMap = props.messages.map((item, index) => {
        return <DialogsPost key={index} id={item.id} text={item.message}/>
    })

    return (
        <div className={styles.dialogs__posts}>
            <div className={styles.dialogs__posts_messages}>
                {MessageMap}
            </div>
            <div className={styles.dialogs__posts_type}>
                <form className={classes.root} noValidate autoComplete="off">
                    <TextField
                        id="outlined-textarea"
                        label="Your message"
                        placeholder="Your message"
                        multiline
                        variant="outlined"
                        className={classes.root}
                        inputRef={newMessageElement}
                        onChange={onMessageChange}
                    />
                    <Button variant="contained" onClick={addMessage}>
                        Send
                    </Button>
                </form>
            </div>
        </div>
    )

}

export default DialogsPosts;