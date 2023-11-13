import React from 'react';
import styles from './ResultsCounter.module.css';
import { ResultsCounterType } from './ResultsCounter.type.ts';
import Heading from "@shared/ui/Heading/Heading.tsx";

const ResultsCounter: React.FC<ResultsCounterType> = ({ totalFound, searchTerm }) => {
  if (searchTerm) {
    return (
        <Heading as="h1" className={styles.resultsCounter}>
          {totalFound} results found for {searchTerm}.
        </Heading>
    );
  } else {
    return (
        <Heading as="h1" className={styles.resultsCounter}>
          Please enter a search term. Maybe use: Statista ?
        </Heading>
    );
  }
};

export default ResultsCounter;
