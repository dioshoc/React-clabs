import React from 'react';
import Profile from './Profile';
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import { setUserProfile, getUserID, getUserStatus } from "./../../../redux/profile-reducer";
import { setAuthUserData } from "./../../../redux/auth-reduser";
import { withAuthRedirect } from "../../../HOC/withAuthRedirect";
import { compose } from 'redux';


class ProfileConatiner extends React.Component {
    componentDidMount() {
        let userID = this.props.match.params.userID
        if (!userID) {
            userID = this.props.Auth.id
            if (!userID) {
                this.props.history.push("/login")
            }
        }
        this.props.getUserID(userID)
        this.props.getUserStatus(userID)
    }

    render() {
        return (
            <Profile {...this.props}
                profile={this.props.profile}
            />
        );
    }
}

let mapStateToPorps = (state) => ({
    profile: state.ProfilePage.profile,
    Auth: state.Auth,
})

export default compose(
    connect(mapStateToPorps, {
        setUserProfile,
        setAuthUserData,
        getUserID,
        withAuthRedirect,
        getUserStatus,
    }),
    withRouter,
    //withAuthRedirect,
)(ProfileConatiner)

