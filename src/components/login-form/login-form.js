//react
import React, { Component } from 'react';
//components
import { withBibapi } from '../hoc';
import Loader from '../loader';
//redux
import { connect } from 'react-redux';
//actions
import * as actions from '../../actions';
//router
import { withRouter } from 'react-router-dom';
//styles
import './login-form.scss';

class LoginForm extends Component {
    state = {
        login: '',
        password: '',
        passwordFieldMessage: '',
        loginFieldMessage: '',
        serverMessage: '',
    }
    onLogin = (evt) => {
        const { login, password } = this.state
        const {fetchLoginFormPending, fetchLoginFormSuccess, fetchLoginFormError, updateToken} = this.props
        evt.preventDefault();
        fetchLoginFormPending();
        if (!login) return this.setState({ loginFieldMessage: 'Не может быть пустым' });
        if (!password) return this.setState({ passwordFieldMessage: 'Не может быть пустым' });
        this.props.bibapi.login(login, password)
            .then((response) => {
                if (response.status === 200) {
                    fetchLoginFormSuccess()
                    const token = response.data.token;
                    localStorage.setItem('token', token);
                    updateToken(token);
                    this.props.history.push('/');
                }
            })
            .catch(() => {
                fetchLoginFormError()
                this.setState({ serverMessage: 'Неправильный логин или пароль' });
            })
    }
    onLoginChange = (evt) => {
        this.setState({ login: evt.target.value, loginFieldMessage: '' })
    }
    onPasswordChange = (evt) => {
        this.setState({ password: evt.target.value, passwordFieldMessage: '' })
    }
    render() {
        const { login, password, passwordFieldMessage, loginFieldMessage, serverMessage } = this.state;
        const { loading } = this.props.loginForm;
        const loadingIndicator = (loading) ? <Loader/> : null;
        return (
            <form className="loginForm" onSubmit={this.onLogin}>
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
                            onChange={(evt) => this.onLoginChange(evt)}
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
                            onChange={(evt) => this.onPasswordChange(evt)}
                            value={password}>
                        </input>
                        <small className="form-text text-danger fieldMessage ">{passwordFieldMessage}</small>
                    </div>
                    <button type="submit" className={`btn btn-outline-success btn-block mt-2 $}`} disabled={(login && password) ? false : true}>Войти</button>
                    <small className="form-text text-danger text-center">{serverMessage}</small>
                </div>
            </form>
        )
    }
}
const mapStateToProps = (state) => {
    return {
        loginForm: state.elements.loginForm
    }
}
export default connect(mapStateToProps, actions)(withRouter(withBibapi(LoginForm)));
