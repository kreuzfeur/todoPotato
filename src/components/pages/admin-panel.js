//react
import React from 'react';
//components
import { HeaderContainer } from '../containers/';
import IsLoggedIn from '../isLoggedIn/';

const AdminPanelPage = () => {
    return (
        <IsLoggedIn>
            <HeaderContainer />
        </IsLoggedIn>
    )
}
export default AdminPanelPage;