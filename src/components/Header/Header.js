import React from 'react'
import classes from './Header.module.css'
import {NavLink} from "react-router-dom"
import logOutIcon from '../../../src/assets/images/sign-out-alt-solid.svg'

const Header = props => {
    return (
        <header className={classes.Header}>
            <NavLink to={'/'}> <img src="https://i.pinimg.com/236x/71/b3/e4/71b3e4159892bb319292ab3b76900930.jpg" alt="logo" className={classes.Logo}/> </NavLink>
            <div className={classes.loginBlock}>
                {props.isAuth
                    ? <div className={classes.loginAndLogout}>
                        <p>{props.login}</p>
                        <div><button onClick={props.logout}><img src={logOutIcon} alt={'Log Out'}/></button></div>
                      </div>
                    : <NavLink to={'/login'}><p>Login</p></NavLink>
                }
            </div>
        </header>
    )
}

export default Header