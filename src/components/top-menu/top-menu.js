//react
import React from 'react';
//router
import {NavLink, withRouter} from 'react-router-dom';
//styles
import './top-menu.scss';

const TopMenu = () => {
    return (
        <nav className='col-12 leftMenu '>
            <ul className="nav nav-tabs">
                <li className="nav-item">
                    <NavLink className="nav-link" to="addUser" activeClassName='active' exact>Добавить пользователя</NavLink>
                </li>
                <li className="nav-item">
                    <NavLink className="nav-link" to="editUser" activeClassName='active' exact>Изменить пользователя</NavLink>
                </li>
                <li className="nav-item">
                    <NavLink className="nav-link" to="another" activeClassName='active' exact>Что-то еще</NavLink>
                </li>
            </ul>
        </nav>
    )
}
export default withRouter(TopMenu);