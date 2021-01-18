import React, {useState} from 'react'
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faArrowLeft, faArrowRight} from "@fortawesome/free-solid-svg-icons";
import classes from './../../Users/Users.module.css'

const Paginator = ({currentPage, onPageChanged, totalItemsCount, portionSize = 10}) => {
    let pagesCount = Math.ceil(totalItemsCount / portionSize)

    let pages = []

    for (let i = 1; i <= pagesCount; i++) {
        pages.push(i)
    }

    let portionCount = Math.ceil(pagesCount / portionSize)
    let [portionNumber, setPortionNumder] = useState(1)
    let leftPortionPageNumber = (portionNumber - 1) * portionSize + 1
    let rightPortionNumber = portionNumber * portionSize

    return <div className={classes.paginator}>
        <ul>
            { portionNumber > 1 &&
            <button onClick={ () => setPortionNumder(portionNumber - 1)}><FontAwesomeIcon icon={faArrowLeft} className={classes.arrowIcon}/></button>
            }
            {pages
                .filter(p => p >= leftPortionPageNumber && p <= rightPortionNumber)
                .map(p => {
                return <li key={p}
                           className={`${currentPage === p && classes.selectedPage} ${classes.pagesListItem}`}
                           onClick={e => {
                               onPageChanged(p)
                           }}>{p}</li>
            })}
            { portionCount > portionNumber &&
            <button onClick={ () => setPortionNumder(portionNumber + 1)}><FontAwesomeIcon icon={faArrowRight} className={classes.arrowIcon}/></button>
            }
        </ul>
    </div>
}

export default Paginator