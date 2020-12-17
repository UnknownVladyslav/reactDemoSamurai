import React from 'react'
import classes from './ProfileInfo.module.css'
import Loader from "../../../assets/Loader/Loader";
import userAvatar from '../../../assets/images/avatar-batman-small.png'

const ProfileInfo = props => {

    if (!props.profile) {
        return <Loader/>
    }

    return (
        <div className={classes.profilePage}>
            <div className={classes.userPageHeader}>
                { props.profile.photos.large
                   ? <img src={props.profile.photos.large} className={classes.userAvatar} alt={'Аватар пользователя'}/>
                   : <img src={userAvatar} className={classes.userAvatar} alt={'Аватар пользователя'} />
                }
                <div className={classes.nameAndStatus}>
                    <strong className={classes.userName}>{props.profile.fullName}</strong>
                    <p>{props.profile.aboutMe}</p>
                </div>
            </div>

            <div className={classes.descriptionBlock}>
                {
                    props.profile.lookingForAJob
                        ? <div>
                        <strong>User is looking for a job!</strong>
                            <div>
                                <p>Description: <br/> {props.profile.lookingForAJobDescription}</p>
                            </div>
                        </div>
                        : <strong>User is not looking for a job!</strong>
                }
            </div>
        </div>
    )
}

export default ProfileInfo