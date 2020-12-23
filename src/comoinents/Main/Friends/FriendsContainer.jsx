import { connect } from "react-redux";
import { compose } from "redux";
import { withAuthRedirect } from "../../../HOC/withAuthRedirect";
import Friends from "./Friends";

let mapStateToProps = (state) => {
    return {

    }
}

export default compose(
    connect(mapStateToProps,),
    withAuthRedirect
)(Friends)