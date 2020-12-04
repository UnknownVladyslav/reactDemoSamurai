import React from 'react'
import classes from './Profile.module.css'
import ProfileInfo from "./ProfileInfo/ProfileInfo";
import MyPostsContainer from "./myPosts/MyPostsContainer";

const Profile = props => {

    return (
    <div className={classes.content}>
        <ProfileInfo />

        <MyPostsContainer store={props.store} />
    </div>
    )
}

export default Profile