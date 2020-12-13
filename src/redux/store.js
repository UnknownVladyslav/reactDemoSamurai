import profileReducer from './profile-reducer'
import dialogsReducer from "./dialogs-reducer";
import sidebarReducer from "./sidebar-reducer";

// const ADD_POST = 'ADD-POST';
// const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT';
// const ADD_MESSAGE = 'ADD-MESSAGE';
// const UPDATE_NEW_MESSAGE_TEXT = 'UPDATE-NEW-MESSAGE-TEXT';

let store = {
    _state: {
        profilePage: {
            posts: [],
            newPostText: ''

        },

        messagesPage: {
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
        },

        sidebar: {
            friends: [
                {id: 1, name: 'Sasha'},
                {id: 2, name: 'Andrew'},
                {id: 3, name: 'Wilson'}
            ]
        }
    },


    _callSubscriber() {
        console.log('state is changed')
    },

    getState() {
        return this._state;
    },

    subscribe(observer) {
        this._callSubscriber = observer
    },

    dispatch(action) {

        profileReducer(this._state.profilePage, action)
        dialogsReducer(this._state.messagesPage, action)
        sidebarReducer(this._state.sidebar, action)


        this._callSubscriber(this._state)
    }
}


window.store = store


export default store

