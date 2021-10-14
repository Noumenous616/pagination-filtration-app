import React from 'react';

let Paginator = ({
                     Pages,
                     currentPage,
                     onNextClick,
                     onPrevClick,
                     buttonPrevDisabled,
                     buttonNextDisabled,
                     currentPageActive,
                     currentPageNumber}) => {

    return (
        <div>
            <nav aria-label="...">
                <ul className="pagination">
                    <li className={`page-item ${buttonPrevDisabled}`}>
                        <a className="page-link" href="#" onClick={() => {onPrevClick()}}>Previous</a>
                    </li>
                    {
                        Pages.map(p=>{
                            return (
                                <li key={p} className={(currentPageNumber === p)?`page-item ${currentPageActive}` : `page-item`}>
                                    <a className="page-link" href="#" onClick={() => {currentPage(p)}}>{p}</a>
                                </li>
                            )
                        })
                    }
                    <li className={`page-item ${buttonNextDisabled}`}>
                        <a className="page-link" href="#" onClick={() => {onNextClick()}}>Next</a>
                    </li>
                </ul>
            </nav>
        </div>
    )
}

export default Paginator;