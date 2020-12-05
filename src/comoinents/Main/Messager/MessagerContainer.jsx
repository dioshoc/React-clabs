import Messager from "./Messager";
import { updateNewMessageTextActionCreator, addMessageActionCreator } from '../../../redux/messager-reducer'
import { connect } from 'react-redux'

let mapStateToProps = (state) => {
    return {
        UserData: state.MessagerPage.UserData,
        MessageData: state.MessagerPage.MessageData,
        newMessageText: state.MessagerPage.newMessageText
    }
}
let mapDispatchToProps = (dispatch) => {
    return {
        sendMessage: () => {
            dispatch(addMessageActionCreator())
        },
        updateNewMessageText: (text) => {
            dispatch(updateNewMessageTextActionCreator(text));
        },
    }
}

const MessagerContainer = connect(mapStateToProps, mapDispatchToProps)(Messager);

export default MessagerContainer