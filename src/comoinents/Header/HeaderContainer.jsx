import React from 'react';
import Header from "./Header";
import { connect } from 'react-redux';
import { authMe, logout } from "./../../redux/auth-reduser";

class HeaderContainer extends React.Component {
    componentDidMount() {
        this.props.authMe()
    }
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

export default connect(mapStateToProps, { authMe, logout })(HeaderContainer);
