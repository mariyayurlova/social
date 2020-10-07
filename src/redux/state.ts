
type PostsType = {
    id: string,
    message: string,
    likesCount: number
}

type DialogsType = {
    id: string,
    name: string
}

type MessagesType = {
    id: string,
    message: string
}

type PostsPageType = {
    posts: Array<PostsType>
}

type DialogsPageType = {
    dialogs: Array<DialogsType>
    messages: Array<MessagesType>
}


type RootStateType = {
    profilePage: PostsPageType
    dialogsPage: DialogsPageType
}

let state:RootStateType = {
    profilePage:{
        posts: [
            {id: "1", message: 'Hi, how are you?', likesCount: 12},
            {id: "2", message: 'Its my first post', likesCount: 11},
            {id: "3", message: 'Blabla', likesCount: 10},
            {id: "4", message: 'Dadada', likesCount: 9}
        ]
    },
    dialogsPage:{
        dialogs: [
            {id: "1", name: "Masha"},
            {id: "2", name: "Dima"},
            {id: "3", name: "Sasha"}
        ],
        messages: [
            {id: "1", message: 'Hi'},
            {id: "2", message: 'How is your life?'},
            {id: "3", message: 'Yo'},
            {id: "4", message: 'Yo'},
            {id: "5", message: 'Yo'}
        ]
    }
}