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
    }
    installPanelType = (role) => {
        if(role === 'admin') {
            return 'Панель администратора'
        } else {
            return 'Панель пользователя'
        }
    }
    render() {
        const data = {
            user: localStorage.getItem('username'),
            role: localStorage.getItem('role')
        }
        return (
            <Header clearLocalStorage={this.clearLocalStorage} installPanelType={this.installPanelType} data={data}/>
        )
    }
}
export default withRouter(withBibapi(HeaderContainer));