//react
import React from 'react';
//router
import { Link } from 'react-router-dom';
//styles
import './header.scss';

const Header = ({ data, clearLocalStorage, installPanelType }) => {
    const {user, role} = data;
    return (
        <header className="row bg-success text-white">
            <div className="col-4 headerLogo">
                <Link to="/">
                    <img src="./img/logo.png" alt="main logo" />
                </Link>
            </div>
            <div className="col-4 headerPanelType">
                <h2>{installPanelType(role)}</h2>
            </div>
            <div className="col-4 headerUserInfo">
                <span>Пользователь: {user}</span>
                <button className="btn btn-success" onClick={clearLocalStorage}>Выход</button>
            </div>
        </header>
    )
}
export default Header;