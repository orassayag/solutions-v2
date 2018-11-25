import React, { Component } from 'react';
import './TopMenuFlex.less';
import { Header } from '../../components/Navigation';

class TopMenuFlex extends Component {
    state = {
    };

/*     constructor(props) {
        super(props);

        this.handleAuthenticationInputChange = this.handleAuthenticationInputChange.bind(this);
    }

    handleAuthenticationInputChange = (e) => {
        e.preventDefault();
    } */

    render() {
/*         const { state } = this; */

        return (
            <div>
                <Header />
            </div>
        );
    }
}

export default TopMenuFlex;