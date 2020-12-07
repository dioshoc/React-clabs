import { NavLink } from "react-router-dom";
import Class from "./Friends.module.css";

function Friends(props) {
    return (
        <NavLink to="/FindFriends" activeClassName={Class.active} >Find Frends</NavLink>
    );
}

export default Friends