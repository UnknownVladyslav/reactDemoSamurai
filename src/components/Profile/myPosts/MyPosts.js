import React from 'react'
import classes from './MyPosts.module.css'
import Post from "./Post/Post";
import MyPostReduxForm from "./MyPostForm/MyPostForm";


const MyPosts = props => {

    let postElements = props.posts
        .map(p => <Post message={p.message} likesCount={p.likesCount} profile={p.profile}/>)

    const addNewPost = values => {
        props.addPost(values.newPostBody)
    }

    return (

        <div className={classes.postsBlock}>
            <div className={classes.postTools}>
                <h3>My posts</h3>
                <MyPostReduxForm onSubmit={addNewPost} />
            </div>
            <hr/>
            <div className={classes.posts}>
                {props.posts.length === 0
                    ? <p>There are no posts yet.</p>
                    : <div>{postElements}</div>
                }
            </div>
        </div>
    )
}

export default MyPosts