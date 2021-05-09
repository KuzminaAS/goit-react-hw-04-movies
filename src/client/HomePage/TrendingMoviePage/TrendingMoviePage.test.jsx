import { render } from '@testing-library/react';
import React from 'react';
import TrendingMoviePage from './TrendingMoviePage';

describe('TrendingMoviePage', () => {
    const defaultProps = {};

    it('should render', () => {
        const props = {...defaultProps};
        const { asFragment, queryByText } = render(<TrendingMoviePage {...props} />);

        expect(asFragment()).toMatchSnapshot();
        expect(queryByText('TrendingMoviePage')).toBeTruthy();
    });
});
