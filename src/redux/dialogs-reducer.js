const ADD_MESSAGE = 'ADD-MESSAGE';
const UPDATE_NEW_MESSAGE_TEXT = 'UPDATE-NEW-MESSAGE-TEXT';


export const addMessageActionCreator = () => ({type: ADD_MESSAGE})

export const updateNewMessageTextActionCreator = (text) => ({type: UPDATE_NEW_MESSAGE_TEXT, newText: text})

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
        messages: [],
        newMessageText: ''
    }


const dialogsReducer = (state = initialState, action) => {

    switch (action.type) {
        case ADD_MESSAGE: {
            let newMessage = state.newMessageText
            return {
                ...state,
                messages: [...state.messages, {id: 6, message: newMessage}],
                newMessageText: ''
            }
        }
        case UPDATE_NEW_MESSAGE_TEXT: {
            return {
                ...state,
                newMessageText: action.newText
            }
        }
        default:
            return state
    }
}

export default dialogsReducer