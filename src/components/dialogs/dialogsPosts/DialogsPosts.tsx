import React from "react";
import styles from "./DialogsPosts.module.css";
import DialogsPost from "./dialogsPost/DialogsPost";
import ava from './../../../images/ava.png';
import avatar from './../../../images/avatar.png';
import TextField from "@material-ui/core/TextField";
import {Button} from "@material-ui/core";
import {createStyles, makeStyles, Theme} from "@material-ui/core/styles";

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


const DialogsPosts = () =>{
    const classes = useStyles();

    return (
        <div className={styles.dialogs__posts}>
            <div className={styles.dialogs__posts_messages}>
                <DialogsPost id={1} image={ava} name="Sasha" text="Contrary to popular belief, Lorem Ipsum is not simply random text."/>
                <DialogsPost id={2} image={avatar} name="Me" text="Contrary to popular "/>
                <DialogsPost id={3} image={ava} name="Sasha" text="Contrary to popular belief, Lorem Ipsum is not simply"/>
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
                    />
                    <Button variant="contained" >
                        Send
                    </Button>
                </form>
            </div>
        </div>
    )

}

export default DialogsPosts;