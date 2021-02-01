import React from "react";
import Class from "./paginator.module.css"

function Paginator({ totalUsersCount, pageSize, currentPage, onPageChanged }) {
    let pagesCount = Math.ceil(totalUsersCount / pageSize);
    let pages = [];
    /*Начинается с "i = 1" что бы загружать пользователей с первой старницы*/
    for (let i = 1; i <= pagesCount; i++) {
        pages.push(i)
    }

    return (
        <div>
            <div className={Class.pages}>
                {pages.map(page => {
                    return (
                        <span key={page.id} className={currentPage === page && Class.selectPage}
                            onClick={() => { onPageChanged(page) }}>{page}</span>
                    )
                })}
            </div>
        </div >
    )
}

export default Paginator