import React from 'react'
import classes from './Navbar.module.css'
import {NavLink} from "react-router-dom";
import Friends from "./FriendsBar/Friends";

const Navbar = props => {
    return (
        <nav className={classes.Navbar}>
            <ul className={classes.navList}>
                <li className={classes.navItem}><NavLink to={'/profile'} activeClassName={classes.activeLink}>Profile</NavLink></li>
                <li className={classes.navItem}><NavLink to={'/dialogs'} activeClassName={classes.activeLink}>Messages</NavLink></li>
                <li className={classes.navItem}><NavLink to={'/news'} activeClassName={classes.activeLink}>News</NavLink></li>
                <li className={classes.navItem}><NavLink to={'/music'} activeClassName={classes.activeLink}>Music</NavLink></li>
                <li className={classes.navItem}><NavLink to={'/settings'} activeClassName={classes.activeLink}>Settings</NavLink></li>
            </ul>

            <Friends state={props.state.friends} />
        </nav>
    )
}

export default Navbar