import React from 'react';
import styles from './ResultsCounter.module.css';
import { ResultsCounterType } from './ResultsCounter.type.ts';

const ResultsCounter: React.FC<ResultsCounterType> = ({ totalFound, searchTerm }) => {
  if (searchTerm) {
    return (
      <h1 className={styles.resultsCounter}>
        {totalFound} results found for {searchTerm}.
      </h1>
    );
  } else {
    return <h1 className={styles.resultsCounter}>Please enter a search term. Maybe use: Statista ?</h1>;
  }
};

export default ResultsCounter;
