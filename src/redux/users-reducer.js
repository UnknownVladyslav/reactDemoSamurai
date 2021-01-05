import React from 'react'
import {act} from "@testing-library/react";
import {usersAPI} from "../api/api";
// import { Users_API } from "../api/api";

const FOLLOW = 'FOLLOW'
const UNFOLLOW = 'UNFOLLOW'
const SET_USERS = 'SET_USERS'
const SET_CURRENT_PAGE = 'SET_CURRENT_PAGE'
const SET_TOTAL_USERS_COUNT = 'SET_TOTAL_USERS_COUNT'
const TOGGLE_LOADING = 'TOGGLE_LOADING'
const TOGGLE_IS_FETCHING = 'TOGGLE_IS_FETCHING'
const TOGGLE_IS_FOLLOWING_PROGRESS = 'TOGGLE_IS_FOLLOWING_PROGRESS'


let initialState = {
    users: [],
    pageSize: 20,
    totalUsersCount: 0,
    currentPage: 1,
    loading: false,
    followingInProgress: []
}

const usersReducer = (state = initialState, action) => {
    switch (action.type) {
        case FOLLOW:
            return {
                ...state,
                // users: [...state.users]
                users: state.users.map(u => {
                    if (u.id === action.userID) {
                        return {...u, followed: true}
                    }
                    return u
                })
            }

        case UNFOLLOW:
            return {
                ...state,
                // users: [...state.users]
                users: state.users.map(u => {
                    if (u.id === action.userID) {
                        return {...u, followed: false}
                    }
                    return u
                })
            }

        case SET_USERS: {
            return {...state, users: action.users}
        }

        case SET_CURRENT_PAGE: {
            return {...state, currentPage: action.currentPage}
        }

        case SET_TOTAL_USERS_COUNT: {
            return {...state, totalUsersCount: action.count}
        }

        case TOGGLE_LOADING: {
            return {
                ...state,
                loading: action.loading
            }
        }

        case TOGGLE_IS_FOLLOWING_PROGRESS: {
            return {
                ...state,
                followingInProgress: action.loading
                    ? [...state.followingInProgress, action.userId]
                    : state.followingInProgress.filter(id => id !== action.userId)
            }
        }

        default:
            return state
    }
}

export const followSuccess = (userID) => ({type: FOLLOW, userID})
export const unfollowSuccess = (userID) => ({type: UNFOLLOW, userID})
export const setUsers = users => ({type: SET_USERS, users})
export const setCurrentPage = currentPage => ({type: SET_CURRENT_PAGE, currentPage})
export const setTotalUsersCount = (totalUsersCount) => ({type: SET_TOTAL_USERS_COUNT, count: totalUsersCount});
export const setIsFetching = (isFetching) => ({type: TOGGLE_IS_FETCHING, isFetching})
export const setUsersTotalCount = totalUsersCount => ({type: SET_TOTAL_USERS_COUNT, count: totalUsersCount})
export const toggleLoading = loading => ({type: TOGGLE_LOADING, loading})
export const toggleFollowingProgress = (loading, userId) => ({type: TOGGLE_IS_FOLLOWING_PROGRESS, loading, userId})


export const getUsersThunkCreator = (currentPage, pageSize) => {
    return dispatch => {
        dispatch(toggleLoading(true))
        usersAPI.getUsers(currentPage, pageSize)
            .then(data => {
                dispatch(toggleLoading(false))
                dispatch(setUsers(data.items))
                dispatch(setUsersTotalCount(data.totalCount))
            })
    }
}

export const follow = (userId) => {

    return dispatch => {
        dispatch(toggleFollowingProgress(true, userId))
        usersAPI.follow(userId)
            .then(response => {
                if (response.data.resultCode === 0) {
                    dispatch(followSuccess(userId))
                }
                dispatch(toggleFollowingProgress(false, userId))
            })
    }
}


export const unfollow = (userId) => {

    return dispatch => {
        dispatch(toggleFollowingProgress(true, userId))
        usersAPI.unfollow(userId)
            .then(response => {
                if (response.data.resultCode === 0) {
                    dispatch(unfollowSuccess(userId))
                }
                dispatch(toggleFollowingProgress(false, userId))
            })
    }
}


// export const requestUsers = (page, pageSize) => {
//
//     return async (dispatch) => {
//
//         dispatch(setIsFetching(true));
//         dispatch(setCurrentPage(page));
//
//         let data = await Users_API.getUsers(page, pageSize)
//         dispatch(setIsFetching(false));
//         dispatch(setUsers(data.items));
//         dispatch(setTotalUsersCount(data.totalCount));
//
//     }
// }

export default usersReducer