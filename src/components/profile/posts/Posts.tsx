import React, {ChangeEvent} from "react";
import styles from "./Posts.module.css";
import Post from "./post/Post";
import {addPostAC, changePostAC, PostsType} from "../../../redux/state";
import {Typography, Button} from "@material-ui/core";
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';

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

type PostsTypeInner = {
    dispatch: (action: any) => void
    posts: Array<PostsType>
}


const Posts:React.FC<PostsTypeInner> = (props) =>{
    const classes = useStyles();

    let newPostElement = React.createRef<HTMLTextAreaElement>();

    let addPost = () => {
        props.dispatch(addPostAC())
    }

    let onPostChange = (e: ChangeEvent<HTMLTextAreaElement>) => {
        props.dispatch(changePostAC(e.currentTarget.value))
    }

    let PostsMap = props.posts.map((item, index) => {
        return <Post key={index} id={item.id} message={item.message} likesCount={item.likesCount}/>
    })

    return (
        <div>
            <div className={styles.wrapper__posts}>
                <Typography variant="h4" component="h2">
                    My posts
                </Typography>

                <div className={styles.wrapper__posts_inner}>
                    <form className={classes.root} noValidate autoComplete="off">
                        <TextField
                            id="outlined-textarea"
                            label="Your news"
                            placeholder="Your news"
                            multiline
                            variant="outlined"
                            className={classes.root}
                            inputRef={newPostElement}
                            onChange={onPostChange}
                        />
                        <Button variant="contained" onClick={addPost}>
                            Send
                        </Button>
                    </form>
                </div>
            </div>
            <div className={styles.wrapper__messages}>
                {PostsMap}
            </div>
        </div>
)

}

export default Posts;