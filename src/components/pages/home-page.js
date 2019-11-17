//react
import React from 'react';
//services
import { UsersService } from '../../services';
//router
import { Redirect } from 'react-router-dom';

const usersService = new UsersService();
const HomePage = () => {
    return (
        <Redirect to={`/${usersService.changeUrlByRole()}`} />
    )
}
export default HomePage;