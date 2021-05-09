import { render } from '@testing-library/react';
import React from 'react';
import Notification from './Notification';

describe('Notification', () => {
    const defaultProps = {};

    it('should render', () => {
        const props = {...defaultProps};
        const { asFragment, queryByText } = render(<Notification {...props} />);

        expect(asFragment()).toMatchSnapshot();
        expect(queryByText('Notification')).toBeTruthy();
    });
});
