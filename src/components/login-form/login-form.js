//react
import React from 'react';
//styles
import './login-form.scss';

const LoginForm = ({loginForm, loadingIndicator, changeDisabled, onLogin, onLoginChange, onPasswordChange}) => {
    const { login, password, passwordFieldMessage, loginFieldMessage, serverMessage } = loginForm;
    return (
        <form className="loginForm" onSubmit={onLogin}>
            <div className='formContainer'>
                {loadingIndicator}
                <img src="./img/logoPutcko.jpg" alt="logo putcko" className='mb-2 mt-2' />
                <div className='form-group mb-0'>
                    <label htmlFor="loginField">Логин:</label>
                    <input
                        type="text"
                        className="form-control"
                        id="loginField"
                        placeholder="Введите логин"
                        onChange={(evt) => onLoginChange(evt)}
                        value={login}>
                    </input>
                    <small className="form-text text-danger fieldMessage ">{loginFieldMessage}</small>
                </div>
                <div className='form-group mb-0'>
                    <label htmlFor="passwordField">Пароль:</label>
                    <input
                        type="password"
                        className="form-control"
                        id="passwordField"
                        placeholder="Введите пароль"
                        onChange={(evt) => onPasswordChange(evt)}
                        value={password}>
                    </input>
                    <small className="form-text text-danger fieldMessage ">{passwordFieldMessage}</small>
                </div>
                <button type="submit" className="btn btn-outline-success btn-block mt-2" disabled={changeDisabled()}>Войти</button>
                <small className="form-text text-danger text-center">{serverMessage}</small>
            </div>
        </form>
    )
}

export default LoginForm;
