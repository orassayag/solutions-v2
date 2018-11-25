import React from 'react';
import './Button.less';
import PropTypes from 'prop-types';

const propTypes = {
    buttonType: PropTypes.string.isRequired,
    classType: PropTypes.string,
    onClick: PropTypes.func.isRequired,
    title: PropTypes.string.isRequired
};

const defaultProps = {
};

const Button = (props) => {
    return (
        <button type={props.buttonType} className={props.classType} onClick={props.onClick} title={props.title}>{props.title}</button>
    );
};

Button.propTypes = propTypes;
Button.defaultProps = defaultProps;

export default Button;