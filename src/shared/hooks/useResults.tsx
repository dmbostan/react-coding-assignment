import { useEffect, useState } from 'react';
import { AxiosResponseType } from '@pages/Search/Search.type.ts';
import { ArticleType } from '@shared/types/Article.type.ts';
import axios from 'axios';

const useResults = (apiEndpoint: string) => {
  const [searchTerm, setSearchTerm] = useState<string>('');
  const [results, setResults] = useState<ArticleType[]>([]);
  const [error, setError] = useState<string>('');

  useEffect(() => {
    const requestResults = () => {
      axios
        .get(apiEndpoint, { responseType: 'json' })
        .then((response) => {
          const { data } = response as AxiosResponseType;
          setResults(data.items);
        })
        .catch((error: string) => {
          setError(error);
        });
    };

    requestResults();
  }, [searchTerm, apiEndpoint]);

  return { searchTerm, setSearchTerm, error, setError, results };
};

export default useResults;
