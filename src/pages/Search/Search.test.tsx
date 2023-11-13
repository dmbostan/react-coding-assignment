import Search from './Search';
import { render } from '@testing-library/react';
import mockedResults from '@shared/mocks/results.mock.ts';

vi.mock('@shared/hooks/useResults.tsx', () => ({
  default: () => ({
    searchTerm: '',
    setSearchTerm: vi.fn(),
    results: mockedResults,
    error: null,
  }),
}));

describe('Search', () => {
  it('should render the Search component', () => {
    const { getByText } = render(<Search />);
    expect(getByText('Search')).toBeInTheDocument();
  });

  it('should display an error message when there is an error', () => {
    vi.resetModules();
    vi.mock('@shared/hooks/useResults.tsx', () => ({
      default: () => ({
        searchTerm: 'errorSearch',
        setSearchTerm: vi.fn(),
        results: [],
        error: 'Error fetching results',
      }),
    }));

    const { getByText } = render(<Search />);
    const errorMessage = getByText('Error fetching results');
    expect(errorMessage).toBeInTheDocument();
  });
});
