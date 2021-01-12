import React from 'react'
import {NavLink} from "react-router-dom";
import userPhoto from '../../assets/images/avatar-batman-small.png'
import classes from './Users.module.css'
import Loader from "../../assets/Loader/Loader";



let Users = props => {

    let pagesCount = Math.ceil(props.totalUsersCount / props.pageSize) / 25

    let pages = []

    for (let i = 1; i <= pagesCount; i++) {
        pages.push(i)
    }

    if (props.loading) {
        return <Loader />
    }


    return <div className={classes.usersPage}>
        <div>
            <ul className={classes.pagesList}>
                {pages.map(p => {
                    return <li
                        className={`${props.currentPage === p && classes.selectedPage} ${classes.pagesListItem}`}
                        onClick={e => {
                            props.onPageChanged(p)
                        }}>{p}</li>
                })}
            </ul>
        </div>
        {
            props.users.map(u => <div key={u.id}>

                    <div>
                        <NavLink to={'/profile/' + u.id}><img
                            src={u.photos.small != null ? u.photos.small : userPhoto}/></NavLink>
                    </div>

                    <div>
                        {u.followed ? <button disabled={props.followingInProgress.some(id => id === u.id)} onClick={() => { props.unfollow(u.id) }}>Unfollow</button>

                            : <button disabled={props.followingInProgress.some(id => id === u.id)} onClick={() => { props.follow(u.id) }}>Follow</button>}
                    </div>


                    <div>{u.name}</div>
                    <div>{u.status}</div>


                    <div>{'u.location.country'}</div>
                    <div>{'u.location.city'}</div>


                </div>
            )
        }
    </div>
}

export default Users