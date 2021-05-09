import { render } from '@testing-library/react';
import React from 'react';
import MovieList from './MovieList';

describe('MovieList', () => {
    const defaultProps = {};

    it('should render', () => {
        const props = {...defaultProps};
        const { asFragment, queryByText } = render(<MovieList {...props} />);

        expect(asFragment()).toMatchSnapshot();
        expect(queryByText('MovieList')).toBeTruthy();
    });
});
