import React, {useState} from 'react'
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faThumbsUp} from "@fortawesome/free-solid-svg-icons";
import smallAvatar from '../../../../assets/images/avatar-batman-small.png'
import classes from './Post.module.css'

const Post = ({avatar, message}) => {

    const [like, setLikes] = useState(0)

    const likeIncrement = () => {
        setLikes(like + 1)
    }

    return (
        <>
            <div className={classes.item}>
                <img alt={'avatar'} className={classes.postAvatar}
                     src={avatar || smallAvatar}/>

                <div className={classes.messageBody}>{message}</div>
            </div>
            <div className={classes.likesCount}>
                <button className={classes.likesCount} onClick={likeIncrement}><FontAwesomeIcon icon={faThumbsUp}
                                                                                                className={classes.likeIcon}/>{like}
                </button>
            </div>
            <hr/>
        </>
    )
}

export default Post