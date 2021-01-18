import React from 'react'
import Loader from "../common/Loader/Loader";
import Paginator from "../common/Paginator/Paginator";
import User from "./User/User";
import classes from './Users.module.css'


const Users = ({currentPage, onPageChanged, totalUsersCount, pageSize, users, ...props}) => {

    if (props.loading) {
        return <Loader/>
    }

    return <div className={classes.usersPage}>
        <Paginator currentPage={currentPage} onPageChanged={onPageChanged}
                   totalItemsCount={totalUsersCount} portionSize={pageSize}/>
        <div className={classes.usersList}>
            {
                users.map(u => <User key={u.id} user={u}
                                     followingInProgress={props.followingInProgress}
                                     follow={props.follow} unfollow={props.unfollow}
                />)

            }
        </div>
    </div>
}
export default Users