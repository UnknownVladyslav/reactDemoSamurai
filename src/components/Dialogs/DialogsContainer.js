import React from 'react'
import Dialogs from "./Dialogs";
import {addMessageActionCreator, updateNewMessageTextActionCreator} from "../../redux/dialogs-reducer";

const DialogsContainer = props => {

    let state = props.store.getState().dialogsPage

    let onSendMessageClick = () => {
        props.store.dispatch(addMessageActionCreator())
    }

    let onNewMessageChange = (body) => {
        props.store.dispatch(updateNewMessageTextActionCreator(body))
    }

    return (
        <Dialogs
            updateNewMessageText={onNewMessageChange}
            sendMessage={onSendMessageClick}
            dialogsPage={state}
        />
    )
}

export default DialogsContainer