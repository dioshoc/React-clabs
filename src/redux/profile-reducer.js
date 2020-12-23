import { profileAPI, userAPI } from "../api/api"

const ADD_POST = 'ADD-POST'
const SET_USER_PROFILE = 'SET_USER_PROFILE'
const SET_STATUS = 'SET_STATUS'

let initialState = {
    PostData: [
        { id: 1, message: "Joy?" },
        { id: 2, message: "Tes?" },
        { id: 3, message: "Hey, why nobody love me?" }
    ],
    profile: null,
    status: "",
}

const profileReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_POST:
            let NewPost = {
                id: 4,
                message: action.NewPostText,
            }
            return {
                ...state,
                PostData: [...state.PostData, NewPost],
            }
        case SET_USER_PROFILE:
            return {
                ...state,
                profile: action.profile
            }
        case SET_STATUS:
            return {
                ...state,
                status: action.status
            }
        default:
            return state;

    }
}
export const addPost = (NewPostText) => ({ type: ADD_POST, NewPostText })
export const setUserProfile = (profile) => ({ type: SET_USER_PROFILE, profile })
export const setStatus = (status) => ({ type: SET_STATUS, status })

export const getUserID = (userID) => {
    return (dispatch) => {
        userAPI.getProfile(userID).then(data => {
            dispatch(setUserProfile(data))
        })
    }
}

export const getUserStatus = (userID) => (dispatch) => {
    profileAPI.getStatus(userID).then(response => {
        dispatch(setStatus(response.data))
    })
}

export const updateUserStatus = (status) => (dispatch) => {
    profileAPI.updateStatus(status).then(response => {

        if (response.data.resultCode === 0) {
            dispatch(setStatus(status))
        }
    })
}

export default profileReducer