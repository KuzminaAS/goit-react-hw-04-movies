import { render } from '@testing-library/react';
import React from 'react';
import MoviesPage from './MoviesPage';

describe('MoviesPage', () => {
    const defaultProps = {};

    it('should render', () => {
        const props = {...defaultProps};
        const { asFragment, queryByText } = render(<MoviesPage {...props} />);

        expect(asFragment()).toMatchSnapshot();
        expect(queryByText('MoviesPage')).toBeTruthy();
    });
});
