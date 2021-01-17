import React from 'react'
import classes from './Paginator.module.css'

const Paginator = ({currentPage, onPageChanged, totalUsersCount, pageSize}) => {
    let pagesCount = Math.ceil(totalUsersCount / pageSize) / 25

    let pages = []

    for (let i = 1; i <= pagesCount; i++) {
        pages.push(i)
    }

    return <div>
        <ul className={classes.pagesList}>
            {pages.map(p => {
                return <li key={p}
                           className={`${currentPage === p && classes.selectedPage} ${classes.pagesListItem}`}
                           onClick={e => {
                               onPageChanged(p)
                           }}>{p}</li>
            })}
        </ul>
    </div>
}

export default Paginator