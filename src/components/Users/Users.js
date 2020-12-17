import React from 'react'
import classes from './Users.module.css'
import * as axios from 'axios'
import userPhoto from '../../assets/images/avatar-batman-small.png'
import {NavLink} from "react-router-dom";


let Users = props => {

    let pagesCount = Math.ceil(props.totalUsersCount / props.pageSize) / 25

    let pages = []

    for (let i = 1; i <= pagesCount; i++) {
        pages.push(i)
    }


    return <div className={classes.usersPage}>

        {
            props.users.map(u => <div key={u.id}>

                    <div>
                        <NavLink to={'/profile/' + u.id}><img
                            src={u.photos.small != null ? u.photos.small : userPhoto}/></NavLink>
                    </div>

                    <div>
                        {u.followed ? <button onClick={() => {
                                axios.delete(`https://social-network.samuraijs.com/api/1.0/follow/${u.id}`, {
                                    withCredentials: true,
                                    headers: {
                                        'API-KEY': '9b74af9a-8d65-4cc8-8515-3ab319e99ba4'
                                    }
                                })
                                    .then(response => {
                                        if (response.data.resultCode === 0) {
                                            props.unfollow(u.id)
                                        }
                                    })
                            }}>Unfollow</button>

                            : <button onClick={() => {
                                axios.post(`https://social-network.samuraijs.com/api/1.0/follow/${u.id}`, {}, {
                                    withCredentials: true,
                                    headers: {
                                        'API-KEY': '9b74af9a-8d65-4cc8-8515-3ab319e99ba4'
                                    }
                                })
                                    .then(response => {
                                        if (response.data.resultCode === 0) {
                                            props.follow(u.id)
                                        }
                                    })
                            }}>Follow</button>}
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