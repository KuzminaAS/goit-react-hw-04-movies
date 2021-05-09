import { render } from '@testing-library/react';
import React from 'react';
import ErrorNotification from './ErrorNotification';

describe('ErrorNotification', () => {
    const defaultProps = {};

    it('should render', () => {
        const props = {...defaultProps};
        const { asFragment, queryByText } = render(<ErrorNotification {...props} />);

        expect(asFragment()).toMatchSnapshot();
        expect(queryByText('ErrorNotification')).toBeTruthy();
    });
});
