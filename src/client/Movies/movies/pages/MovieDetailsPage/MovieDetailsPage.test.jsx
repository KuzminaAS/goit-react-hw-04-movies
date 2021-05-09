import { render } from '@testing-library/react';
import React from 'react';
import MovieDetailsPage from './MovieDetailsPage';

describe('MovieDetailsPage', () => {
    const defaultProps = {};

    it('should render', () => {
        const props = {...defaultProps};
        const { asFragment, queryByText } = render(<MovieDetailsPage {...props} />);

        expect(asFragment()).toMatchSnapshot();
        expect(queryByText('MovieDetailsPage')).toBeTruthy();
    });
});
