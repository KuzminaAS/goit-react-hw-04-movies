import { render } from '@testing-library/react';
import React from 'react';
import NotFoundMovies from './NotFoundMovies';

describe('NotFoundMovies', () => {
    const defaultProps = {};

    it('should render', () => {
        const props = {...defaultProps};
        const { asFragment, queryByText } = render(<NotFoundMovies {...props} />);

        expect(asFragment()).toMatchSnapshot();
        expect(queryByText('NotFoundMovies')).toBeTruthy();
    });
});
