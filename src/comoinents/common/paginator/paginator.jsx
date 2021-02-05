import React, { useState } from "react";
import Class from "./paginator.module.css"

function Paginator({ totalItemCount, pageSize, currentPage, onPageChanged, portionSize = 10 }) {
    let pagesCount = Math.ceil(totalItemCount / pageSize);
    let pages = [];
    /*Начинается с "i = 1" что бы загружать пользователей с первой старницы*/
    for (let i = 1; i <= pagesCount; i++) {
        pages.push(i)
    }

    let portionCount = Math.ceil(pagesCount / portionSize)
    let [portionNumber, setPorionNamber] = useState(1)
    let leftPortionPageNumber = (portionNumber - 1) * portionSize + 1
    let rightPortionPageNumber = portionNumber * portionSize

    return (

        <div className={Class.pages}>
            {portionNumber > 1 &&
                <button onClick={() => { setPorionNamber(portionNumber - 1) }}><span className={Class.arrowPrev}></span></button>}

            {pages
                .filter(p => p >= leftPortionPageNumber && p <= rightPortionPageNumber)
                .map((p) => {
                    return (
                        <span key={p} className={currentPage === p && Class.selectPage}
                            onClick={() => { onPageChanged(p) }}>{p}</span>
                    )
                })}
            {portionCount > portionNumber &&
                <button onClick={() => { setPorionNamber(portionNumber + 1) }}><span className={Class.arrowNext}></span></button>}
        </div>
    )
}

export default Paginator