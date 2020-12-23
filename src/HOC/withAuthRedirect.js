import React from 'react'
import { connect } from 'react-redux'
import { Redirect } from "react-router-dom"

let mapStateToPropsForRedirect = (state) => {
    return {
        isAuth: state.Auth.isAuth
    }
}
export const withAuthRedirect = (Components) => {
    class RedirectComponent extends React.Component {
        render() {
            if (!this.props.isAuth) return <Redirect to="/Login" />

            return <Components {...this.props} />
        }
    }

    let ConnectedAuthRedirectComponent = connect(mapStateToPropsForRedirect)(RedirectComponent)
    return ConnectedAuthRedirectComponent
}