import { render } from '@testing-library/react';
import SearchResult from './SearchResult';

const mockArticleData = {
  identifier: 1,
  title: 'Example Article',
  subject: 'Example Subject',
  description: 'This is an example article description.',
  teaser_image_urls: [{ src: 'example.jpg', width: 754 }],
  date: '2023-11-11',
  premium: 1,
  image_url: 'example.jpg',
  link: 'https://example.com/article',
};

describe('SearchResult component', () => {
  it('renders the SearchResult component with correct data', () => {
    const { getByText, getByAltText, container } = render(<SearchResult {...mockArticleData} />);

    expect(getByText('Example Article')).toBeInTheDocument();
    expect(getByText('This is an example article description.')).toBeInTheDocument();

    const dateElement = getByText((content, element) => {
      return element?.tagName.toLowerCase() === 'div' && content.includes('Published on');
    });

    expect(dateElement).toBeInTheDocument();
    expect(dateElement.textContent).toContain('November 11, 2023');

    const image = getByAltText('Example Article');
    expect(image).toBeInTheDocument();
    expect(image).toHaveAttribute('src', 'example.jpg');
    expect(image).toHaveAttribute('width', '754');

    const link = container.querySelector('a');
    expect(link).toBeInTheDocument();
    expect(link).toHaveAttribute('href', 'https://example.com/article');
  });
});
