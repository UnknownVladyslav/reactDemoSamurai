import React from 'react'
import {NavLink} from "react-router-dom";
import userPhoto from '../../assets/images/avatar-batman-small.png'


const User = ({user, followingInProgress, unfollow, follow}) => {
    return <div>
        <div>
            <NavLink to={'/profile/' + user.id}><img
                src={user.photos.small != null ? user.photos.small : userPhoto} alt='user photo'/></NavLink>
        </div>

        <div>
            {user.followed ? <button disabled={followingInProgress.some(id => id === user.id)} onClick={() => {
                    unfollow(user.id)
                }}>Unfollow</button>

                : <button disabled={followingInProgress.some(id => id === user.id)} onClick={() => {
                    follow(user.id)
                }}>Follow</button>}
        </div>


        <div>{user.name}</div>
        <div>{user.status}</div>


        <div>{'user.location.country'}</div>
        <div>{'user.location.city'}</div>


    </div>
}

export default User