//react
import React from 'react';
//components
import { HeaderContainer } from '../containers/';
import IsLoggedIn from '../isLoggedIn/';
import TopMenu from '../top-menu';
//router
import { Route, Redirect } from 'react-router-dom';
//components
import {AddUserContainer} from '../containers';

const AdminPanelPage = () => {
    document.titel = 'Панель администратор';
    return (
        <IsLoggedIn>
            <HeaderContainer />
            <div className="row">
                <TopMenu />
            </div>
            <Redirect to='/adminPanel/addUser' />
            <Route path='/adminPanel/addUser' component={AddUserContainer} />
            <Route path='/adminPanel/another' render={() => <div>another</div>} />
            <Route path='/adminPanel/editUser' render={() => <div>Edit user</div>} />
        </IsLoggedIn>
    )
}
export default AdminPanelPage;