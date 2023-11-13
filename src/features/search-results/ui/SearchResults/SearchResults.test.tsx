import { render } from '@testing-library/react';
import SearchResults from './SearchResults'; // Update the import path accordingly
import mockedResults from '@shared/mocks/results.mock.ts';

describe('SearchResults component', () => {
  it('should render the SearchResults component with a list of articles', () => {
    const { getByText } = render(<SearchResults results={mockedResults} />);

    expect(getByText('Article 1')).toBeInTheDocument();
    expect(getByText('Article 2')).toBeInTheDocument();
  });

  it('should render the SearchResults component with pagination', () => {
    const { getByText } = render(<SearchResults results={mockedResults} />);

    expect(getByText('1')).toBeInTheDocument();
  });
});
