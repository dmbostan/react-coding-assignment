import React from 'react';
import {PaginationTypes} from "@features/pagination/ui/Pagination/Pagination.types.ts";
import styles from './Pagination.module.css';
import PaginationButton from "@features/pagination/ui/PaginationButton/PaginationButton.tsx";
import getInitialRangeOfPages from "@shared/utils/getInitialRangeOfPages.ts";
import {ButtonTarget} from "@features/pagination/ui/PaginationButton/PaginationButton.type.ts";

const Pagination: React.FC<PaginationTypes> = ({items, currentPage, setCurrentPage}) => {

    const maxPages = items.length;
    const maxPagesToShow = 3


    const renderPagination = () => {
        const pages = [];
        for (let page = 1; page <= getInitialRangeOfPages(maxPages, maxPagesToShow); page++) {
            pages.push(
                <PaginationButton target={page}
                                  currentPage={currentPage}
                                  clickHandler={() => handleClick(page)}
                                  label={`Go to page ${page}`}
                                  key={page}
                >
                    {page}
                </PaginationButton>
            );
        }

        return pages;
    }

    const handleClick = (target:ButtonTarget) => {
        if(target === 'previous') {
            const previousPage = Math.max(currentPage - 1, 1)
            setCurrentPage(previousPage);
            return;
        }

        if(target === 'next') {
            const nextPage =  Math.min(currentPage + 1, maxPages)
            setCurrentPage(nextPage);
            return;
        }

        if(target === 'last') {
            setCurrentPage(maxPages);
            return;
        }

        setCurrentPage(target);

    }

    const isFirstPage = currentPage === 1;
    const isLastPage = currentPage === maxPages;


    return (
        <nav className={styles.pagination}>

            {!isFirstPage && <PaginationButton
                key="previous"
                target="previous"
                currentPage={currentPage}
                clickHandler={() => handleClick('previous')}
                label="Go to previous page"
            >&laquo;</PaginationButton>}

            {renderPagination()}

            <span>...</span>

            <PaginationButton
                key="last"
                target="last"
                currentPage={currentPage}
                clickHandler={() => handleClick('last')}
                label="Go to last page"
            >{maxPages}</PaginationButton>

            {!isLastPage && <PaginationButton
                              key="next"
                              target="next"
                              currentPage={currentPage}
                              clickHandler={() =>  handleClick('next')}
                              label="Go to next page"
            >&raquo;</PaginationButton>}
        </nav>
    )
};

export default Pagination;
