import React from 'react';
import SearchForm from '@features/search-form/ui/SearchForm/SearchForm.tsx';
import { API_ENDPOINT } from '@features/search-results/constants.ts';
import SearchResults from '@features/search-results/ui/SearchResults/SearchResults.tsx';
import ResultsCounter from '@features/search-results/ui/ResultsCounter/ResultsCounter.tsx';
import useResults from '@shared/hooks/useResults.tsx';
import ErrorMessage from '@shared/ui/ErrorMessage/ErrorMessage.tsx';

const Search: React.FC = () => {
  const { searchTerm, setSearchTerm, results, error } = useResults(API_ENDPOINT);

  return (
    <>
      <SearchForm setSearchTerm={setSearchTerm} />
      {searchTerm && error && <ErrorMessage error={error} />}
      <ResultsCounter totalFound={results.length} searchTerm={searchTerm} />

      {searchTerm && !error && <SearchResults results={results} />}
    </>
  );
};

export default Search;
