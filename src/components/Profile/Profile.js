import React from 'react'
import classes from './Profile.module.css'
import ProfileInfo from "./ProfileInfo/ProfileInfo";
import MyPostsContainer from "./myPosts/MyPostsContainer";

const Profile = ({profile, status, updateStatus}) => {
    return (
    <div className={classes.content}>
        <ProfileInfo profile={profile} status={status} updateStatus={updateStatus}/>

        <MyPostsContainer profile={profile} />
    </div>
    )
}


export default Profile