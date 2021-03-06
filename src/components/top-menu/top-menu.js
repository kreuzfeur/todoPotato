//react
import React from 'react';
//router
import { NavLink, withRouter } from 'react-router-dom';
//styles
import './top-menu.scss';

const TopMenu = () => {
    return (
        <nav className='col-12 topMenu '>
            <ul className="nav nav-tabs">
                <li className="nav-item">
                    <NavLink className="nav-link" to="/adminPanel/addUser" activeClassName='active' exact>Добавить пользователя</NavLink>
                </li>
                <li className="nav-item">
                    <NavLink className="nav-link" to="/adminPanel/editUser" activeClassName='active'>Изменить пользователя</NavLink>
                </li>
                <li className="nav-item">
                    <NavLink className="nav-link" to="/adminPanel/works" activeClassName='active' exact>Работы</NavLink>
                </li>
                <li className="nav-item">
                    <NavLink className="nav-link" to="/adminPanel/shipment" activeClassName='active' exact>Отгрузки</NavLink>
                </li>
                <li className="nav-item">
                    <NavLink className="nav-link" to="/adminPanel/summary" activeClassName='active' exact>Производственная сводка</NavLink>
                </li>
            </ul>
        </nav>
    )
}

export default withRouter(TopMenu);