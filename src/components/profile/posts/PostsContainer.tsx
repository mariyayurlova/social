import React, {ChangeEvent} from "react";
import Post from "./post/Post";
import {addPostAC, changePostAC} from "../../../redux/profile-reducer";
import {ActionsType, PostsPageType, PostsType, StoreType} from "../../../redux/store";
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';
import Posts from "./Posts";

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
    store: StoreType
}


const PostsContainer:React.FC<PostsTypeInner> = (props) =>{

    let state = props.store.getState();

    let addPost = () => {
        props.store.dispatch(addPostAC())
    }

    let postChange = (text: string) => {
        let action = changePostAC(text);
        props.store.dispatch(action);
    }


    return (<Posts onPostChange={postChange} onAddPost={addPost} posts={state.profilePage.posts} newPostText={state.profilePage.newPostText} />)

}

export default PostsContainer;