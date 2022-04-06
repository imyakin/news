import React from 'react'
interface PaginationProps{
    newsPerPage: number;
    totalNews: number;
    paginate: (page: number) => void;
    nextPage: () => void;
    prevPage: () => void;
    currPage: number
}

const Pagination: React.FC<PaginationProps> = ({totalNews, newsPerPage, paginate, nextPage, prevPage, currPage}) => {
    
    const pages = [];
    
    for(let i = 1; i <= Math.ceil(totalNews / newsPerPage); i++){
        pages.push(i)
    }

    const isFirstPage = currPage === 1
    const isLastPage = currPage === pages.length
    
    return (
            <ul className="pagination">
                <li className={isFirstPage ? 'disabled' : 'waves-effect'}>
                    <a onClick={isFirstPage ? () => false : ()=> prevPage()}><i className="material-icons">chevron_left</i></a>
                </li>
                {pages.map((page, index) => (
                    <li key={index} className={currPage === page ? 'active brown darken-3' : 'waves-effect'}>
                        <a onClick={() => paginate(page)}>{page}</a>
                    </li>))}
                <li className={isLastPage ? 'disabled' : 'waves-effect'}>
                    <a onClick={isLastPage ? () => false : () => nextPage()}><i className="material-icons">chevron_right</i></a>
                </li>
            </ul>
    )
}

export default Pagination
