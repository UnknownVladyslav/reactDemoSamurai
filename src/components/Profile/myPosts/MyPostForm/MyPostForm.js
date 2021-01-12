import React from 'react'
import classes from './MyPostForm.module.css'
import {Field, reduxForm} from "redux-form";
import  {required, maxLengthCreator} from "../../../../utils/validators/validators";
import {Textarea} from "../../../FormsControls/FormsControls";

const maxLengthCreator10 = maxLengthCreator(10)

const MyPostForm = props => {

    return <div>
        <form onSubmit={props.handleSubmit} className={classes.addPostForm}>
            <div className={classes.formWrapper}>
        <Field component={Textarea} placeholder={'Enter your message'} name={'newPostBody'}
               validate={maxLengthCreator10} />
                <button type={'submit'} onClick={props.addNewPost}>Add post</button>
            </div>
        </form>
    </div>
}

const MyPostReduxForm = reduxForm({form: 'newPostBody'})(MyPostForm)

export default MyPostReduxForm