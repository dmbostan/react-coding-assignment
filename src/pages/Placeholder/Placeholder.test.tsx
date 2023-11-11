import Placeholder from './Placeholder.tsx';
import { render, screen, fireEvent } from '@testing-library/react';

describe('Placeholder component', () => {
  it('should have a heading', () => {
    render(<Placeholder />);
    const h1 = screen.queryByText('Vite + React');

    expect(h1).toBeInTheDocument();
  });

  it('should show the button count set to 3', () => {
    render(<Placeholder />);
    const button = screen.queryByText('count is 0');

    expect(button).not.toBeNull();

    fireEvent.click(button as HTMLElement);
    fireEvent.click(button as HTMLElement);
    fireEvent.click(button as HTMLElement);

    expect(button?.innerHTML).toBe('count is 3');
  });

  it('should match snapshot', () => {
    const { asFragment } = render(<Placeholder />);

    expect(asFragment()).toMatchSnapshot();
  });
});
