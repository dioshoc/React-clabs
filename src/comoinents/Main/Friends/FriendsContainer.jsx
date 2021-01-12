import { connect } from "react-redux";
import { compose } from "redux";
import { withAuthRedirect } from "../../../HOC/withAuthRedirect";
import Friends from "./Friends";

let mapStateToProps = (state) => {
    return {
        frends: state.FindFriendPage.user,
    }
}

export default compose(
    connect(mapStateToProps,),
    withAuthRedirect
)(Friends)