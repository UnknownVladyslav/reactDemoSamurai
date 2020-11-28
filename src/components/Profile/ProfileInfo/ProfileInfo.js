import React from 'react'
import classes from './ProfileInfo.module.css'

const ProfileInfo = props => {
    return (
        <div>
            <div>
                <img src={'https://i.vimeocdn.com/video/703876203_1280x720.jpg'} alt={'landscape'} className={classes.userAvatar} />
            </div>
            <div className={classes.descriptionBlock}>
                ava + description
            </div>
        </div>
    )
}

export default ProfileInfo