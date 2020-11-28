import React from 'react'
import classes from './MyPosts.module.css'
import Post from "./Post/Post";

const MyPosts = props => {

//     let posts = [
//     {id: 1, message: 'Hi how are you?', likesCount: 12},
//     {id: 2, message: 'How are u', likesCount: 1},
//     {id: 3, message: 'hey bro whats up', likesCount: 0},
//     {id: 4, message: 'no.', likesCount: 24},
//     {id: 5, message: 'fuck tou asshole', likesCount: 17},
//     {id: 6, message: 'Valera', likesCount: 3}
// ]


    let postElements = props.posts.map ( p => <Post message={p.message} likesCount={p.likesCount} /> )

    return (
        <div className={classes.postsBlock}>
            <h3>My posts</h3>
            <div>
                <div>
                    <textarea></textarea>
                </div>
                <button>Add post</button>
            </div>
            <div className={classes.posts}>
                { postElements }
            </div>
        </div>
    )
}

export default MyPosts