import {ActionsType, AddPostTypeAction, ChangePostTypeAction, PostsType, RootStateType, PostsPageType} from "./store";
import React from "react";
import {v1} from "uuid";



let initialState:PostsPageType = {
    posts: [
        {id: v1(), message: 'Hi, how are you?', likesCount: 12},
        {id: v1(), message: 'Its my first post', likesCount: 11},
        {id: v1(), message: 'Blabla', likesCount: 10},
        {id: v1(), message: 'Dadada', likesCount: 9}
    ],
    newPostText: ''
}

const profileReducer = (state=initialState, action:ActionsType) => {

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