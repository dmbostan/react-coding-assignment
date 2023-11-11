import { render, fireEvent } from '@testing-library/react';
import Button from './Button.tsx';

describe('Button component', () => {
  it('should render a button with the provided text and class name', () => {
    const clickHandler = vi.fn();
    const className = 'custom-button';
    const buttonText = 'Click me';

    const { getByText } = render(
      <Button clickHandler={clickHandler} className={className}>
        {buttonText}
      </Button>,
    );

    const buttonElement = getByText(buttonText);

    expect(buttonElement).toBeInTheDocument();
    expect(buttonElement).toHaveClass(className);
  });

  it('should call the click handler when clicked', () => {
    const clickHandler = vi.fn();
    const className = 'custom-button';
    const buttonText = 'Click me';

    const { getByText } = render(
      <Button clickHandler={clickHandler} className={className}>
        {buttonText}
      </Button>,
    );

    const buttonElement = getByText(buttonText);
    fireEvent.click(buttonElement);

    expect(clickHandler).toHaveBeenCalled();
  });

  it('should match the snapshot', () => {
    const clickHandler = vi.fn();
    const className = 'custom-button';
    const buttonText = 'Click me';

    const { asFragment } = render(
      <Button clickHandler={clickHandler} className={className}>
        {buttonText}
      </Button>,
    );

    expect(asFragment()).toMatchSnapshot();
  });
});
