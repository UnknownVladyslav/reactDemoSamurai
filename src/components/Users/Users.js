import React from 'react'
import Loader from "../common/Loader/Loader";
import Paginator from "../common/Paginator/Paginator";
import UsersList from "./UsersList";
import classes from './Users.module.css'


const Users = ({currentPage, onPageChanged, totalUsersCount, pageSize, ...props}) => {

    if (props.loading) {
        return <Loader/>
    }

    return <div className={classes.usersPage}>
        <Paginator currentPage={currentPage} onPageChanged={onPageChanged}
                   totalItemsCount={totalUsersCount} portionSize={pageSize}/>
        <div>
            <UsersList followingInProgress={props.followingInProgress}
                       follow={props.follow} unfollow={props.unfollow}
                       users={props.users}
            />
        </div>
    </div>
}
export default Users