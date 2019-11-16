//react
import React from 'react';
//router
import { Link } from 'react-router-dom';
//styles
import './header.scss';

const Header = ({ data={user:'user', panelType: 'Панель пользователя'}, clearLocalStorage }) => {
    const {user, panelType} = data;
    return (
        <header className="row bg-primary text-white">
            <div className="col-4 headerLogo">
                <Link to="/">
                    <img src="./img/logo.png" alt="main logo" />
                </Link>
            </div>
            <div className="col-4 headerPanelType">
                <h2>{panelType}</h2>
            </div>
            <div className="col-4 headerUserInfo">
                <span>Пользователь: {user}</span>
                <button className="btn btn-primary" onClick={clearLocalStorage}>Выход</button>
            </div>
        </header>
    )
}
export default Header;