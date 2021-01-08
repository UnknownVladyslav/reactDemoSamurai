import React from 'react'
import classes from "./Dialogs.module.css"
import DialogItem from "./DialogItem/DialogItem";
import Message from "./Message/Message";
import DialogsReduxForm from "./DialogsForm/DialogsForm";

const Dialogs = props => {
    let state = props.dialogsPage

    let dialogsElements = state.dialogs
        .map( d => <DialogItem name={d.name} key={d.id} id={d.id}/>  )


    let messagesElements = state.messages
        .map( m => <Message message={m.message} key={m.id} /> )


    let addNewMessage = values => {
        props.sendMessage(values.dialogAddMessageForm)
    }



    return (
        <div className={classes.Dialogs}>
            <div className={classes.dialogsItems}>
                { dialogsElements }
            </div>


            <div className={classes.messages}>
                <div className={classes.messageItems}>
                    <div>{messagesElements}</div>
                </div>
            </div>
                    <div>
                    <DialogsReduxForm onSubmit={addNewMessage} />
                    </div>
        </div>
    )
}

export default Dialogs