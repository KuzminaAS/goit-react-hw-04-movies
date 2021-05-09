import { render } from '@testing-library/react';
import React from 'react';
import BtnGoBack from './BtnGoBack';

describe('BtnGoBack', () => {
    const defaultProps = {};

    it('should render', () => {
        const props = {...defaultProps};
        const { asFragment, queryByText } = render(<BtnGoBack {...props} />);

        expect(asFragment()).toMatchSnapshot();
        expect(queryByText('BtnGoBack')).toBeTruthy();
    });
});
