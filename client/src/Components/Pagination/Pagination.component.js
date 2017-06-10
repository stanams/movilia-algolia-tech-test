import React from 'react'
import PropTypes from 'prop-types'
import './Pagination.component.css'
import { createArrFromLength } from '../../Core/utils'

export const Pagination = ({ from, to, active, onClick }) => {
  return (
    <ul className='pagination__list'>
      {
        createArrFromLength(to - from + 1).map(item => (
          <li className={'pagination__list-item ' + (active === from + item ? 'pagination__list-item--active': '')}
              key={item}
              onClick={active === from + item ? () => null : () => onClick(item + from)}
              >
            { from + item }
          </li>
        ))
      }
    </ul>
  )
}

Pagination.propTypes = {
  from: PropTypes.number,
  to: PropTypes.number,
  active: PropTypes.number,
  onClick: PropTypes.func
}