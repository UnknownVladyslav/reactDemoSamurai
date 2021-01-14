import React, {useEffect, useState} from 'react'
import classes from './ProfileStatus.module.css'

const ProfileStatusWithHooks = props => {

    let [editMode, setEditMode] = useState(false)
    let [status, setStatus] = useState(props.status)


    useEffect(() => {
        setStatus(props.status)
        // console.log('USE EFFECT')
    }, [props.status] )

    const activateEditMode = () => {
        setEditMode(true)
    }

    const onStatusChange = e => {
        setStatus(e.currentTarget.value)
    }

    const deactivateEditMode = () => {
        setEditMode(false)
        props.updateStatus(status)
    }

    return (
        <div>
            {/*{console.log('rerender')}*/}
            {!editMode &&
            <div className={classes.inputWrapper}>
                {props.status ?
                    <span onClick={activateEditMode}>{props.status}</span>
                    :
                    <span onClick={activateEditMode}>There is no status yet</span>
                }
            </div>
            }

            {editMode &&
            <div className={classes.inputWrapper}>
                <input onChange={onStatusChange}
                       autoFocus={true}
                       onBlur={deactivateEditMode}
                       value={status}/>
            </div>
            }
        </div>
    )
}

export default ProfileStatusWithHooks