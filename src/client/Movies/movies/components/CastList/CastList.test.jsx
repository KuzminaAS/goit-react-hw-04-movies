import { render } from '@testing-library/react';
import React from 'react';
import CastList from './CastList';

describe('CastList', () => {
    const defaultProps = {};

    it('should render', () => {
        const props = {...defaultProps};
        const { asFragment, queryByText } = render(<CastList {...props} />);

        expect(asFragment()).toMatchSnapshot();
        expect(queryByText('CastList')).toBeTruthy();
    });
});
