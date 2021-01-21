// import React from 'react'
import {onAddPost} from "../../../redux/profile-reducer";
import MyPosts from "./MyPosts";
import {connect} from "react-redux";
import {compose} from "redux";
import {useEffect} from "react/cjs/react.production.min";

// let userId = this.props.match.params.userId
// useEffect( () =>
// this.props.getUserProfile(userId),
//     [])

let mapStateToProps = state => ({
    posts: state.profilePage.posts,
    // userId: state.profilePage.profile.userId,
    authorizedUserId: state.auth.userId
})

let mapDispatchToProps = dispatch => {
    return {
        addPost: (newPostBody) => {
            dispatch(onAddPost(newPostBody))
        }
    }
}

const MyPostsContainer = compose(
    connect(mapStateToProps,
        mapDispatchToProps))
(MyPosts)

export default MyPostsContainer