import React, {useState} from 'react';
import styles from './SearchForm.module.css';
import {SearchFormTypes} from "@features/search-form/ui/SearchForm/SearchForm.types.ts";
import SearchIcon from '@features/search-form/assets/search.svg?react';

const SearchForm: React.FC<SearchFormTypes> = ({ setSearchTerm}) => {
    const [userInput, setUserInput] = useState('');

    const handleSearchInput = (userInput:string) => {
        setUserInput(userInput);
    }

    const handleSubmit = (userInput:string) => {
        setSearchTerm(userInput);
    }

  return (
    <div className={styles.searchFormWrapper}>
      <label htmlFor="search-input" className={styles.visuallyHidden}>Search:</label>
      <div id="search-form" className={styles.searchForm}>
          <input type="search" id="search-input"  className={styles.searchInput} name="search" placeholder="Search..." aria-label="Search"
                 onChange={(event) =>  handleSearchInput(event.target.value)}
          />
          <button type="submit" className={styles.searchSubmit} onClick={() =>  handleSubmit(userInput)}>
              Search <SearchIcon className={styles.searchIcon} />
          </button>
      </div>
    </div>
  );
};

export default SearchForm;
