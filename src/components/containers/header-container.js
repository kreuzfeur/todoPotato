//react
import React, { Component } from 'react';
//components
import Header from '../header';
import { withBibapi } from '../hoc';

class HeaderContainer extends Component{
    componentDidMount() {
        this.props.bibapi.getUser()
    }
    clearLocalStorage = () => localStorage.clear();
    render() {
        return (
            <Header clearLocalStorage={this.clearLocalStorage}/>
        )
    }
}
export default withBibapi(HeaderContainer);