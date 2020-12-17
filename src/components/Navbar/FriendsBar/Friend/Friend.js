import React from 'react'
import classes from './Friend.module.css'
import userAvatar from '../../../../assets/images/avatar-batman-small.png'

const Friend = props => {
    return (
    <div className={classes.friendItem}>
        <a href={'#'}>
            <img className={classes.friendAvatar} src={userAvatar} alt={'Friend Avatar'}/>
            <p className={classes.friendName}> { props.name } </p>
        </a>
    </div>
    )
}

export  default Friend