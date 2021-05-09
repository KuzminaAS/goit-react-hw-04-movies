import { render } from '@testing-library/react';
import React from 'react';
import MoviesSearch from './MoviesSearch';

describe('MoviesSearch', () => {
    const defaultProps = {};

    it('should render', () => {
        const props = {...defaultProps};
        const { asFragment, queryByText } = render(<MoviesSearch {...props} />);

        expect(asFragment()).toMatchSnapshot();
        expect(queryByText('MoviesSearch')).toBeTruthy();
    });
});
