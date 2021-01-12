import Class from "./DescriptionStatus.module.css"
import React from 'react';


class DesctiptionStatus extends React.Component {
    state = {
        editMode: false,
        status: this.props.status
    }
    activeteEditMode = () => {
        if (this.props.userID === this.props.AuthID) {
            this.setState({
                editMode: true
            })
        }
    }
    deactiveteEditMode = () => {
        this.setState({
            editMode: false
        })
        this.props.updateUserStatus(this.state.status)
    }
    onUserStatusChange = (e) => {
        this.setState({ status: e.currentTarget.value })
    }
    componentDidUpdate(prevProps, prevState) {
        if (prevProps.status !== this.props.status) {
            this.setState({
                status: this.props.status
            })
        }
    }
    render() {
        return (
            < div className={Class.descriptionStatus} >
                {!this.state.editMode &&
                    <div onDoubleClick={this.activeteEditMode}>
                        <span >
                            {this.props.status || "No Status"}
                        </span>
                    </div>
                }
                {this.state.editMode &&
                    <div onBlur={this.deactiveteEditMode}>
                        <input onChange={this.onUserStatusChange} autoFocus="true" value={this.state.status} />
                    </div>
                }
            </ div>
        )
    }
}
export default DesctiptionStatus