import React from "react";
import { connect } from "react-redux";
import { confirmFollow, confirmUnfollow, setCurrentPage, getUsers, toggleIsFollowingProgress, } from "../../../../redux/findFriend-reduser";
import FindFriends from "./FindFriends";

import { getIsFetching, getCurrentPage, getFollowingIsProgress, getPageSize, getTotalUserCount, getUsersFindFriend } from "../../../../redux/findFriend-selectors";


class FindFriendsContainer extends React.Component {
    componentDidMount() {
        this.props.getUsers(this.props.pageNumber, this.props.pageSize)
    }

    onPageChanged = (pageNumber) => {
        this.props.getUsers(pageNumber, this.props.pageSize)
    }

    render() {
        return <>
            <FindFriends
                totalUsersCount={this.props.totalUsersCount}
                pageSize={this.props.pageSize}
                onPageChanged={this.onPageChanged}
                currentPage={this.props.currentPage}
                confirmUnfollow={this.props.confirmUnfollow}
                confirmFollow={this.props.confirmFollow}
                users={this.props.users}
                toggleIsFollowingProgress={this.props.toggleIsFollowingProgress}
                followingIsProgress={this.props.followingIsProgress}
                isFetching={this.props.isFetching}
            />
        </>
    }
}

/* let mapStateToProps = (state) => {
    return {
        users: state.FindFriendPage.users,
        pageSize: state.FindFriendPage.pageSize,
        totalUsersCount: state.FindFriendPage.totalUsersCount,
        currentPage: state.FindFriendPage.currentPage,
        followingIsProgress: state.FindFriendPage.followingIsProgress,
    }
}
 */
let mapStateToProps = (state) => {
    return {
        users: getUsersFindFriend(state),
        pageSize: getPageSize(state),
        totalUsersCount: getTotalUserCount(state),
        currentPage: getCurrentPage(state),
        followingIsProgress: getFollowingIsProgress(state),
        isFetching: getIsFetching(state),
    }
}

const FindFrendsContainer = connect(mapStateToProps, {
    confirmFollow,
    confirmUnfollow,
    setCurrentPage,
    getUsers,
    toggleIsFollowingProgress,

})(FindFriendsContainer)

export default FindFrendsContainer