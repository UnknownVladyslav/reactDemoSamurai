import React from 'react'
import classes from './Profile.module.css'
import ProfileInfo from "./ProfileInfo/ProfileInfo";
import MyPostsContainer from "./myPosts/MyPostsContainer";

const Profile = ({profile, status, updateStatus, userId, authorizedUserId, isOwner, savePhoto}) => {
    return (
        <div className={classes.content}>
            <ProfileInfo profile={profile}
                         status={status}
                         updateStatus={updateStatus}
                         userId={userId}
                         authorizedUserId={authorizedUserId}
                         isOwner={isOwner}
                         savePhoto={savePhoto}
            />

            <MyPostsContainer
                // posts={posts}
                // authorizedUserId={authorizedUserId}
                // userId={userId}
            />
        </div>
    )
}


export default Profile