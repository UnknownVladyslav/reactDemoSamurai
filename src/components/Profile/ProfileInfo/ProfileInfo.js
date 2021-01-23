import React, {useState} from 'react'
import Loader from "../../common/Loader/Loader";
import userAvatar from '../../../assets/images/avatar-batman-small.png'
import ProfileStatusWithHooks from "../ProfileStatus/ProfileStatusWithHooks";
import classes from './ProfileInfo.module.css'

const ProfileInfo = ({profile, ...props}) => {

    const [changeAvatarMode, setChangeAvatarMode] = useState(false)

    function onToggleChangeAvatarMode() {
        !changeAvatarMode ?
            setChangeAvatarMode(true)
            :
            setChangeAvatarMode(false)
    }

    if (!profile) {
        return <Loader/>
    }

    const onMainPhotoSelected = e => {
        if (e.target.files.length) {
            props.savePhoto(e.target.files[0])
        }
    }

    const wrapperRef = React.createRef

    // function onButtonAnimationHandler() {
    //     const wrapper = wrapperRef.current
    //     wrapper.classList.toggle('isButtonActive')
    // }

    return (
        <div className={classes.profilePage}>
            <div className={classes.userPageHeader}>
                <img src={profile.photos.large || userAvatar} className={classes.userAvatar}
                     alt={'Аватар пользователя'} onClick={onToggleChangeAvatarMode}/>
                <div className={classes.nameAndStatus}>
                    <strong className={classes.userName}>{profile.fullName}</strong>
                    <ProfileStatusWithHooks status={props.status}
                                            updateStatus={props.updateStatus}
                                            userId={props.userId}
                                            profile={profile}
                                            authorizedUserId={props.authorizedUserId}/>
                </div>
            </div>
            {!changeAvatarMode ||
                <div ref={wrapperRef} className={classes.wrapper}>
                <div className={classes.photoInput}>
                    {props.isOwner && <label htmlFor={'file'}> Choose a file
                        <input type={'file'} onChange={onMainPhotoSelected} name={'file'} id={'file'}
                               className={classes.inputFile}/>
                    </label>
                    }
                </div>
                </div>
            }

            <div className={classes.descriptionBlock}>
                {
                    profile.lookingForAJob
                        ? <div>
                            <strong>User is looking for a job!</strong>
                            <div>
                                <p>Description: <br/> {profile.lookingForAJobDescription}</p>
                            </div>
                        </div>
                        : <strong>User is not looking for a job!</strong>
                }
                <div className={classes.aboutMe}>
                    {<b>{profile.aboutMe}</b> || <b>About Me</b>}
                </div>
            </div>
        </div>
    )
}

export default ProfileInfo