import React from 'react';
import './TextBox.less';
import PropTypes from 'prop-types';

const propTypes = {
    id: PropTypes.string,
    inputType: PropTypes.string.isRequired,
    classType: PropTypes.string,
    placeHolder: PropTypes.string,
    onInputChange: PropTypes.func,
    autoComplete: PropTypes.string,
    spellCheck: PropTypes.bool,
    error: PropTypes.string
};

const defaultProps = {
    id: '',
    classType: '',
    placeHolder: '',
    onInputChange: null,
    autoComplete: 'off',
    spellCheck: false,
    error: ''
};

const TextBox = (props) => {
    return (
        <input id={props.id} data-id={props.id} type={props.inputType} className={props.classType || (props.error ? 'error' : null)}
            placeholder={props.placeHolder} onChange={props.onInputChange}
            autoComplete={props.autoComplete} spellCheck={props.spellCheck} />
    );
};

TextBox.propTypes = propTypes;
TextBox.defaultProps = defaultProps;

export default TextBox;