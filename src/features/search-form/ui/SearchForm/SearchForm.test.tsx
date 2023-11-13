import { render, screen, fireEvent } from '@testing-library/react';
import SearchForm from './SearchForm.tsx';

describe('SearchForm', () => {
  it('should render search input and submit button', () => {
    render(<SearchForm setSearchTerm={() => {}} />);

    const searchInput = screen.getByLabelText('Search');
    const submitButton = screen.getByText('Search');

    expect(searchInput).toBeInTheDocument();
    expect(submitButton).toBeInTheDocument();
  });

  it('should update user input on search input change', () => {
    render(<SearchForm setSearchTerm={() => {}} />);

    const searchInput: HTMLInputElement = screen.getByLabelText('Search');

    fireEvent.change(searchInput, { target: { value: 'test query' } });

    expect(searchInput.value).toBe('test query');
  });

  it('should call setSearchTerm with the correct user input on form submit', () => {
    const setSearchTermMock = vi.fn();
    render(<SearchForm setSearchTerm={setSearchTermMock} />);

    const searchInput = screen.getByLabelText('Search');
    const submitButton = screen.getByText('Search');

    fireEvent.change(searchInput, { target: { value: 'test query' } });
    fireEvent.click(submitButton);

    expect(setSearchTermMock).toHaveBeenCalledWith('test query');
  });
});
