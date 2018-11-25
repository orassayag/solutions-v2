import React from 'react';
import './LabelTextBox.less';
import PropTypes from 'prop-types';
import { Auxiliary } from '../../../hoc';
import { Label, TextBox } from '../';

const propTypes = {
    forType: PropTypes.string.isRequired,
    title: PropTypes.string,
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
    title: '',
    id: '',
    classType: '',
    placeHolder: '',
    onInputChange: null,
    autoComplete: 'off',
    spellCheck: false,
    error: ''
};

const LabelTextBox = (props) => {
    return (
        <Auxiliary>
            <Label forType={props.forType}
                title={props.title}
                labelClassType="" />
            <TextBox id={props.id}
                inputType={props.inputType}
                classType={props.classType}
                placeHolder={props.placeHolder}
                onInputChange={props.onInputChange}
                autoComplete={props.autoComplete}
                spellCheck={props.spellCheck}
                error={props.error} />
        </Auxiliary>
    );
};

LabelTextBox.propTypes = propTypes;
LabelTextBox.defaultProps = defaultProps;

export default LabelTextBox;