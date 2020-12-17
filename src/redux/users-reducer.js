import React from 'react'
import { Users_API } from "../api/api";

const FOLLOW = 'FOLLOW'
const UNFOLLOW = 'UNFOLLOW'
const SET_USERS = 'SET_USERS'
const SET_CURRENT_PAGE = 'SET_CURRENT_PAGE'
const SET_TOTAL_USERS_COUNT = 'SET_TOTAL_USERS_COUNT'
const TOGGLE_LOADING = 'TOGGLE_LOADING'
const TOGGLE_IS_FETCHING = 'TOGGLE_IS_FETCHING'


let initialState = {
    users: [],
    pageSize: 20,
    totalUsersCount: 0,
    currentPage: 1,
    loading: false
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

        default:
            return state
    }
}

export const follow = (userID) => ({type: FOLLOW, userID})
export const unfollow = (userID) => ({type: UNFOLLOW, userID})
export const setUsers = users => ({type: SET_USERS, users})
export const setCurrentPage = currentPage => ({type: SET_CURRENT_PAGE, currentPage})
export const setTotalUsersCount = (totalUsersCount) => ({ type: SET_TOTAL_USERS_COUNT, count: totalUsersCount });
export const setIsFetching = (isFetching) => ({ type: TOGGLE_IS_FETCHING, isFetching })
export const setUsersTotalCount = totalUsersCount => ({type: SET_TOTAL_USERS_COUNT, count: totalUsersCount})
export const toggleLoading = loading => ({type: TOGGLE_LOADING, loading})

export const requestUsers = (page, pageSize) => {

    return async (dispatch) => {

        dispatch(setIsFetching(true));
        dispatch(setCurrentPage(page));

        let data = await Users_API.getUsers(page, pageSize)
        dispatch(setIsFetching(false));
        dispatch(setUsers(data.items));
        dispatch(setTotalUsersCount(data.totalCount));

    }
}

export default usersReducer