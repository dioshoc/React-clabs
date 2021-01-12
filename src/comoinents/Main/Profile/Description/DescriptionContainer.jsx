import { connect } from 'react-redux';
import { updateUserStatus, } from "./../../../../redux/profile-reducer";

import Description from "./Description";

let mapStateToProps = (state, props) => {
    return {
        status: state.ProfilePage.status,
        AuthID: state.Auth.id,
        profile: props.profile,
    }
}

export default connect(mapStateToProps, { updateUserStatus })(Description)