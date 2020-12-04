import React from 'react'
import classes from './Friends.module.css'
import Friend from "./Friend/Friend";

const Friends = props => {

    let friendsItems = props.state
        .map( f => <Friend name={f.name} id={f.id}/>  )


    return (
    <div className={classes.FriendsWrapper}>
        <h2 className={classes.friendsTitle}>Friends</h2>

        <div className={classes.friendsList}>
            { friendsItems }
        </div>
    </div>
)
}

export default Friends