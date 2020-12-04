import React from 'react';
import './index.css';
import ReactDOM from 'react-dom';
import App from './App';
import store from './redux/redux-store'
import {BrowserRouter} from "react-router-dom";

let rerenderEntireTree = (state) => {
ReactDOM.render(
    <BrowserRouter>
        <App
            state={store.getState()}
            dispatch={store.dispatch.bind(store)}
            store={store}
        />
    </BrowserRouter>,
    document.getElementById('root')
)
}

rerenderEntireTree(store.getState())

store.subscribe( () => {
    let state = store.getState()
    rerenderEntireTree(state)
})