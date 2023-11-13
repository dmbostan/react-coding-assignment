import Pagination from './Pagination';
import {render, fireEvent} from '@testing-library/react';
import {PaginationButtonType} from "@features/pagination/ui/PaginationButton/PaginationButton.type.ts";

vi.mock('../PaginationButton/PaginationButton', () => ({
    default: (props:PaginationButtonType) => {
        return (
            <button
                key={props.target}
                data-testid={`pagination-button-${props.target}`}
                onClick={props.clickHandler as () => void}
            >
                Mocked Button
            </button>
        )
    },
}))

const mockedItems = [
    [{ identifier: 1, title: 'Article 1', subject: 'Subject 1', description: 'Description 1', teaser_image_urls: [], date: '2023-11-11T12:34:56Z', link: 'https://example.com/article1', premium: 1, image_url: 'https://cdn.tldimage.jpg' }],
    [{ identifier: 2, title: 'Article 2', subject: 'Subject 2', description: 'Description 2', teaser_image_urls: [], date: '2023-11-12T12:34:56Z', link: 'https://example.com/article2', premium: 1, image_url: 'https://cdn.tldimage.jpg' }],
    [{ identifier: 3, title: 'Article 3', subject: 'Subject 3', description: 'Description 3', teaser_image_urls: [], date: '2023-11-13T12:34:56Z', link: 'https://example.com/article3', premium: 1, image_url: 'https://cdn.tldimage.jpg' }],
    [{ identifier: 4, title: 'Article 4', subject: 'Subject 4', description: 'Description 4', teaser_image_urls: [], date: '2023-11-14T12:34:56Z', link: 'https://example.com/article4', premium: 1, image_url: 'https://cdn.tldimage.jpg' }],
    [{ identifier: 5, title: 'Article 5', subject: 'Subject 5', description: 'Description 5', teaser_image_urls: [], date: '2023-11-15T12:34:56Z', link: 'https://example.com/article5', premium: 1, image_url: 'https://cdn.tldimage.jpg' }],
    [{ identifier: 6, title: 'Article 6', subject: 'Subject 6', description: 'Description 6', teaser_image_urls: [], date: '2023-11-16T12:34:56Z', link: 'https://example.com/article6', premium: 1, image_url: 'https://cdn.tldimage.jpg' }],
    [{ identifier: 7, title: 'Article 7', subject: 'Subject 7', description: 'Description 7', teaser_image_urls: [], date: '2023-11-17T12:34:56Z', link: 'https://example.com/article7', premium: 1, image_url: 'https://cdn.tldimage.jpg' }],
    [{ identifier: 8, title: 'Article 8', subject: 'Subject 8', description: 'Description 8', teaser_image_urls: [], date: '2023-11-18T12:34:56Z', link: 'https://example.com/article8', premium: 1, image_url: 'https://cdn.tldimage.jpg' }],
    [{ identifier: 9, title: 'Article 9', subject: 'Subject 9', description: 'Description 9', teaser_image_urls: [], date: '2023-11-19T12:34:56Z', link: 'https://example.com/article9', premium: 1, image_url: 'https://cdn.tldimage.jpg' }],
    [{ identifier: 10, title: 'Article 10', subject: 'Subject 10', description: 'Description 10', teaser_image_urls: [], date: '2023-11-20T12:34:56Z', link: 'https://example.com/article10', premium: 1, image_url: 'https://cdn.tldimage.jpg' }],
];

describe('Pagination', () => {
    it('should render correctly with pagination buttons', () => {


        const currentPage = 1;
        const setCurrentPage = vi.fn();

        const { getByTestId } = render(
            <Pagination items={mockedItems} currentPage={currentPage} setCurrentPage={setCurrentPage} />
        );

        const buttonNext = getByTestId('pagination-button-next');
        const buttonPage1 = getByTestId('pagination-button-1');
        const buttonLast = getByTestId('pagination-button-last');

        expect(buttonNext).toBeInTheDocument();
        expect(buttonPage1).toBeInTheDocument();
        expect(buttonLast).toBeInTheDocument();
    });

    it('should call setCurrentPage when a pagination button is clicked', () => {
        const currentPage = 1;
        const mockedClickHandler = vi.fn();
        // const mockedClickHandler = vi.fn(() => { console.log('????')})

        const { getByTestId } = render(
            <Pagination items={mockedItems} currentPage={currentPage} setCurrentPage={mockedClickHandler} />
        );

        const buttonPage1 = getByTestId('pagination-button-1');
        fireEvent.click(buttonPage1);

        expect(mockedClickHandler).toHaveBeenCalledWith(currentPage);
    });


    it('should call page setter function when clicking next button', () => {
        const currentPage = 1;
        const expectedPage = 2;
        const mockedClickHandler = vi.fn();

        const { getByTestId } = render(
            <Pagination items={mockedItems} currentPage={currentPage} setCurrentPage={mockedClickHandler} />
        );

        const buttonNext = getByTestId('pagination-button-next');
        fireEvent.click(buttonNext);

        expect(mockedClickHandler).toHaveBeenCalledWith(expectedPage);
    });

    it('should call page setter function when clicking previous button', () => {
        const currentPage = 2;
        const expectedPage = 1;
        const mockedClickHandler = vi.fn();

        const { getByTestId } = render(
            <Pagination items={mockedItems} currentPage={currentPage} setCurrentPage={mockedClickHandler} />
        );

        const buttonPrevious = getByTestId('pagination-button-previous');
        fireEvent.click(buttonPrevious);

        expect(mockedClickHandler).toHaveBeenCalledWith(expectedPage);
    });

    it('should call page setter function when clicking last page button', () => {
        const currentPage = 2;
        const expectedPage = mockedItems.length;
        const mockedClickHandler = vi.fn();

        const { getByTestId } = render(
            <Pagination items={mockedItems} currentPage={currentPage} setCurrentPage={mockedClickHandler} />
        );

        const buttonLast = getByTestId('pagination-button-last');
        fireEvent.click(buttonLast);

        expect(mockedClickHandler).toHaveBeenCalledWith(expectedPage);
    });


})
