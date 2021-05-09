import { render } from '@testing-library/react';
import React from 'react';
import MovieCard from './MovieCard';

describe('MovieCard', () => {
    const defaultProps = {};

    it('should render', () => {
        const props = {...defaultProps};
        const { asFragment, queryByText } = render(<MovieCard {...props} />);

        expect(asFragment()).toMatchSnapshot();
        expect(queryByText('MovieCard')).toBeTruthy();
    });
});
