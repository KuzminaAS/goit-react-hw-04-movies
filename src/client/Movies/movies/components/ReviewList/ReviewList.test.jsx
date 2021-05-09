import { render } from '@testing-library/react';
import React from 'react';
import ReviewList from './ReviewList';

describe('ReviewList', () => {
    const defaultProps = {};

    it('should render', () => {
        const props = {...defaultProps};
        const { asFragment, queryByText } = render(<ReviewList {...props} />);

        expect(asFragment()).toMatchSnapshot();
        expect(queryByText('ReviewList')).toBeTruthy();
    });
});
