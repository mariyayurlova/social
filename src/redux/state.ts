import { v1 } from "uuid";

let renderTree = () => {
    console.log("rerender")
}

export type PostsType = {
    id: string,
    message: string,
    likesCount: number
}

export type DialogsType = {
    id: string,
    name: string
}

export type MessagesType = {
    id: string,
    message: string
}

export type PostsPageType = {
    posts: Array<PostsType>
}

export type DialogsPageType = {
    dialogs: Array<DialogsType>
    messages: Array<MessagesType>
}


export type RootStateType = {
    profilePage: PostsPageType
    dialogsPage: DialogsPageType
}

let state:RootStateType = {
    profilePage:{
        posts: [
            {id: v1(), message: 'Hi, how are you?', likesCount: 12},
            {id: v1(), message: 'Its my first post', likesCount: 11},
            {id: v1(), message: 'Blabla', likesCount: 10},
            {id: v1(), message: 'Dadada', likesCount: 9}
        ]
    },
    dialogsPage:{
        dialogs: [
            {id: v1(), name: "Masha"},
            {id: v1(), name: "Dima"},
            {id: v1(), name: "Sasha"}
        ],
        messages: [
            {id: v1(), message: 'Hi'},
            {id: v1(), message: 'How is your life?'},
            {id: v1(), message: 'Yo'},
            {id: v1(), message: 'Yo'},
            {id: v1(), message: 'Yo'}
        ]
    }
}

export let addPost = (postMessage:string) => {
    let newPost: PostsType = {
        id: new Date().toDateString(),
        message: postMessage,
        likesCount: 0
    }
    state.profilePage.posts.push(newPost);
    renderTree(state);
}

export const subscribe = (observer: () => void) => {
        renderTree = observer;
}

export default state;