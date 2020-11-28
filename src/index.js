import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';


let state = {
    posts: [
        {id: 1, message: 'Hi how are you?', likesCount: 12},
        {id: 2, message: 'How are u', likesCount: 1},
        {id: 3, message: 'hey bro whats up', likesCount: 0},
        {id: 4, message: 'no.', likesCount: 24},
        {id: 5, message: 'fuck tou asshole', likesCount: 17},
        {id: 6, message: 'Valera', likesCount: 3}
    ],
    dialogs: [
        {id: 1, name: 'Vlad'},
        {id: 2, name: 'Nazar'},
        {id: 3, name: 'Andrew'},
        {id: 4, name: 'Anton'},
        {id: 5, name: 'Olegsei'},
        {id: 6, name: 'Valera'}
    ],
    messages: [
        {id: 1, message: 'H1'},
        {id: 2, message: 'How r u?'},
        {id: 3, message: 'congratulations!'}
    ]
}


ReactDOM.render(
    <React.StrictMode>
        <App posts={state.posts} dialogs={state.dialogs} messages={state.messages} />
    </React.StrictMode>,
    document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

