import React, { Component } from 'react';
import './FooterMenu.less';
import { Footer } from '../../components/Navigation';

class FooterMenu extends Component {
    state = {
    };

    constructor(props) {
        super(props);

        this.handleAuthenticationInputChange = this.handleAuthenticationInputChange.bind(this);
    }

    handleAuthenticationInputChange = (e) => {
        e.preventDefault();
    }

    render() {
/*         const { state } = this; */

        return (
            <div className="container-footer">
                <div className="main">
                    <h1>Bottom Navigation Bar</h1>
                    <p>Some text some text some text.</p>
                </div>
                <Footer />
            </div>
        );
    }
}

export default FooterMenu;