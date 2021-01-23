import {profileAPI, usersAPI} from "../api/api";

const ADD_POST = 'ADD-POST';

const SET_USER_PROFILE = 'samurai-network/profile/SET_USER_PROFILE'
const SET_USER_STATUS = 'samurai-network/profile/SET_USER_STATUS'
const DELETE_POST = 'samurai-network/profile/DELETE_POST'
const SAVE_PHOTO_SUCCESS = 'samurai-network/profile/SAVE_PHOTO_SUCCESS'

export const onAddPost = newPostBody => ({ type: ADD_POST, newPostBody })

export const deletePost = (postId) => ({type: DELETE_POST, postId})

export const setUserProfile = profile => ({type: SET_USER_PROFILE, profile})

export const savePhotoSuccess = photos => ({type: SAVE_PHOTO_SUCCESS, photos})

export const setUserStatus = status => ({type: SET_USER_STATUS, status})
export const getUserProfile = userId => async dispatch => {
            let response = await usersAPI.getProfile(userId)
                dispatch(setUserProfile(response.data))
}

export const getUserStatus = userId => async dispatch => {
    let response = await profileAPI.getStatus(userId)
        dispatch(setUserStatus(response.data))
}

export const updateStatus = status => async dispatch => {
    let response = await profileAPI.updateStatus(status)
            if (response.data.resultCode === 0) {
                dispatch(setUserStatus(status))
    }
}

export const savePhoto = file => async dispatch => {
    let response = await profileAPI.savePhoto(file)

    if (response.data.resultCode === 0) {
        dispatch(savePhotoSuccess(response.data.data.photos))
    }
}



let initialState = {
    posts: [ {postId: 1,
        message: 'Hello world!',
        // likesCount: 12
            } ],
    // newPostText: '',
    profile: null,
    status: ''
}

const profileReducer = (state = initialState, action) => {
    switch(action.type) {
        case ADD_POST: {
            let newPost = {
                id: 5,
                message: action.newPostBody,
                likesCount: 0
            };

            let stateCopy = {...state}
            stateCopy.posts = [...state.posts]
            stateCopy.posts.push(newPost)

            return stateCopy
        }

        case SET_USER_PROFILE: {
            return {...state, profile: action.profile}
        }

        case SET_USER_STATUS: {
            return {...state, status: action.status}
        }

        case DELETE_POST: {
            return {...state, posts: state.posts.filter(p => p.id !== action.postId)}
        }

        case SAVE_PHOTO_SUCCESS: {
            return {...state, profile: {...state.profile, photos: action.photos}}
        }

        default:
            return state
        }

}

export default profileReducer