import { render } from '@testing-library/react';
import ResultsCounter from './ResultsCounter'; // Update the import path accordingly

describe('ResultsCounter component', () => {
    it('should render the ResultsCounter component with the correct totalFound', () => {
        const { getByText } = render(<ResultsCounter totalFound={10} searchTerm="mock" />);

        const resultText = getByText('10 results found for mock.');
        expect(resultText).toBeInTheDocument();
    });

    it('should render the ResultsCounter component with a different totalFound', () => {
        const { getByText } = render(<ResultsCounter totalFound={25} searchTerm="mock" />);

        const resultText = getByText('25 results found for mock.');
        expect(resultText).toBeInTheDocument();
    });

    it('should render the ResultsCounter component with zero totalFound', () => {
        const { getByText } = render(<ResultsCounter totalFound={0} searchTerm="mock" />);

        const resultText = getByText('0 results found for mock.');
        expect(resultText).toBeInTheDocument();
    });
});
