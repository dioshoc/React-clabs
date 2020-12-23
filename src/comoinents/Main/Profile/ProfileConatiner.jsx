import React from 'react';
import Profile from './Profile';
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import { setUserProfile, getUserID, getUserStatus, updateUserStatus } from "./../../../redux/profile-reducer";
import { setAuthUserData, authMe } from "./../../../redux/auth-reduser";
import { withAuthRedirect } from "../../../HOC/withAuthRedirect";
import { compose } from 'redux';


class ProfileConatiner extends React.Component {

    componentDidMount() {
        let userID = this.props.match.params.userID
        if (!userID) {
            userID = this.props.Auth.id
        }
        this.props.getUserID(userID)
        this.props.authMe()
        this.props.getUserStatus(userID)
    }

    render() {
        if (this.props.Auth.isAuth) {
            return (
                <Profile {...this.props}
                    profile={this.props.profile}
                    status={this.props.status}
                    updateUserStatus={this.props.updateUserStatus} />
            );
        }
    }
}

let mapStateToPorps = (state) => ({
    profile: state.ProfilePage.profile,
    status: state.ProfilePage.status,
    Auth: state.Auth,
})

export default compose(
    connect(mapStateToPorps, {
        setUserProfile,
        setAuthUserData,
        authMe,
        getUserID,
        withAuthRedirect,
        getUserStatus,
        updateUserStatus
    }),
    withRouter,
    withAuthRedirect,
)(ProfileConatiner)

