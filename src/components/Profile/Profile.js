import React from 'react'
import classes from './Profile.module.css'
import ProfileInfo from "./ProfileInfo/ProfileInfo";
import MyPostsContainer from "./myPosts/MyPostsContainer";

const Profile = ({profile, status, updateStatus, userId, authorizedUserId}) => {
    return (
    <div className={classes.content}>
        <ProfileInfo profile={profile}
                     status={status}
                     updateStatus={updateStatus}
                     userId={userId}
                     authorizedUserId={authorizedUserId}
        />

        <MyPostsContainer profile={profile} authorizedUserId={authorizedUserId} />
    </div>
    )
}


export default Profile