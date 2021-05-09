import { render } from '@testing-library/react';
import React from 'react';
import NavbarMenuItem from './NavbarMenuItem';

describe('NavbarMenuItem', () => {
    const defaultProps = {};

    it('should render', () => {
        const props = {...defaultProps};
        const { asFragment, queryByText } = render(<NavbarMenuItem {...props} />);

        expect(asFragment()).toMatchSnapshot();
        expect(queryByText('NavbarMenuItem')).toBeTruthy();
    });
});
