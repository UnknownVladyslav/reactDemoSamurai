import React from 'react'
import classes from './MyPostForm.module.css'
import {Field, reduxForm} from "redux-form";

const MyPostForm = props => {

    return <div className={classes.addPostForm}>
        <form onSubmit={props.handleSubmit} className={classes.addPostForm}>
        <Field component={'textarea'} placeholder={'Enter your message'} name={'newPostBody'} />
        {
                <button type={'submit'} onClick={props.addNewPost}>Add post</button>
        }
        </form>
    </div>
}

const MyPostReduxForm = reduxForm({form: 'newPostBody'})(MyPostForm)

export default MyPostReduxForm