import React from 'react'
import {NavLink} from "react-router-dom";
import userPhoto from '../../../assets/images/avatar-batman-small.png'
import classes from './User.module.css'


const User = ({user, followingInProgress, unfollow, follow}) => {
    return <div className={classes.userCard}>
        <div>
            <NavLink to={'/profile/' + user.id}><img
                src={user.photos.small != null ? user.photos.small : userPhoto} alt='user photo'/></NavLink>
        </div>

        <div className={classes.userName}>{user.name}</div>
        {/*<div>{user.status}</div>*/}

        <div>{'country'}</div>
        <div>{'city'}</div>

        <div>
            {user.followed ? <button disabled={followingInProgress.some(id => id === user.id)} onClick={() => {
                    unfollow(user.id)
                }} className={classes.followButton}>Unfollow</button>

                : <button disabled={followingInProgress.some(id => id === user.id)} onClick={() => {
                    follow(user.id)
                }} className={classes.followButton}>Follow</button>}
        </div>


    </div>
}

export default User