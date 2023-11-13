import Heading from './Heading.tsx';
import { render, screen } from '@testing-library/react';

describe('Heading component', () => {
  it('should render a heading with the provided level and text', () => {
    const text = 'Example';
    const { container } = render(<Heading as="h1">{text}</Heading>);

    const headingElement = container.querySelector('h1');

    expect(headingElement).toBeInTheDocument();
    expect(headingElement).toHaveTextContent(text);
  });

  it('should render a heading with class', () => {
    const className = 'some-class';
    const text = 'Example Text';

    render(
      <Heading as="h5" className={className}>
        {text}
      </Heading>,
    );

    const headingElement = screen.getByText(text);

    expect(headingElement).toHaveAttribute('class', className);
  });

  it('should match the snapshot', () => {
    const { asFragment } = render(<Heading as="h3">Example</Heading>);

    expect(asFragment()).toMatchSnapshot();
  });
});
