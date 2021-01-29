import React from "react";
import Class from "./FindFriends.module.css";
import fishIMG from "./../../../../assets/img/fish.svg";
import Preloader from "../../../common/Preloader";
import { NavLink } from "react-router-dom";

function FindFriends(props) {
    let ListFindFriends = props.users.map(u =>
        <div className={Class.container}>
            <div className={Class.preview}>
                <NavLink to={"/Profile/" + u.id}>
                    <img src={u.photos.small != null ? u.photos.small : fishIMG} alt="" />
                </NavLink>
                {u.followed
                    ? <button disabled={props.followingIsProgress.some(id => id === u.id)} onClick={() => {
                        props.confirmUnfollow(u.id)
                    }}>UnFollow</button>

                    : <button disabled={props.followingIsProgress.some(id => id === u.id)} onClick={() => {
                        props.confirmFollow(u.id)
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


    let pagesCount = Math.ceil(props.totalUsersCount / props.pageSize);
    let pages = [];
    /*Начинается с "i = 1" что бы загружать пользователей с первой старницы*/
    for (let i = 1; i <= pagesCount; i++) {
        pages.push(i)
    }
    return (
        <div>
            <div className={Class.pages}>
                {pages.map(p => {
                    return (
                        <span className={props.currentPage === p && Class.selectPage}
                            onClick={() => { props.onPageChanged(p) }}>{p}</span>
                    )
                })}
            </div>
            {props.isFetching ? <Preloader /> : ListFindFriends}

        </div >
    )
}

export default FindFriends