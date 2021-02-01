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
    dispatch: (action: ActionsType) => void
    store: StoreType
    profilePage: PostsPageType
}


const PostsContainer:React.FC<PostsTypeInner> = (props) =>{
    const classes = useStyles();
    let posts = props.profilePage.posts;

    let newPostElement = React.createRef<HTMLTextAreaElement>();

    let addPost = () => {
        props.store.dispatch(addPostAC())
    }

    let onPostChange = (text: string) => {
        let action = changePostAC(text);
        props.store.dispatch(action);
    }

    let PostsMap = posts.map((item, index) => {
        return <Post key={index} id={item.id} message={item.message} likesCount={item.likesCount}/>
    })

    return (<Posts onPostChange={onPostChange} addPost={addPost} posts={props.profilePage} dispatch={props.dispatch}/>)

}

export default PostsContainer;