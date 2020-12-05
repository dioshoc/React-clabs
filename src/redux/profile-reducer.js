const ADD_POST = 'ADD-POST'
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT'

let initialState = {
    PostData: [
        { id: 1, message: "Joy?" },
        { id: 2, message: "Tes?" },
        { id: 3, message: "Hey, why nobody love me?" }
    ],
    newPostText: ''
}

const profileReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_POST:
            let NewPost = {
                id: 4,
                message: state.newPostText,
            }
            return {
                ...state,
                PostData: [...state.PostData, NewPost],
                newPostText: ''
            }
        case UPDATE_NEW_POST_TEXT:
            return {
                ...state,
                newPostText: action.newText
            }
        default:
            return state;

    }
}
export const addPostActionCreator = () => ({ type: ADD_POST })
export const updateNewPostTextActionCreator = (text) => {
    return {
        type: UPDATE_NEW_POST_TEXT,
        newText: text
    }
}
export default profileReducer