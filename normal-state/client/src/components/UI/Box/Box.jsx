import React from 'react';
import PropTypes from 'prop-types';
import './Box.less';

const propTypes = {
    children: PropTypes.node.isRequired
};

const defaultProps = {
};

const BoxButton = (props) => {
    return (
        <div className="box">
            {props.children}
        </div>
    );
};

BoxButton.propTypes = propTypes;
BoxButton.defaultProps = defaultProps;

export default BoxButton;