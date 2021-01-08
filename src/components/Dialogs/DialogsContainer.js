import React from 'react'
import Dialogs from "./Dialogs";
import {addMessageActionCreator} from "../../redux/dialogs-reducer";
import {connect} from "react-redux";
import withAuthRedirect from "../../hoc/WithAuthRedirect";
import {compose} from "redux";



let mapStateToProps = (state) => {
    return {
       dialogsPage: state.dialogsPage
    }
}

let mapDispatchToProps = dispatch => {
    return {
        // updateNewMessageText: body => {
        //     dispatch(updateNewMessageTextActionCreator(body))
        // },
        sendMessage: (dialogAddMessageForm) => {
            dispatch(addMessageActionCreator(dialogAddMessageForm))
        }
    }
}

const DialogsContainer = compose(
    connect(mapStateToProps, mapDispatchToProps),
    withAuthRedirect
)(Dialogs)

export default DialogsContainer