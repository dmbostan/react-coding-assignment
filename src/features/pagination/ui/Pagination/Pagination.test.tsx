import Pagination from './Pagination';
import {render, fireEvent, getByTestId} from '@testing-library/react';
import {PaginationButtonType} from "@features/pagination/ui/PaginationButton/PaginationButton.type.ts";

vi.mock('../PaginationButton/PaginationButton', () => ({
    default: (props:PaginationButtonType) => {
        return (
            <button
                key={props.target}
                data-testid={`pagination-button-${props.target}`}
                onClick={props.clickHandler}
            >
                Mocked Button
            </button>
        )
    },
}))

const mockedItems = [
    [
        {
            "identifier": 1,
            "title": "Title Mock 1",
            "link": "https://mock-1.tld",
            "subject": "Subject Mock 1",
            "description": "Description Mock 1.",
            "date": "2021-01-29",
            "premium": 1,
            "image_url": "https://mock-1.tld/1.jpg",
            "teaser_image_urls": [
                {
                    "width": 100,
                    "src": "https://mock-1.tld/1.jpg"
                }
            ]
        },
    ],
    [
        {
            "identifier": 1,
            "title": "Title Mock 1",
            "link": "https://mock-1.tld",
            "subject": "Subject Mock 1",
            "description": "Description Mock 1.",
            "date": "2021-01-29",
            "premium": 1,
            "image_url": "https://mock-1.tld/1.jpg",
            "teaser_image_urls": [
                {
                    "width": 100,
                    "src": "https://mock-1.tld/1.jpg"
                }
            ]
        },
    ],
    [
        {
            "identifier": 1,
            "title": "Title Mock 1",
            "link": "https://mock-1.tld",
            "subject": "Subject Mock 1",
            "description": "Description Mock 1.",
            "date": "2021-01-29",
            "premium": 1,
            "image_url": "https://mock-1.tld/1.jpg",
            "teaser_image_urls": [
                {
                    "width": 100,
                    "src": "https://mock-1.tld/1.jpg"
                }
            ]
        },
    ],
    [
        {
            "identifier": 1,
            "title": "Title Mock 1",
            "link": "https://mock-1.tld",
            "subject": "Subject Mock 1",
            "description": "Description Mock 1.",
            "date": "2021-01-29",
            "premium": 1,
            "image_url": "https://mock-1.tld/1.jpg",
            "teaser_image_urls": [
                {
                    "width": 100,
                    "src": "https://mock-1.tld/1.jpg"
                }
            ]
        },
    ],
    [
        {
            "identifier": 1,
            "title": "Title Mock 1",
            "link": "https://mock-1.tld",
            "subject": "Subject Mock 1",
            "description": "Description Mock 1.",
            "date": "2021-01-29",
            "premium": 1,
            "image_url": "https://mock-1.tld/1.jpg",
            "teaser_image_urls": [
                {
                    "width": 100,
                    "src": "https://mock-1.tld/1.jpg"
                }
            ]
        },
    ]
]

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
