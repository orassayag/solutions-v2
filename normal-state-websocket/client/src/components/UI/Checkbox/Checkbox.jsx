import React from 'react';
import './Checkbox.less';
import PropTypes from 'prop-types';
import { Auxiliary } from '../../../hoc';

const propTypes = {
    id: PropTypes.string,
    classType: PropTypes.string,
    value: PropTypes.string,
    forType: PropTypes.string.isRequired,
    title: PropTypes.string,
    onCheckboxChange: PropTypes.func,
    labelClassType: PropTypes.string
};

const defaultProps = {
    title: '',
    id: '',
    onCheckboxChange: null,
    labelClassType: ''
};

const Checkbox = (props) => {
    return (
        <Auxiliary>
            <input id={props.id} data-id={props.id} className={props.classType} type="checkbox" value={props.value} onChange={props.onCheckboxChange} />
            <label htmlFor={props.forType} className={props.labelClassType}>{props.title}</label>
        </Auxiliary>
    );
};

Checkbox.propTypes = propTypes;
Checkbox.defaultProps = defaultProps;

export default Checkbox;