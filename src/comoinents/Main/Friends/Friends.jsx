import { NavLink } from "react-router-dom";
import Class from "./Friends.module.css";


function Friends() {
    return (
        <>
            <div className={Class.header}>
                <NavLink to="/Friends/MyFriends" activeClassName={Class.active} className={Class.item}>My Friends</NavLink>
                <NavLink to="/Friends/FindFriends" activeClassName={Class.active} className={Class.item}>Find Friends</NavLink>
            </div>
        </>
    );
}


export default Friends