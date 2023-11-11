import Logos from './Logos.tsx';
import { render } from '@testing-library/react';

describe('Logos component', () => {
  it('should match the snapshot', () => {
    const { asFragment } = render(<Logos />);

    expect(asFragment()).toMatchSnapshot();
  });
});
