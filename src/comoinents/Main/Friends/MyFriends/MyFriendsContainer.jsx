import React from "react";
import { connect } from "react-redux";
import { confirmUnfollow, getUsersForMyFrend } from "../../../../redux/findFriend-reduser";

import { getIsFetching, getFollowingIsProgress, getUsersFindFriend } from "../../../../redux/findFriend-selectors";
import MyFriends from "./MyFriends";


class MyFriendsWrapper extends React.Component {
    componentDidMount() {
        this.props.getUsersForMyFrend(1, 100)
    }
    render() {
        return <>
            <MyFriends
                confirmUnfollow={this.props.confirmUnfollow}
                users={this.props.users}
                followingIsProgress={this.props.followingIsProgress}
                isFetching={this.props.isFetching}
            />
        </>
    }
}

let mapStateToProps = (state) => {
    return {
        users: getUsersFindFriend(state),
        followingIsProgress: getFollowingIsProgress(state),
        isFetching: getIsFetching(state),
    }
}

const MyFriendsContainer = connect(mapStateToProps, {
    confirmUnfollow,
    getUsersForMyFrend,
})(MyFriendsWrapper)

export default MyFriendsContainer