import { render } from '@testing-library/react';
import React from 'react';
import MovieListItem from './MovieListItem';

describe('MovieListItem', () => {
    const defaultProps = {};

    it('should render', () => {
        const props = {...defaultProps};
        const { asFragment, queryByText } = render(<MovieListItem {...props} />);

        expect(asFragment()).toMatchSnapshot();
        expect(queryByText('MovieListItem')).toBeTruthy();
    });
});
