import { render } from '@testing-library/react';
import React from 'react';
import Cast from './Cast';

describe('Cast', () => {
    const defaultProps = {};

    it('should render', () => {
        const props = {...defaultProps};
        const { asFragment, queryByText } = render(<Cast {...props} />);

        expect(asFragment()).toMatchSnapshot();
        expect(queryByText('Cast')).toBeTruthy();
    });
});
