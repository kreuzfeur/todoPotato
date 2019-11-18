//react
import React from 'react';
//styles
import './add-user.scss';
import logo from '../../img/logoPutcko.jpg';

const AddUser = ({ onAddUser, loader, roleItems, serverMessageItems, login, password, passwordConfirmation, onLoginChange, onPasswordChange, onPasswordConfirmationChange, changeDisabled, onRoleChange}) => {
    return (
        <section className="addUser row">
            <div className="col-5 text-center">
                <img src={logo} alt="Логотип Пуцко" />
                <h1>Добавить пользователя</h1>
                <form className="m-2 jumbotron" onSubmit={(evt) => onAddUser(evt)}>
                    {loader}
                    <div className="row">
                        <div className="col">
                            <input type="text" className="form-control" placeholder="Логин" value={login} onChange={(evt) => onLoginChange(evt.target.value)} />
                        </div>
                        <div className="col">
                            <input type="password" className="form-control" placeholder="Пароль" value={password} onChange={(evt) => onPasswordChange(evt.target.value)} />
                        </div>
                        <div className="col">
                            <input type="password" className="form-control" placeholder="Пароль" value={passwordConfirmation} onChange={(evt) => onPasswordConfirmationChange(evt.target.value)} />
                        </div>
                        <div className="col">
                            <select id="inputState" className="form-control" onChange={(evt) => onRoleChange(evt.target.value)}>
                                {roleItems}
                            </select>
                        </div>
                        <div className="col">
                            <button type="submit" className="btn btn-success" disabled={changeDisabled()}>Добавить</button>
                        </div>
                        <div className="col-12">
                            {serverMessageItems}
                        </div>
                    </div>
                </form>
            </div>
        </section>
    )
}
export default AddUser;