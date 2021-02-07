import { createSelector } from "reselect"

//Типа сложный селектор
const getUsersFindFriendSelector = (state) => {
    return state.FindFriendPage.users
}
export const getUsersFindFriend = createSelector(getUsersFindFriendSelector, (users) => {
    return users.filter(users => true)
})
//Типа сложный селектор конец
export const pageSizeMyFriends = (state) => {
    return state.FindFriendPage.pageSizeMyFriends
}
export const getPageSize = (state) => {
    return state.FindFriendPage.pageSize
}
export const getTotalUserCount = (state) => {
    return state.FindFriendPage.totalUsersCount
}
export const getCurrentPage = (state) => {
    return state.FindFriendPage.currentPage
}
export const getFollowingIsProgress = (state) => {
    return state.FindFriendPage.followingIsProgress
}
export const getIsFetching = (state) => {
    return state.FindFriendPage.isFetching
}