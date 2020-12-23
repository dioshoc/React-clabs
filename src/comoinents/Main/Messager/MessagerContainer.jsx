import Messager from "./Messager";
import { addMessage } from '../../../redux/messager-reducer'
import { connect } from 'react-redux'
import { withAuthRedirect } from "../../../HOC/withAuthRedirect";
import { compose } from "redux";

let mapStateToProps = (state) => {
    return {
        UserData: state.MessagerPage.UserData,
        MessageData: state.MessagerPage.MessageData,
        newMessageText: state.MessagerPage.newMessageText,
    }
}

let mapDispatchToProps = (dispatch) => {
    return {
        addMessage: (newMessageBody) => {
            dispatch(addMessage(newMessageBody))
        },
    }
}

export default compose(
    connect(mapStateToProps, mapDispatchToProps),
    withAuthRedirect,
)(Messager);

