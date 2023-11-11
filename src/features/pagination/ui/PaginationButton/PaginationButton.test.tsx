import { render, fireEvent } from '@testing-library/react';
import PaginationButton from './PaginationButton';

describe('PaginationButton', () => {
    it('should render the button with correct label and class when not active', () => {
        const { getByLabelText, getByText } = render(
            <PaginationButton page={1} currentPage={2} label="Page 1" clickHandler={() => {}}>
                Button Text
            </PaginationButton>
        );

        const button = getByLabelText('Page 1');
        const buttonText = getByText('Button Text');

        expect(button).toBeInTheDocument();
        expect(buttonText).toBeInTheDocument();
        console.log()

        expect(button.className).toContain('button');
        expect(button.className).not.toContain('active');
    });

    it('should render the button with correct label and class when active', () => {
        const { getByLabelText, getByText } = render(
            <PaginationButton page={1} currentPage={1} label="Page 1" clickHandler={() => {}}>
                Active Button Text
            </PaginationButton>
        );

        const button = getByLabelText('Page 1');
        const buttonText = getByText('Active Button Text');

        expect(button).toBeInTheDocument();
        expect(buttonText).toBeInTheDocument();
        expect(button.className).toContain('button');
        expect(button.className).toContain('active');
    });

    it('should call the clickHandler when the button is clicked', () => {
        const clickHandlerMock = vi.fn();
        const { getByLabelText } = render(
            <PaginationButton page={1} currentPage={2} label="Page 1" clickHandler={clickHandlerMock}>
                Click Me
            </PaginationButton>
        );

        const button = getByLabelText('Page 1');

        fireEvent.click(button);

        expect(clickHandlerMock).toHaveBeenCalledWith(1);
    });

    it('should match snapshot', () => {

        const { asFragment } = render(
            <PaginationButton page={1} currentPage={2} label="Page 1" clickHandler={() => {}}>
                Click Me
            </PaginationButton>
        );

        expect(asFragment()).toMatchSnapshot();
    });
})
