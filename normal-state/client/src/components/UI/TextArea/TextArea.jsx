import React from 'react';
import './TextArea.less';
import PropTypes from 'prop-types';
import { Auxiliary } from '../../../hoc';

const propTypes = {
    forType: PropTypes.string.isRequired,
    title: PropTypes.string,
    id: PropTypes.string,
    rows: PropTypes.number,
    classType: PropTypes.string,
    placeHolder: PropTypes.string,
    onInputChange: PropTypes.func,
    autoComplete: PropTypes.string,
    spellCheck: PropTypes.bool,
    error: PropTypes.string
};

const defaultProps = {
    rows: 6,
    title: '',
    id: '',
    classType: '',
    placeHolder: '',
    onInputChange: null,
    autoComplete: 'off',
    spellCheck: false,
    error: ''
};

const TextArea = (props) => {
    return (
        <Auxiliary>
            <label htmlFor={props.forType}>{props.title}</label>
            <textarea id={props.id} data-id={props.id} rows={props.rows} className={props.classType || (props.error ? 'error' : null)}
                placeholder={props.placeHolder} onChange={props.onInputChange}
                autoComplete={props.autoComplete} spellCheck={props.spellCheck}></textarea>
        </Auxiliary>
    );
};

TextArea.propTypes = propTypes;
TextArea.defaultProps = defaultProps;

export default TextArea;