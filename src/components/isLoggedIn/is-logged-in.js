//react
import React from 'react';
//router
import { Redirect, withRouter } from 'react-router-dom';

const IsLoggedIn = ({ history, children }) => {
    const token = localStorage.getItem('token');
    if (!token) return <Redirect to='/login' />
    const path = history.location.pathname;
    const role = localStorage.getItem('role')
    if (path.indexOf(role) !== -1) {
        return children
    } else {
        return <Redirect to='/login' />
    }

}

export default withRouter(IsLoggedIn);