import React from 'react';
import './Header.less';
import { NavigationItem } from '../';

const Header = () => {
    return (
        <div className="nav">
            <div className="nav-header">
                <div className="nav-title">
                    JoGeek
            </div>
            </div>
            <div className="nav-btn">
                <label htmlFor="nav-check">
                    <span></span>
                    <span></span>
                    <span></span>
                </label>
            </div>
            <input type="checkbox" id="nav-check" />
            <div className="nav-links">
                <NavigationItem link="/" linkText="Github" active exact />
                <NavigationItem link="/" linkText="Stackoverflow" exact />
                <NavigationItem link="/" linkText="LinkedIn" exact />
                <NavigationItem link="/" linkText="Codepen" exact />
                <NavigationItem link="/" linkText="JsFiddle" exact />
            </div>
        </div>
    );
};

export default Header;