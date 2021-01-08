const ADD_MESSAGE = 'ADD-MESSAGE';
// const UPDATE_NEW_MESSAGE_TEXT = 'UPDATE-NEW-MESSAGE-TEXT';


export const addMessageActionCreator = (dialogAddMessageForm) => ({type: ADD_MESSAGE, dialogAddMessageForm})

// export const updateNewMessageTextActionCreator = (text) => ({type: UPDATE_NEW_MESSAGE_TEXT, newText: text})

let initialState =
    {
        dialogs: [
            {id: 1, name: 'Vlad'},
            {id: 2, name: 'Nazar'},
            {id: 3, name: 'Andrew'},
            {id: 4, name: 'Anton'},
            {id: 5, name: 'Olegsei'},
            {id: 6, name: 'Valera'}
        ],
        messages: []
    }


const dialogsReducer = (state = initialState, action, index) => {

    switch (action.type) {
        case ADD_MESSAGE: {
            let newMessage = action.dialogAddMessageForm
            return {
                ...state,
                messages: [...state.messages, {id: index, message: newMessage}]
            }
        }
        // case UPDATE_NEW_MESSAGE_TEXT: {
        //     return {
        //         ...state,
        //         newMessageText: action.newText
        //     }
        // }
        default:
            return state
    }
}

export default dialogsReducer