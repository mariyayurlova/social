import {ChangeMessageBodyTypeAction, MessagesType, SendMessageTypeAction, DialogsPageType, ActionsType} from "./store";
import profileReducer from "./profile-reducer";
import {v1} from "uuid";

let initialState:DialogsPageType = {
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

const dialogsReducer = (state=initialState, action:ActionsType) => {

    switch (action.type){
        case 'CHANGE-MESSAGE-BODY':
            state.newMessageBody = action.body;
            return state;
        case 'SEND-MESSAGE':
            let body = state.newMessageBody;
            let newMessage: MessagesType = {
                id: new Date().toDateString(),
                message: body,
            }
            state.newMessageBody = '';
            state.messages.push(newMessage);
            return state;
        default:
            return state;
    }

    return state;
}

export const sendMessageAC = (): SendMessageTypeAction => {
    return{
        type: 'SEND-MESSAGE'
    }
}


export const changeMessageBodyAC = (body: string): ChangeMessageBodyTypeAction => {
    return{
        type: 'CHANGE-MESSAGE-BODY',
        body: body
    }
}

export default dialogsReducer;