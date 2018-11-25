import React from 'react';
import './Label.less';
import PropTypes from 'prop-types';

const propTypes = {
    forType: PropTypes.string.isRequired,
    title: PropTypes.string
};

const defaultProps = {
    title: ''
};

const Label = (props) => {
    return (
        <label htmlFor={props.forType}>{props.title}</label>
    );
};

Label.propTypes = propTypes;
Label.defaultProps = defaultProps;

export default Label;