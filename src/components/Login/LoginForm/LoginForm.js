import React from 'react'
import {Field, reduxForm} from "redux-form";
import {Input} from "../../FormsControls/FormsControls";
import {required} from "../../../utils/validators/validators";
import classes from './LoginForm.module.css'

const LoginForm = (props) => {
    return <div className={classes.loginWrapper}>
        <h1>Login</h1>
        <form onSubmit={props.handleSubmit}>
            <div className={classes.loginFormField}>
                <Field placeholder={'Login'} name={'email'}
                       validate={[required]}
                       component={Input}/>
            </div>
            <div className={classes.loginFormField}>
                <Field placeholder={'Password'} name={'password'}
                       type={'password'}
                       validate={[required]}
                       component={Input}/>
            </div>
            <div className={classes.loginFormField}>
                <label className={classes.rememberMe}>
                    <Field type={'checkbox'} name={'rememberMe'} component={Input}/>
                    <span>remember me</span>
                </label>
            </div>
            {props.error && <div className={classes.formSummaryError}>
                <strong>{props.error}</strong>
            </div>}
            <div className={classes.loginFormField}>
                <button type={'submit'}>Log In</button>
            </div>
        </form>
    </div>
}

const LoginReduxForm = reduxForm({form: 'login'})(LoginForm)

export default LoginReduxForm