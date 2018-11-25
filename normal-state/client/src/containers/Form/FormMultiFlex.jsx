import React, { Component } from 'react';
import './FormMultiFlex.less';
import * as coreUtils from '../../utils/coreUtils';
import { Button, Checkbox, DropDown, Label, LabelTextBox, Radio, TextArea } from '../../components/UI';

class FormMultiFlex extends Component {
    state = {
        errorMessage: '',
        firstNameText: '',
        lastNameText: '',
        emailText: '',
        phoneText: '',
        messageText: '',
        firstNameError: '',
        lastNameError: '',
        emailError: '',
        phoneError: '',
        messageError: '',
        dropDownSelected: null,
        radioSelected: null,
        checksSelected: []
    };

    constructor(props) {
        super(props);

        this.handleInputChange = this.handleInputChange.bind(this);
        this.handleDropDownChange = this.handleDropDownChange.bind(this);
        this.handleRadioChange = this.handleRadioChange.bind(this);
        this.handleCheckboxChange = this.handleCheckboxChange.bind(this);
        this.handleSubmitclick = this.handleSubmitclick.bind(this);
    }

    handleInputChange = (e) => {
        e.preventDefault();

        const textBoxType = e.currentTarget.dataset.id;
        const textBoxValue = e.target.value;

        this.setState({ [`${textBoxType}`]: textBoxValue });
    }

    handleDropDownChange = (e) => {
        this.setState({ dropDownSelected: e.target.value });
    }

    handleRadioChange = (e) => {
        const radioValue = e.target.value;

        this.setState({ radioSelected: radioValue });
    }

    handleCheckboxChange = (e) => {
        const checkBoxType = e.target.dataset.id;
        const checkBoxValue = e.target.checked;
        const { checksSelected } = this.state;
        let updatedChecksSelected = this.state.checksSelected;

        if (checkBoxValue) {
            if (updatedChecksSelected.findIndex(check => check === checkBoxType) < 0) {
                updatedChecksSelected.push({ key: checkBoxType });
            }
        }
        else {
            if (updatedChecksSelected.findIndex(check => check.key === checkBoxType) > -1) {
                updatedChecksSelected = updatedChecksSelected.filter(check => check.key !== checkBoxType);
            }
        }

        this.setState({
            checksSelected: coreUtils.cloneAndUpdateObject({
                oldObject: checksSelected,
                updatedProperties: updatedChecksSelected
            })
        });
    }

    handleSubmitclick = (e) => {
        e.preventDefault();

        this.setState({
            errorMessage: '',
            firstNameError: '',
            lastNameError: '',
            emailError: '',
            phoneError: '',
            messageError: ''
        });

        const { firstNameText,
            lastNameText,
            emailText,
            phoneText,
            messageText,
            dropDownSelected,
            radioSelected,
            checksSelected } = this.state;

        console.log(firstNameText, lastNameText, emailText, phoneText, messageText, dropDownSelected, radioSelected, checksSelected);

        if (!firstNameText) {
            this.setState({ errorMessage: 'Please insert first name' });
            this.setState({ firstNameError: 'Please insert first name' });
            return;
        }

        if (!lastNameText) {
            this.setState({ errorMessage: 'Please insert last name' });
            this.setState({ lastNameError: 'Please insert last name' });
            return;
        }

        if (!emailText) {
            this.setState({ errorMessage: 'Please insert email' });
            this.setState({ emailError: 'Please insert email' });
            return;
        }

        if (!phoneText) {
            this.setState({ errorMessage: 'Please insert phone' });
            this.setState({ phoneError: 'Please insert phone' });
            return;
        }

        if (!messageText) {
            this.setState({ errorMessage: 'Please insert message' });
            this.setState({ messageError: 'Please insert message' });
            return;
        }
    }

