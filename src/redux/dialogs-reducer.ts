import {ChangeMessageBodyTypeAction, MessagesType, SendMessageTypeAction} from "./store";
import profileReducer from "./profile-reducer";

const dialogsReducer = (state, action) => {

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