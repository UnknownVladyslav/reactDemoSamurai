import {profileAPI, usersAPI} from "../api/api";

const ADD_POST = 'ADD-POST';

const SET_USER_PROFILE = 'SET_USER_PROFILE'
const SET_USER_STATUS = 'SET_USER_STATUS'

export const onAddPost = newPostBody => ({ type: ADD_POST, newPostBody })

export const setUserProfile = profile => ({type: SET_USER_PROFILE, profile})

export const setUserStatus = status => ({type: SET_USER_STATUS, status})
export const getUserProfile = userId => dispatch => {
            usersAPI.getProfile(userId)
            .then(response => {
                dispatch(setUserProfile(response.data))
            })
}

export const getUserStatus = userId => dispatch => {
    profileAPI.getStatus(userId)
        .then( response => {
        dispatch(setUserStatus(response.data))
    })
}

export const updateStatus = status => dispatch => {
    profileAPI.updateStatus(status)
        .then( response => {
            if (response.data.resultCode === 0) {
                dispatch(setUserStatus(status))
            }
    })
}


let initialState = {
    posts: [],
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

        default:
            return state
        }

}

export default profileReducer