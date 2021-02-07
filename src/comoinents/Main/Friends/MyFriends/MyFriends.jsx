import React from "react";
import Class from "./MyFriends.module.css";
import fishIMG from "./../../../../assets/img/fish.svg";
import Preloader from "../../../common/Preloader";
import { NavLink } from "react-router-dom";

function MyFriends({ users, followingIsProgress, confirmUnfollow, isFetching }) {
    let FriendUsers = users.filter(u => u.followed)
    let ListFindFriends = FriendUsers.map(u =>
        <div className={Class.container} key={u.id}>
            <div className={Class.preview}>
                <NavLink to={"/Profile/" + u.id}>
                    <img src={u.photos.small != null ? u.photos.small : fishIMG} alt="" />
                </NavLink>
                {u.followed
                    ? <button disabled={followingIsProgress.some(id => id === u.id)} onClick={() => {
                        confirmUnfollow(u.id)
                    }}>UnFollow</button>

                    : null
                }
            </div>
            <div className={Class.info}>
                <div className={Class.description}>
                    <div className={Class.name}>{u.name}</div>
                </div>
                <div className={Class.status}>{u.status}</div>
            </div>
        </div >
    )

    return (
        <div>
            {isFetching ? <Preloader /> : ListFindFriends}
        </div >
    )
}

export default MyFriends