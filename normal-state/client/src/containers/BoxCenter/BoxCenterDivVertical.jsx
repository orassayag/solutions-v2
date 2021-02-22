import React, { Component } from 'react';
import { Box } from '../../components/UI';
import './BoxCenterDivVertical.less';

class BoxCenterDivVertical extends Component {
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
            <div className="container-vertical">
                <Box>I'm a box</Box>
            </div>
        );
    }
}

export default BoxCenterDivVertical;