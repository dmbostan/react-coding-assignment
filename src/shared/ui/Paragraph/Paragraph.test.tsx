import Paragraph from './Paragraph.tsx';
import { render, screen } from '@testing-library/react';

describe('Paragraph component', () => {
  it('should render a paragraph with class', () => {
    const className = 'some-class';
    const text = 'Example Text';

    render(<Paragraph className={className}>{text}</Paragraph>);

    const paragraphElement = screen.getByText(text);

    expect(paragraphElement).toHaveAttribute('class', className);
  });

  it('should match the snapshot', () => {
    const { asFragment } = render(<Paragraph>Example</Paragraph>);

    expect(asFragment()).toMatchSnapshot();
  });
});
