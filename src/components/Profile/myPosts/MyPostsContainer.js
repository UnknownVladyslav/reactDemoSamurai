// import React from 'react'
import {onAddPost, updateNewPostText, setUserProfile} from "../../../redux/profile-reducer";
import MyPosts from "./MyPosts";
import {connect} from "react-redux";
import {compose} from "redux";

let mapStateToProps = state => ({
    posts: state.profilePage.posts,
    newPostText: state.profilePage.newPostText
})

const MyPostsContainer = compose(
    connect(mapStateToProps,
        {onAddPost, updateNewPostText, setUserProfile}))
(MyPosts)

export default MyPostsContainer