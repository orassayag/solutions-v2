import React, { Component } from 'react';
import './FormLogin.less';
import { Button, Checkbox, LabelTextBox } from '../../components/UI';

class FormLogin extends Component {
    state = {
        errorMessage: '',
        emailText: '',
        passwordText: '',
        emailError: '',
        passwordError: '',
        rememberMe: false
    };

    constructor(props) {
        super(props);

        this.handleInputChange = this.handleInputChange.bind(this);
        this.handleCheckboxChange = this.handleCheckboxChange.bind(this);
        this.handleSubmitclick = this.handleSubmitclick.bind(this);
    }

    handleInputChange = (e) => {
        e.preventDefault();

        const textBoxType = e.currentTarget.dataset.id;
        const textBoxValue = e.target.value;

        this.setState({ [`${textBoxType}`]: textBoxValue });
    }

    handleCheckboxChange = (e) => {
        this.setState({ rememberMe: e.target.checked });
    }

    handleSubmitclick = (e) => {
        e.preventDefault();

        this.setState({
            errorMessage: '',
            emailError: '',
            passwordError: ''
        });

        const { emailText,
            passwordText,
            rememberMe } = this.state;

        console.log(emailText, passwordText, rememberMe);

        if (!emailText) {
            this.setState({ errorMessage: 'Please insert email' });
            this.setState({ emailError: 'Please insert email' });
            return;
        }

        if (!passwordText) {
            this.setState({ errorMessage: 'Please insert password' });
            this.setState({ passwordError: 'Please insert password' });
            return;
        }
    }

    render() {

        const { errorMessage,
            emailError,
            passwordError
        } = this.state;

        return (
            <div className="form-login">
                <div className="form-container">
                    <div className="container">
                        <form>
                            <ul className="flex-outer">
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
                                    <LabelTextBox forType="password"
                                        title="Password"
                                        id="passwordText"
                                        inputType="password"
                                        classType=""
                                        placeHolder="Enter your password here"
                                        onInputChange={this.handleInputChange}
                                        autoComplete="on"
                                        spellCheck={false}
                                        error={passwordError} />
                                </li>
                                <li>
                                    <p></p>
                                    <ul className="flex-inner">
                                        <li>
                                            <Checkbox id="styled-checkbox-1"
                                                classType="styled-checkbox"
                                                value="value1"
                                                forType="styled-checkbox-1"
                                                title="Remember me"
                                                onCheckboxChange={this.handleCheckboxChange}
                                                labelClassType="remember-me" />
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

export default FormLogin;