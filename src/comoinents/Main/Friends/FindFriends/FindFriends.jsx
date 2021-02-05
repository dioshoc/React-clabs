import React from "react";
import Class from "./FindFriends.module.css";
import fishIMG from "./../../../../assets/img/fish.svg";
import Preloader from "../../../common/Preloader";
import { NavLink } from "react-router-dom";
import Paginator from "../../../common/paginator/paginator";

function FindFriends({ pageSize, totalItemCount, onPageChanged, currentPage, users, followingIsProgress, confirmFollow, confirmUnfollow, isFetching }) {
    let ListFindFriends = users.map(u =>
        <div className={Class.container} key={u.id}>
            <div className={Class.preview}>
                <NavLink to={"/Profile/" + u.id}>
                    <img src={u.photos.small != null ? u.photos.small : fishIMG} alt="" />
                </NavLink>
                {u.followed
                    ? <button disabled={followingIsProgress.some(id => id === u.id)} onClick={() => {
                        confirmUnfollow(u.id)
                    }}>UnFollow</button>

                    : <button disabled={followingIsProgress.some(id => id === u.id)} onClick={() => {
                        confirmFollow(u.id)
                    }}>Follow</button>
                }
            </div>
            <div className={Class.info}>
                <div className={Class.description}>
                    <div className={Class.name}>{u.name}</div>
                </div>
                <div className={Class.status}>{u.status}</div>
            </div>
        </div >)

    return (
        <div>
            <Paginator totalItemCount={totalItemCount}
                pageSize={pageSize}
                onPageChanged={onPageChanged}
                currentPage={currentPage} />
            {isFetching ? <Preloader /> : ListFindFriends}
        </div >
    )
}

export default FindFriends