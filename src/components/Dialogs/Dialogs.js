import React from 'react'
import classes from "./Dialogs.module.css"
import DialogItem from "./DialogItem/DialogItem";
import Message from "./Message/Message";

const Dialogs = props => {
    let state = props.dialogsPage

    let dialogsElements = state.dialogs
        .map( d => <DialogItem name={d.name} key={d.id} id={d.id}/>  )


    let messagesElements = state.messages
        .map( m => <Message message={m.message} key={m.id} /> )

    let newMessageText = state.newMessageText



    // let newMessageElement = React.createRef()


    let onSendMessageClick = () => {
        props.sendMessage()
    }

    let onNewMessageChange = (e) => {
        let body = e.target.value
        props.updateNewMessageText(body)
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
                <textarea
                    // ref={newMessageElement}
                          onChange={onNewMessageChange} value={newMessageText} placeholder={'Enter your message'} />
                <button onClick={ onSendMessageClick }>Send message</button>
            </div>
        </div>
    )
}

export default Dialogs