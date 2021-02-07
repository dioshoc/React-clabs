import { connect } from "react-redux";
import { compose } from "redux";
import { withAuthRedirect } from "../../../HOC/withAuthRedirect";
import Friends from "./Friends";


export default compose(
    connect(""),
    withAuthRedirect
)(Friends)