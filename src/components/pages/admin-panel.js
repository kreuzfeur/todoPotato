//react
import React from 'react';
//components
import { HeaderContainer } from '../containers/';
import IsLoggedIn from '../isLoggedIn/';
import TopMenu from '../top-menu';
//router
import { Route } from 'react-router-dom';

const AdminPanelPage = () => {
    return (
        <IsLoggedIn>
            <HeaderContainer />
            <div className="row">
                <TopMenu />
            </div>
            <Route path='/adminPanel/addUser' render={() => <div>add</div>} />
            <Route path='/adminPanel/another' render={() => <div>an</div>} />
        </IsLoggedIn>
    )
}
export default AdminPanelPage;