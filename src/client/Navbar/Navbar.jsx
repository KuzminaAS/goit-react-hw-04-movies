import React from 'react';

import NavbarMenuItem from '../NavbarMenuItem';

import { menuItem } from '../menuitems';

import styles from './Navbar.module.css';

const Navbar = () => {
    
    const navbarMenuElements = menuItem.map(item => <NavbarMenuItem key={item.id} {...item} />);
    return (
        <nav>
            <div className={styles.nav_container} >
                <ul className={styles.navlist}>
                    {navbarMenuElements}
                </ul>
            </div>
        </nav>
    )
};

export default Navbar;
