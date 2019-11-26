//react
import React from 'react';
//router
import {NavLink, withRouter} from 'react-router-dom';
//redux
import {connect} from 'react-redux';
//styles
import './top-menu.scss';

const TopMenu = (props) => {
    console.log(props.data)
    return (
        <nav className='col-12 topMenu '>
            <ul className="nav nav-tabs">
                <li className="nav-item">
                    <NavLink className="nav-link" to="/adminPanel/addUser" activeClassName='active' exact>Добавить пользователя</NavLink>
                </li>
                <li className="nav-item">
                    <NavLink className="nav-link" to="/adminPanel/editUser/page/1" activeClassName='active' exact isActive={(match, location) => location.pathname === '/adminPanel/editUser/page/' + props.data.page}>Изменить пользователя</NavLink>
                </li>
                <li className="nav-item">
                    <NavLink className="nav-link" to="/adminPanel/another" activeClassName='active' exact>Что-то еще</NavLink>
                </li>
            </ul>
        </nav>
    )
}
const mapStateToProps = ({editUser:{data}}) => {
    return{
        data
    }
}
export default connect(mapStateToProps)(withRouter(TopMenu));