    render() {

        const { errorMessage,
            firstNameError,
            lastNameError,
            emailError,
            phoneError,
            messageError
        } = this.state;

        return (
            <div className="form-multi-container">
                <div className="form-container">
                    <div className="container">
                        <form>
                            <ul className="flex-outer">
                                <li>
                                    <LabelTextBox forType="first-name"
                                        title="First Name"
                                        id="firstNameText"
                                        inputType="text"
                                        classType=""
                                        placeHolder="Enter your first name here"
                                        onInputChange={this.handleInputChange}
                                        autoComplete="on"
                                        spellCheck={false}
                                        error={firstNameError} />
                                </li>
                                <li>
                                    <LabelTextBox forType="last-name"
                                        title="Last Name"
                                        id="lastNameText"
                                        inputType="text"
                                        classType=""
                                        placeHolder="Enter your last name here"
                                        onInputChange={this.handleInputChange}
                                        autoComplete="on"
                                        spellCheck={false}
                                        error={lastNameError} />
                                </li>
                                <li>
                                    <LabelTextBox forType="email"
                                        title="Email"
                                        id="emailText"
                                        inputType="email"
                                        classType=""
                                        placeHolder="Enter your email here"
                                        onInputChange={this.handleInputChange}
                                        autoComplete="on"
                                        spellCheck={false}
                                        error={emailError} />
                                </li>
                                <li>
                                    <LabelTextBox forType="phone"
                                        title="Phone"
                                        id="phoneText"
                                        inputType="phone"
                                        classType=""
                                        placeHolder="Enter your phone here"
                                        onInputChange={this.handleInputChange}
                                        autoComplete="on"
                                        spellCheck={false}
                                        error={phoneError} />
                                </li>
                                <li>
                                    <TextArea forType="message"
                                        title="Message"
                                        id="messageText"
                                        rows={6}
                                        classType=""
                                        placeHolder="Enter your message here"
                                        onInputChange={this.handleInputChange}
                                        autoComplete="on"
                                        spellCheck={false}
                                        error={messageError} />
                                </li>
                                <li>
                                    <DropDown forType="select"
                                        title="Select"
                                        id="select"
                                        options={[
                                            { value: 'brooklyn', title: 'Brooklyn' },
                                            { value: 'manhattan', title: 'Manhattan' },
                                            { value: 'queens', title: 'Queens' }
                                        ]}
                                        onDropDownChange={this.handleDropDownChange} />
                                </li>
                                <li>
                                    <Label forType="gender"
                                        title="Gender"
                                        labelClassType="" />
                                    <div className="radio">
                                        <Radio id="first"
                                            name="numbers"
                                            value="first"
                                            forType="first"
                                            title="First"
                                            onRadioChange={this.handleRadioChange}
                                        />
                                        <Radio id="second"
                                            name="numbers"
                                            value="second"
                                            forType="second"
                                            title="Second"
                                            onRadioChange={this.handleRadioChange}
                                        />
                                    </div>
                                </li>
                                <li>
                                    <p>Age</p>
                                    <ul className="flex-inner">
                                        <li>
                                            <Checkbox id="styled-checkbox-1"
                                                classType="styled-checkbox"
                                                value="value1"
                                                forType="styled-checkbox-1"
                                                title="23-23"
                                                onCheckboxChange={this.handleCheckboxChange}
                                                labelClassType="" />
                                        </li>
                                        <li>
                                            <Checkbox id="styled-checkbox-2"
                                                classType="styled-checkbox"
                                                value="value2"
                                                forType="styled-checkbox-2"
                                                title="23-23"
                                                onCheckboxChange={this.handleCheckboxChange}
                                                labelClassType="" />
                                        </li>
                                        <li>
                                            <Checkbox id="styled-checkbox-3"
                                                classType="styled-checkbox"
                                                value="value3"
                                                forType="styled-checkbox-3"
                                                title="23-23"
                                                onCheckboxChange={this.handleCheckboxChange}
                                                labelClassType="" />
                                        </li>
                                        <li>
                                            <Checkbox id="styled-checkbox-4"
                                                classType="styled-checkbox"
                                                value="value4"
                                                forType="styled-checkbox-4"
                                                title="23-23"
                                                onCheckboxChange={this.handleCheckboxChange}
                                                labelClassType="" />
                                        </li>
                                        <li>
                                            <Checkbox id="styled-checkbox-5"
                                                classType="styled-checkbox"
                                                value="value5"
                                                forType="styled-checkbox-5"
                                                title="23-23"
                                                onCheckboxChange={this.handleCheckboxChange}
                                                labelClassType="" />
                                        </li>
                                        <li>
                                            <Checkbox id="styled-checkbox-6"
                                                classType="styled-checkbox"
                                                value="value6"
                                                forType="styled-checkbox-6"
                                                title="23-23"
                                                onCheckboxChange={this.handleCheckboxChange}
                                                labelClassType="" />
                                        </li>
                                    </ul>
                                </li>
                                <li>
                                    <Button buttonType="submit"
                                        classType=""
                                        onClick={this.handleSubmitclick}
                                        title="Submit" />
                                </li>
                                {errorMessage &&
                                    <li>
                                        <div className="error-bottom">
                                            {errorMessage}
                                        </div>
                                    </li>
                                }
                            </ul>
                        </form>
                    </div>
                </div>
            </div>

        );
    }
}

export default FormMultiFlex;