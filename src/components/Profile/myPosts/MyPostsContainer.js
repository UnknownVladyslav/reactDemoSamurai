// import React from 'react'
import {onAddPost} from "../../../redux/profile-reducer";
import MyPosts from "./MyPosts";
import {connect} from "react-redux";
import {compose} from "redux";

let mapStateToProps = (state) => ({
    posts: state.profilePage.posts,
    authorizedUserId: state.auth.userId
    // userId: state.profile.userId,
    // profile: props.profile
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