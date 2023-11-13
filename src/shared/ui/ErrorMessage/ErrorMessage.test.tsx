import { render, screen, act } from '@testing-library/react';
import ErrorMessage from './ErrorMessage';

describe('ErrorMessage', () => {
    it('renders with the provided error message', () => {
        const errorMessage = 'This is an error message';
        render(<ErrorMessage error={errorMessage} />);

        const errorMessageElement = screen.getByText(errorMessage);
        expect(errorMessageElement).toBeInTheDocument();
    });

    it('hides itself after 5 seconds',  () => {
        vi.useFakeTimers(); // Mock the timers

        const errorMessage = 'This is an error message';
        render(<ErrorMessage error={errorMessage} />);

        const errorMessageElement = screen.getByText(errorMessage);
        expect(errorMessageElement).toBeInTheDocument();

        act(() => {
            vi.advanceTimersByTime(5000);
        });

        expect(errorMessageElement).not.toBeInTheDocument();
    });
});
