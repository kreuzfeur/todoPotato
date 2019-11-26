//react
import React from 'react';
//components
import { HeaderContainer, AddUserContainer, EditUserContainer } from '../containers/';
import IsLoggedIn from '../isLoggedIn/';
import TopMenu from '../top-menu';
//router
import { Route, Redirect } from 'react-router-dom';

const AdminPanelPage = () => {
    document.title = 'Панель администратора';
    return (
        <IsLoggedIn>
            <HeaderContainer />
            <div className="row">
                <TopMenu />
            </div>
            <Route path='/adminPanel' render={() => <Redirect to={'/adminPanel/addUser'}/>} exact/>
            <Route path='/adminPanel/addUser' component={AddUserContainer} exact/>
            <Route path='/adminPanel/editUser/page/:id?' component={EditUserContainer} />
            <Route path='/adminPanel/another' render={() => <div>another</div>} />       
        </IsLoggedIn>
    )
}
export default AdminPanelPage;