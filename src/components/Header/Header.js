import React from 'react'
import classes from './Header.module.css'
import {NavLink} from "react-router-dom";

const Header = () => {
    return (
        <header className={classes.Header}>
            <NavLink to={'/'}> <img src="https://i.pinimg.com/236x/71/b3/e4/71b3e4159892bb319292ab3b76900930.jpg" alt="logo" className={classes.Logo}/> </NavLink>
        </header>
    )
}

export default Header