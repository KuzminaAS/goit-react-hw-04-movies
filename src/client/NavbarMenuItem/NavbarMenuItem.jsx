import React from 'react';
import { NavLink } from 'react-router-dom';
import styles from './NavbarMenuItem.module.css'

const NavbarMenuItem = ({ to, text }) => {
    return (
        <li className={styles.nav_list_item}>
            <NavLink exact to={to} className={styles.nav_link} activeClassName={styles.active}>{text}</NavLink>
        </li>
    )
};

export default NavbarMenuItem;
