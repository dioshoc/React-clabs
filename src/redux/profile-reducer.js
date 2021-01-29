import { profileAPI, userAPI } from "../api/api"

const ADD_POST = 'ADD-POST'
const SET_USER_PROFILE = 'SET_USER_PROFILE'
const SET_STATUS = 'SET_STATUS'
const DELETE_POST = 'DELETE_POST'

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
        case DELETE_POST:
            return {
                ...state,
                PostData: state.PostData.filter(p => p.id !== action.postID),
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
export const deletePost = (postID) => ({ type: DELETE_POST, postID })
export const setUserProfile = (profile) => ({ type: SET_USER_PROFILE, profile })
export const setStatus = (status) => ({ type: SET_STATUS, status })

export const getUserID = (userID) => async (dispatch) => {
    const data = await userAPI.getProfile(userID)
    dispatch(setUserProfile(data))
}

export const getUserStatus = (userID) => async (dispatch) => {
    const data = await profileAPI.getStatus(userID)
    dispatch(setStatus(data))
}

export const updateUserStatus = (status) => async (dispatch) => {
    let data = await profileAPI.updateStatus(status)
    if (data.resultCode === 0) {
        dispatch(setStatus(status))
    }
}

export default profileReducer