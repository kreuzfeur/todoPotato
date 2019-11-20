//react
import React from 'react';
//components
import { HeaderContainer, AddUserContainer } from '../containers/';
import IsLoggedIn from '../isLoggedIn/';
import TopMenu from '../top-menu';
import EditUser from '../edit-user/';
//router
import { Route, Redirect } from 'react-router-dom';

const AdminPanelPage = () => {
    document.titel = 'Панель администратор';
    return (
        <IsLoggedIn>
            <HeaderContainer />
            <div className="row">
                <TopMenu />
            </div>
            <Redirect to='/adminPanel/addUser' />
            <Route path='/adminPanel/addUser' component={AddUserContainer} exact/>
            <Route path='/adminPanel/editUser/' component={EditUser}/>
            <Route path='/adminPanel/another' render={() => <div>another</div>} />       
        </IsLoggedIn>
    )
}
export default AdminPanelPage;