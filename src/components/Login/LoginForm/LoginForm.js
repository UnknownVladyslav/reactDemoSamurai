import React from 'react'
import classes from './LoginForm.module.css'
import {Field, reduxForm} from "redux-form";

const LoginForm = (props) => {
    return <div className={classes.loginWrapper}>
        <h1>Login</h1>
        <form onSubmit={props.handleSubmit}>
            <div>
                <Field placeholder={'Login'} name={'login'} component={'input'} />
            </div>
            <div>
                <Field placeholder={'Password'} name={'password'} component={'input'} />
            </div>
            <div>
                <Field type={'checkbox'} name={'rememberMe'} component={'input'} /> remember me
            </div>
            <div>
                <button type={'submit'}>Log In</button>
            </div>
        </form>
    </div>
}

const LoginReduxForm = reduxForm({form: 'login'})(LoginForm)

export default LoginReduxForm