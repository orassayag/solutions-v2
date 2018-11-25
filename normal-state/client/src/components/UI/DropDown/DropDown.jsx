import React from 'react';
import './DropDown.less';
import PropTypes from 'prop-types';
import { Auxiliary } from '../../../hoc';

const propTypes = {
    forType: PropTypes.string.isRequired,
    title: PropTypes.string,
    id: PropTypes.string,
    options: PropTypes.arrayOf(PropTypes.shape({
        value: PropTypes.string.isRequired,
        title: PropTypes.string.isRequired
    })).isRequired,
    onDropDownChange: PropTypes.func
};

const defaultProps = {
    title: '',
    id: '',
    onDropDownChange: null
};

const DropDown = (props) => {
    return (
        <Auxiliary>
            <label htmlFor={props.forType}>{props.title}</label>
            <div className="select-dropdown">
                <select id={props.id} data-id={props.id} onChange={props.onDropDownChange}>
                    {props.options.map(o => (<option key={o.value} value={o.value}>{o.title}</option>))}
                </select>
            </div>
        </Auxiliary>
    );
};

DropDown.propTypes = propTypes;
DropDown.defaultProps = defaultProps;

export default DropDown;