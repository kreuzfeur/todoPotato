//react
import React from 'react';
//components
import { HeaderContainer } from '../containers/';
import IsLoggedIn from '../isLoggedIn/';

const UserPanelPage = () => {
    document.title = 'Панель пользователя';
    return (
        <IsLoggedIn>
            <HeaderContainer />
        </IsLoggedIn>
    )
}
export default UserPanelPage;