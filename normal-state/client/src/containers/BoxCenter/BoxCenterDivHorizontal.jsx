import React, { Component } from 'react';
import { Box } from '../../components/UI';
import './BoxCenterDivHorizontal.less';

class BoxCenterDivHorizontal extends Component {
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
            <div className="container-horizontal">
                <Box>I'm a box</Box>
            </div>
        );
    }
}

export default BoxCenterDivHorizontal;