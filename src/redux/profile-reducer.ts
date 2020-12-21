import {ActionsType, AddPostTypeAction, ChangePostTypeAction, PostsType, RootStateType} from "./store";
import React from "react";

type ReducerType = {
    state: RootStateType
    action: ActionsType
}

const profileReducer = (state, action):ReducerType => {

    switch (action.type){
        case 'ADD-POST':
            let newPost: PostsType = {
                id: new Date().toDateString(),
                message: state.newPostText,
                likesCount: 0
            }
            state.posts.push(newPost);
            state.newPostText = '';
            return state;
        case 'CHANGE-POST':
            state.newPostText = action.newText;
            return state;
        default:
            return state;
    }

    return state;
}

export const addPostAC = (): AddPostTypeAction => {
    return{
        type: 'ADD-POST'
    }
}

export const changePostAC = (newText: string): ChangePostTypeAction => {
    return{
        type: 'CHANGE-POST',
        newText: newText
    }
}

export default profileReducer;