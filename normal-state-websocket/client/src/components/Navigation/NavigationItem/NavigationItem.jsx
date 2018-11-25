import React from 'react';
import PropTypes from 'prop-types';
import { NavLink } from 'react-router-dom';

const propTypes = {
    link: PropTypes.string.isRequired,
    linkText: PropTypes.string.isRequired,
    exact: PropTypes.bool.isRequired,
    active: PropTypes.bool
};

const defaultProps = {
    active: false
};

const NavigationItem = (props) => {
    return (
        <NavLink to={props.link} exact={props.exact} className={props.active ? 'active' : null} >{props.linkText}</NavLink>
    );
};

NavigationItem.propTypes = propTypes;
NavigationItem.defaultProps = defaultProps;

export default NavigationItem;