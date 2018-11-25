import React from 'react';
import './Footer.less';
import { NavigationItem } from '../';

const Footer = () => {
    return (
        <div className="navbar">
            <NavigationItem link="/" linkText="Home" active exact />
            <NavigationItem link="/" linkText="News" exact />
            <NavigationItem link="/" linkText="Contact" exact />
        </div>
    );
};

export default Footer;