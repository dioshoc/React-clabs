import { userAPI } from "../api/api"

const FOLLOW = 'FOLLOW'
const UNFOLLOW = 'UNFOLLOW'
const SET_USERS = 'SET-USERS'
const SET_CURRENT_PAGE = 'SET-CURRENT-PAGE'
const SET_TOTAL_USERS_COUNT = 'SET-TOTAL-USERS-COUNT'
const TOGGLE_IS_FETCHING = 'TOGGLE-IS-FETCHING'
const TOGGLE_IS_FOLLOWING_PROGRESS = 'TOGGLE-IS-FOLLOWING-PROGRESS'

let initialState = {
    users: [],
    pageSize: 5,
    totalUsersCount: 0,
    currentPage: 1,
    isFetching: false,
    followingIsProgress: []
}

const FindFriendsReducer = (state = initialState, action) => {
    switch (action.type) {
        case FOLLOW:
            return {
                ...state,
                users: state.users.map(u => {
                    if (u.id === action.userID) {
                        return { ...u, followed: true }
                    }
                    return u;
                })
            }
        case UNFOLLOW:
            return {
                ...state,
                users: state.users.map(u => {
                    if (u.id === action.userID) {
                        return { ...u, followed: false }
                    }
                    return u;
                })
            }
        case SET_USERS:
            return {
                ...state,
                users: [...action.users]
            }
        case SET_CURRENT_PAGE:
            return {
                ...state, currentPage: action.currentPage
            }
        case SET_TOTAL_USERS_COUNT:
            return {
                ...state, totalUsersCount: action.totalCount
            }
        case TOGGLE_IS_FETCHING:
            return {
                ...state, isFetching: action.isFetching
            }
        case TOGGLE_IS_FOLLOWING_PROGRESS:
            return {
                ...state,
                followingIsProgress: action.isFetching
                    ? [...state.followingIsProgress, action.userID]
                    : state.followingIsProgress.filter(id => id !== action.userID)
            }

        default:
            return state;
    }
}

export const follow = (userID) => ({ type: FOLLOW, userID })
export const unfollow = (userID) => ({ type: UNFOLLOW, userID })
export const setUsers = (users) => ({ type: SET_USERS, users })
export const setCurrentPage = (currentPage) => ({ type: SET_CURRENT_PAGE, currentPage })
export const setTotalUsersCount = (totalCount) => ({ type: SET_TOTAL_USERS_COUNT, totalCount })
export const toggleIsFetching = (isFetching) => ({ type: TOGGLE_IS_FETCHING, isFetching })
export const toggleIsFollowingProgress = (isFetching, userID) => ({ type: TOGGLE_IS_FOLLOWING_PROGRESS, isFetching, userID })

/* Thunk */
export const getUsers = (Page = 1, pageSize) => {
    return (dispatch) => {
        dispatch(toggleIsFetching(true))
        dispatch(setCurrentPage(Page))
        userAPI.getUsers(Page, pageSize).then(data => {
            dispatch(toggleIsFetching(false))
            dispatch(setUsers(data.items))
            dispatch(setTotalUsersCount(data.totalCount))
        })
    }
}

export const confirmFollow = (userID) => {
    return (dispatch) => {
        dispatch(toggleIsFollowingProgress(true, userID))
        userAPI.follow(userID).then(data => {
            if (data.resultCode === 0) {
                dispatch(follow(userID))
            }
            dispatch(toggleIsFollowingProgress(false, userID))
        })
    }
}

export const confirmUnfollow = (userID) => {
    return (dispatch) => {
        dispatch(toggleIsFollowingProgress(true, userID))
        userAPI.unfollow(userID).then(data => {
            if (data.resultCode === 0) {
                dispatch(unfollow(userID))
            }
            dispatch(toggleIsFollowingProgress(false, userID))
        })
    }
}
export default FindFriendsReducer


