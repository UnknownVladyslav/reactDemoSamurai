import {getAuthUserData} from "./auth-reducer";

const INITIALIZING_SUCCESS = 'INITIALIZING_SUCCESS'

let initialState = {
    initialized: false
}

const appReducer = (state = initialState, action) => {
    switch (action.type) {
        case INITIALIZING_SUCCESS:
            return {
                ...state,
                initialized: true
            }
        default:
            return state
    }
}

export const initializingSuccess = () => ({type: INITIALIZING_SUCCESS})

export const initializeApp = () => dispatch => {
    let promise = dispatch(getAuthUserData())

    //ожидаем возврата всех промисов после диспатча (в данном случае - 1)
    Promise.all([promise])
        .then(() => {
    dispatch(initializingSuccess())
    })
}


export default appReducer