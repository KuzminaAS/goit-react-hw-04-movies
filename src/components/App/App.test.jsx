import { render } from '@testing-library/react';
import React from 'react';
import App from './App';

describe('App', () => {
    const defaultProps = {};

    it('should render', () => {
        const props = {...defaultProps};
        const { asFragment, queryByText } = render(<App {...props} />);

        expect(asFragment()).toMatchSnapshot();
        expect(queryByText('App')).toBeTruthy();
    });
});
