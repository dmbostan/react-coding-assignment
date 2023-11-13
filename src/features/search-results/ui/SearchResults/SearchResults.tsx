import React, {useState} from 'react';
import styles from './SearchResults.module.css';
import {SearchResultsTypes} from "./SearchResults.types.ts";
import Pagination from "@features/pagination/ui/Pagination/Pagination.tsx";
import splitArrayIntoChunks from "@features/search-results/helpers/splitArrayIntoChunks.ts";
import SearchResult from "@features/search-results/ui/SearchResult/SearchResult.tsx";
import {ARTICLES_PER_PAGE} from "@features/search-results/constants.ts";

const SearchResults: React.FC<SearchResultsTypes> = ({results}) => {
    const [currentPage, setCurrentPage] = useState(1);
    const paginatedResults = splitArrayIntoChunks(results, ARTICLES_PER_PAGE);
    const articlesToShow = paginatedResults[currentPage - 1];

    return (
        <>
            <main className={styles.searchResults}>
                {articlesToShow.map((article) => {
                    return (
                        <SearchResult key={article.identifier} {...article} />
                    )
                })}
            </main>
            {results &&
                <Pagination items={paginatedResults} currentPage={currentPage} setCurrentPage={setCurrentPage}/>}
        </>
    );
};

export default SearchResults;