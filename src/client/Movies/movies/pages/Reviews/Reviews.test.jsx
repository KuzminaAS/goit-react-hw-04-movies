import { render } from '@testing-library/react';
import React from 'react';
import Reviews from './Reviews';

describe('Reviews', () => {
    const defaultProps = {};

    it('should render', () => {
        const props = {...defaultProps};
        const { asFragment, queryByText } = render(<Reviews {...props} />);

        expect(asFragment()).toMatchSnapshot();
        expect(queryByText('Reviews')).toBeTruthy();
    });
});
