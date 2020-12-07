import { connect } from "react-redux";
import { followAC, setUsersAC, unfollowAC } from "../../../../redux/findFriend-reduser";
import FindFrends from "./FindFriends";

let mapStateToProps = (state) => {
    return {
        users: state.FindFriendPage.users,
    }
}
let mapDispatchToProps = (dispatch) => {
    return {
        follow: (userID) => {
            dispatch(followAC(userID))
        },
        unfollow: (userID) => {
            dispatch(unfollowAC(userID))
        },
        setUsers: (users) => {
            dispatch(setUsersAC(users))
        },
    }
}

const FindFrendsContainer = connect(mapStateToProps, mapDispatchToProps)(FindFrends)
export default FindFrendsContainer