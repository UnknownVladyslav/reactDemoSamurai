import React from 'react'
import classes from './MyPosts.module.css'
import Post from "./Post/Post";


const MyPosts = props => {

    let postElements = props.posts
        .map(p => <Post message={p.message} likesCount={p.likesCount} profile={p.profile}/>)

    let addPost = text => {
        props.onAddPost()
    }

    let onPostChange = e => {
        let text = e.target.value
        props.updateNewPostText(text)
    }

    return (

        <div className={classes.postsBlock}>
            <div className={classes.postTools}>
                <h3>My posts</h3>
                <div className={classes.addPostForm}>
                    <textarea onChange={onPostChange} value={props.newPostText}/>
                    {props.newPostText.length > 0 ?
                        <button onClick={addPost}>Add post</button>
                        :
                        <button onClick={addPost} disabled={true} style={{backgroundColor: 'grey'}}>Add post</button>
                    }
                </div>
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