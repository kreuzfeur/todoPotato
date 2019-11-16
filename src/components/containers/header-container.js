//react
import React, { Component } from 'react';
//router
import { withRouter } from 'react-router-dom';
//components
import Header from '../header';
import { withBibapi } from '../hoc';

class HeaderContainer extends Component {
    clearLocalStorage = () => {
        localStorage.clear();
        this.props.history.push('/login');
    };
    render() {
        return (
            <Header clearLocalStorage={this.clearLocalStorage} />
        )
    }
}
export default withRouter(withBibapi(HeaderContainer));