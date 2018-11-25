import React, { Component } from 'react';
import { Auxiliary } from '../';
import PropTypes from 'prop-types';

class Layout extends Component {
    render() {
        return (
            <Auxiliary>
                {this.props.children}
            </Auxiliary>
        );
    }
}

Layout.propTypes = {
    children: PropTypes.node
};

export default Layout;