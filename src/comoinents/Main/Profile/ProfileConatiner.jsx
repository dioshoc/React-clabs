import React from 'react';
import Profile from './Profile';
import * as axios from "axios";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import { setUserProfile } from "./../../../redux/profile-reducer";


class ProfileConatiner extends React.Component {

    componentDidMount() {
        let userID = this.props.match.params.userID
        if (!userID) {
            userID = 2
        }
        axios.get(`https://social-network.samuraijs.com/api/1.0/profile/` + userID).then(response => {
            this.props.setUserProfile(response.data)
        })
    }

    render() {
        return (
            <Profile {...this.props} profile={this.props.profile} />
        );
    }
}

let mapStateToPorps = (state) => ({
    profile: state.ProfilePage.profile
})

let withURLDataContainerCompontnt = withRouter(ProfileConatiner)

export default connect(mapStateToPorps, {
    setUserProfile
})(withURLDataContainerCompontnt);
