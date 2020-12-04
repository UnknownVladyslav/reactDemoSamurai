import React from 'react'
import classes from './MyPosts.module.css'
import Post from "./Post/Post";


const MyPosts = props => {

    let postElements = props.posts
        .map ( p => <Post message={p.message} likesCount={p.likesCount} /> )

    let newPostElement = React.createRef()


    let addPost = () => {
        props.onAddPost()
    }

    let onPostChange = () => {
        let text = newPostElement.current.value
            props.updateNewPostText(text)
    }

    return (
        <div className={classes.postsBlock}>
            <h3>My posts</h3>
            <div>
                <div>
                    <textarea onChange={onPostChange} ref={newPostElement} value={props.newPostText}/>
                </div>
                <button onClick={ addPost }>Add post</button>
            </div>
            <div className={classes.posts}>
                { postElements }
            </div>
        </div>
    )
}

export default MyPosts