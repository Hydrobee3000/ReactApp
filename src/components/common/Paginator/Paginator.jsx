import s from './Paginator.module.css'
import { useState } from 'react'
import classnames from 'classnames'

const Paginator = ({ totalItemsCount, pageSize, currentPage, onPageChanged, portionSize = 10 }) => {
  const pagesCount = Math.ceil(totalItemsCount / pageSize)

  const pages = [] //create array of pages
  for (let i = 1; i <= pagesCount; i++) {
    pages.push(i)
  }
  //indexing each page and writing to an array

  const portionCount = Math.ceil(pagesCount / portionSize)
  const [portionNumber, setPortionNumber] = useState(1) //portion control
  const leftPortionPageNumber = (portionNumber - 1) * portionSize + 1 //left portion border
  const rightPortionPageNumber = portionNumber * portionSize //right portion border

  return (
    <div className={s.paginator}>
      {portionNumber > 1 && ( // button (previous) appears if we are not on the first portion
        <button
          className={s.previous__button}
          onClick={() => {
            setPortionNumber(portionNumber - 1) //showing the previous portion
          }}
        >
          prev
        </button>
      )}
      {/* Filtering pages: pages within the portion range and maps render item */}
      {pages
        .filter((page) => page >= leftPortionPageNumber && page <= rightPortionPageNumber)
        .map((page) => {
          return (
            <button
              className={classnames(
                {
                  [s.page__selected]: currentPage === page, //if the page is current - className = page__selected
                },
                s.page__number //else className = page__number
              )}
              key={page}
              onClick={(e) => {
                onPageChanged(page) //redirection to the page
              }}
            >
              {page}
            </button>
          )
        })}
      {portionCount > portionNumber && ( // button (next) appears if we are not on the last portion
        <button
          className={s.next__button}
          onClick={() => {
            setPortionNumber(portionNumber + 1) //showing the next portion
          }}
        >
          next
        </button>
      )}
    </div>
  )
}

export default Paginator
