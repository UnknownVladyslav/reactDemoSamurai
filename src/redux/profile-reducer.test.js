import profileReducer, {deletePost} from "./profile-reducer";


let state = {
    posts: [ {postId: 1, message: 'Hello world!'} ],
    profile: null,
    status: ''
}

it (`after deleting posts amount should decrease by 1`, () => {
    let action = deletePost(1)

    let newState = profileReducer(state, action)

    expect(newState.posts.length).toBe(0)
})