import React from 'react';
import './Radio.less';
import PropTypes from 'prop-types';
import { Auxiliary } from '../../../hoc';

const propTypes = {
    id: PropTypes.string,
    name: PropTypes.string,
    value: PropTypes.string,
    forType: PropTypes.string.isRequired,
    title: PropTypes.string,
    onRadioChange: PropTypes.func
};

const defaultProps = {
    id: '',
    name: '',
    value: '',
    title: '',
    onRadioChange: null
};

const Radio = (props) => {
    return (
        <Auxiliary>
            <input id={props.id} data-id={props.id} type="radio" name={props.name} value={props.value} onChange={props.onRadioChange} />
            <label htmlFor={props.forType}>{props.title}</label>
        </Auxiliary>
    );
};

Radio.propTypes = propTypes;
Radio.defaultProps = defaultProps;

export default Radio;