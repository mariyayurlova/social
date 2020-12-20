import { v1 } from "uuid";

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
    newPostText: string
}

export type DialogsPageType = {
    dialogs: Array<DialogsType>
    messages: Array<MessagesType>
    newMessageBody: string
}


export type RootStateType = {
    profilePage: PostsPageType
    dialogsPage: DialogsPageType
}

export type StoreType = {
    _state: RootStateType
    _onChange: () => void
    subscribe: (callback: () => void) => void
    getState: () => RootStateType
    dispatch: (action: ActionsType) => void
}

export type AddPostTypeAction = {
    type: 'ADD-POST'
}

export type SendMessageTypeAction = {
    type: 'SEND-MESSAGE'
}

export type ChangePostTypeAction = {
    type: 'CHANGE-POST'
    newText: string
}

export type ChangeMessageBodyTypeAction = {
    type: 'CHANGE-MESSAGE-BODY'
    body: string
}

export type ActionsType = AddPostTypeAction | ChangePostTypeAction | ChangeMessageBodyTypeAction | SendMessageTypeAction;

let store:StoreType = {
    _state: {
        profilePage: {
            posts: [
                {id: v1(), message: 'Hi, how are you?', likesCount: 12},
                {id: v1(), message: 'Its my first post', likesCount: 11},
                {id: v1(), message: 'Blabla', likesCount: 10},
                {id: v1(), message: 'Dadada', likesCount: 9}
            ],
            newPostText: ''
        },
        dialogsPage: {
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
            ],
            newMessageBody: ''
        }
    },
    getState(){
      return this._state;
    },

    _onChange() {
        console.log("rerender")
    },
    subscribe(callback) {
        this._onChange = callback;
    },

    dispatch(action){
        if (action.type === 'ADD-POST'){
            let newPost: PostsType = {
                id: new Date().toDateString(),
                message: this._state.profilePage.newPostText,
                likesCount: 0
            }
            this._state.profilePage.posts.push(newPost);
            this._state.profilePage.newPostText = '';
            this._onChange();
        }
        else if(action.type === 'CHANGE-POST'){
            this._state.profilePage.newPostText = action.newText;
            this._onChange();
        }
        else if(action.type === 'CHANGE-MESSAGE-BODY'){
            this._state.dialogsPage.newMessageBody = action.body;
            this._onChange();
        }
        else if(action.type === 'SEND-MESSAGE'){
            let body = this._state.dialogsPage.newMessageBody;
            let newMessage: MessagesType = {
                id: new Date().toDateString(),
                message: body,
            }
            this._state.dialogsPage.newMessageBody = '';
            this._state.dialogsPage.messages.push(newMessage);
            this._onChange();
        }
    }

}

export const addPostAC = (): AddPostTypeAction => {
    return{
        type: 'ADD-POST'
    }
}

export const sendMessageAC = (): SendMessageTypeAction => {
    return{
        type: 'SEND-MESSAGE'
    }
}

export const changePostAC = (newText: string): ChangePostTypeAction => {
    return{
        type: 'CHANGE-POST',
        newText: newText
    }
}

export const changeMessageBodyAC = (body: string): ChangeMessageBodyTypeAction => {
    return{
        type: 'CHANGE-MESSAGE-BODY',
        body: body
    }
}

export default store;