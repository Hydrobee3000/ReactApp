import s from './Paginator.module.css'
import { useState } from 'react'
import classnames from 'classnames'

const Paginator = ({ totalItemsCount, pageSize, currentPage, onPageChanged, portionSize = 10 }) => {
  const pagesCount = Math.ceil(totalItemsCount / pageSize) //количество страниц

  const pages = [] //создаем массив страниц
  for (let i = 1; i <= pagesCount; i++) {
    pages.push(i)
  }
  //индексируем каждую страницу и записываем в массив

  const portionCount = Math.ceil(pagesCount / portionSize) //количество порций
  const [portionNumber, setPortionNumber] = useState(1) //управление состоянием порций
  const leftPortionPageNumber = (portionNumber - 1) * portionSize + 1 //левая граница порции
  const rightPortionPageNumber = portionNumber * portionSize //правая граница порции

  return (
    <div className={s.paginator}>
      {portionNumber > 1 && ( //кнопка (назад) появляется если находимся не на первой порции
        <button
          className={s.previous__button}
          onClick={() => {
            setPortionNumber(portionNumber - 1) //показываем предыдущую порцую
          }}
        >
          prev
        </button>
      )}
      {pages
        .filter((page) => page >= leftPortionPageNumber && page <= rightPortionPageNumber)
        .map((page) => {
          return (
            <span
              className={classnames(
                {
                  [s.page__selected]: currentPage === page,
                },
                s.page__number
              )}
              key={page}
              onClick={(e) => {
                onPageChanged(page)
              }}
            >
              {page}
            </span>
          )
        })}
      {portionCount > portionNumber && (
        <button
          className={s.next__button}
          onClick={() => {
            setPortionNumber(portionNumber + 1)
          }}
        >
          next
        </button>
      )}
    </div>
  )
}

export default Paginator
