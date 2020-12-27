import React from 'react'
import '../index.css';

export const Pagination = ({ usersPerPage, totalUsers, paginate }) => {
  const pageNumbers = [];

  for(let i = 1; i <= Math.ceil(totalUsers / usersPerPage); i++ ) {
    pageNumbers.push(i);
  }
  return (
    <nav className='flex'>
      <ul className='pagination'>
        {pageNumbers.map(pageNumber => 
          <li key={pageNumber} className='page-item'>
            <a onClick={() => paginate(pageNumber)} href='!#' className='page-link'>
              { pageNumber }
            </a>
          </li>
        )}
      </ul>
    </nav>
  )
}

