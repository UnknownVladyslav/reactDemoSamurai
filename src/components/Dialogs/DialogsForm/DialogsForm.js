import React from 'react'
import {Field, reduxForm} from "redux-form";

const AddMessageForm = props => {

    return (
        <div>
            <form onSubmit={props.handleSubmit}>
                <div>
                    <Field component={'textarea'} name={'dialogAddMessageForm'} placeholder={'Enter your message'} />
                </div>
                <button>Send message</button>
            </form>
        </div>
    )
}

const DialogsReduxForm = reduxForm({form: 'dialogAddMessageForm'})(AddMessageForm)

export default DialogsReduxForm