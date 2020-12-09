import React from "react";
import Class from "./FindFriends.module.css";
import fishIMG from "./../../../../assets/img/fish.svg";
import { NavLink } from "react-router-dom";

function FindFriends(props) {
    let ListFindFriends = props.users.map(u =>
        <div className={Class.container}>
            <div className={Class.preview}>
                <NavLink to={"/Profile/" + u.id}>
                    <img src={u.photos.small != null ? u.photos.small : fishIMG} alt="" />
                </NavLink>
                {u.followed
                    ? <button onClick={() => { props.unfollow(u.id) }}>UnFollow</button>
                    : <button onClick={() => { props.follow(u.id) }}>Follow</button>
                }
            </div>
            <div className={Class.info}>
                <div className={Class.description}>
                    <div className={Class.name}>{u.name}</div>
                    {/* <div className={Class.location}>{u.location.country}, {u.location.city}</div> */}
                </div>
                <div className={Class.status}>{u.status}</div>
            </div>
        </div>)


    let pagesCount = Math.ceil(props.totalUsersCount / props.pageSize);

    let pages = [];
    /*НАчинается с "i = 1" что бы загружать пользователей с первой старницы*/
    for (let i = 1; i <= pagesCount; i++) {
        pages.push(i)
    }

    return (
        <div>
            <div>
                {pages.map(p => {
                    return (
                        <span className={props.currentPage === p && Class.selectPage}
                            onClick={() => { props.onPageChanged(p) }}>{p}</span>
                    )
                })}
            </div>
            {
                ListFindFriends
            }
        </div >
    )
}

export default FindFriends