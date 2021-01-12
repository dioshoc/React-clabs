import React from 'react';
import Header from "./Header";
import { connect } from 'react-redux';
import { logout } from "./../../redux/auth-reduser";

class HeaderContainer extends React.Component {

    render() {
        return (
            <Header {...this.props} />
        )
    }
}

const mapStateToProps = (state) => ({
    isAuth: state.Auth.isAuth,
    login: state.Auth.login
})

export default connect(mapStateToProps, { logout })(HeaderContainer);
