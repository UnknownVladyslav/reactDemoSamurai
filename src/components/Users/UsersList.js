import React from 'react'
import User from "./User/User";
import classes from './Users.module.css'


const UsersList = ({followingInProgress, follow, unfollow, users}) => {
    return <div className={classes.usersList}>
        {
        users.map( u => <User key={u.id} user={u}
                             followingInProgress={followingInProgress}
                             follow={follow} unfollow={unfollow}
    />)

        }
    </div>
}
export default UsersList