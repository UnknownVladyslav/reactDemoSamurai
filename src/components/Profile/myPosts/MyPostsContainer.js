// import React from 'react'
import {onAddPost, updateNewPostText, setUserProfile} from "../../../redux/profile-reducer";
import MyPosts from "./MyPosts";
import {connect} from "react-redux";

let mapStateToProps = state => ({
        posts: state.profilePage.posts,
        newPostText: state.profilePage.newPostText,
        profile: state.profilePage.profile
})

const MyPostsContainer = connect(mapStateToProps, {onAddPost, updateNewPostText, setUserProfile}) (MyPosts)

export default MyPostsContainer