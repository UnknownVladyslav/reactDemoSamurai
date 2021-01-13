import React from 'react'
import {Field, reduxForm} from "redux-form";
import {Textarea} from "../../FormsControls/FormsControls";
import {maxLengthCreator, required} from "../../../utils/validators/validators";

const maxLength50 = maxLengthCreator(50)

const AddMessageForm = props => {

    return (
        <div>
            <form onSubmit={props.handleSubmit}>
                <div>
                    <Field component={Textarea} validate={[maxLength50]} name={'dialogAddMessageForm'} placeholder={'Enter your message'} />
                </div>
                <button>Send message</button>
            </form>
        </div>
    )
}

const DialogsReduxForm = reduxForm({form: 'dialogAddMessageForm'})(AddMessageForm)

export default DialogsReduxForm