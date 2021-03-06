import React from 'react'
import classes from './MyPostForm.module.css'
import {Field, reduxForm} from "redux-form";
import {maxLengthCreator} from "../../../../utils/validators/validators";
import {Textarea} from "../../../common/FormsControls/FormsControls";

const maxLengthCreator100 = maxLengthCreator(100)

const MyPostForm = props => {
// const {pristine, submitting} = props
    return <div>
        <form onSubmit={props.handleSubmit} className={classes.addPostForm}>
            <div className={classes.formWrapper}>
        <Field component={Textarea} placeholder={'Enter your message'} name={'newPostBody'}
               validate={maxLengthCreator100} />
                <button type='submit' disabled={props.pristine || props.submitting} onClick={props.addNewPost}>Add post</button>
            </div>
        </form>
    </div>
}

const MyPostReduxForm = reduxForm({form: 'newPostBody'})(MyPostForm)

export default MyPostReduxForm