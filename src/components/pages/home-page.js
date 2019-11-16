//react
import React from 'react';
//components
import { HeaderContainer } from '../containers/';
import IsLoggedIn from '../isLoggedIn/';

const HomePage = () => {
    return (
        <IsLoggedIn>
            <HeaderContainer />
        </IsLoggedIn>
    )
}
export default HomePage;