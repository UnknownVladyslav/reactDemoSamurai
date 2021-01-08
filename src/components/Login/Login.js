import React from 'react'
import LoginReduxForm from "./LoginForm/LoginForm";

const Login = (props) => {

    const onSubmit = formData => {
        console.log(formData)
    }

    return <div>
        <LoginReduxForm onSubmit={onSubmit} />
    </div>
}


export default Login