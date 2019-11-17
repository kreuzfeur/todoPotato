//react
import React, { Component } from 'react';
//components
import { withBibapi } from '../hoc';
import Loader from '../loader';
import LoginForm from '../login-form/';
//redux
import { connect } from 'react-redux';
//actions
import {
    fetchLoginFormSuccess,
    fetchLoginFormPending,
    fetchLoginFormError,
    changePasswordInputValue,
    changeLoginInputValue,
    changePasswordFieldMessage,
    changeLoginFieldMessage
} from '../../actions';
//router
import { withRouter } from 'react-router-dom';
//services
import { UsersService } from '../../services';

const usersService = new UsersService();
class LoginFormContainer extends Component {
    componentDidMount() {
        document.title = 'Вход'
    }
    onLogin = (evt) => {
        evt.preventDefault();
        const { fetchLoginFormPending, fetchLoginFormSuccess, fetchLoginFormError, bibapi, history, changeLoginFieldMessage, changePasswordFieldMessage } = this.props;
        const { login, password } = this.props.loginForm;
        if (!login) return changeLoginFieldMessage();
        if (!password) return changePasswordFieldMessage();
        fetchLoginFormPending();
        bibapi.login(login, password)
            .then((response) => {
                const { status, data } = response;
                if (status === 200) {
                    fetchLoginFormSuccess()
                    const { token, user: { username, role } } = data;
                    localStorage.setItem('token', token);
                    localStorage.setItem('username', username);
                    localStorage.setItem('role', role);
                    history.push(`/${usersService.changeUrlByRole()}`);
                }
            })
            .catch(({ response }) => {
                if (response.data) {
                    fetchLoginFormError(response.data.error.message);
                }
            })
    }
    onLoginChange = (evt) => {
        this.props.changeLoginInputValue(evt.target.value)
    }
    onPasswordChange = (evt) => {
        this.props.changePasswordInputValue(evt.target.value)
    }
    changeDisabled = () => {
        const { login, password } = this.props.loginForm;
        if (login && password) {
            return false
        } else {
            return true
        }
    }
    render() {
        const { loading } = this.props.loginForm;
        const loadingIndicator = (loading) ? <Loader /> : null;
        return (
            <LoginForm
                loadingIndicator={loadingIndicator}
                loginForm={this.props.loginForm}
                changeDisabled={this.changeDisabled}
                onLogin={this.onLogin}
                onLoginChange={this.onLoginChange}
                onPasswordChange={this.onPasswordChange}
            />
        )
    }
}

const mapStateToProps = (state) => {
    return {
        loginForm: state.loginForm
    }
}
const mapDispatchToPRops = {
    fetchLoginFormSuccess,
    fetchLoginFormPending,
    fetchLoginFormError,
    changePasswordInputValue,
    changeLoginInputValue,
    changePasswordFieldMessage,
    changeLoginFieldMessage
}
export default connect(mapStateToProps, mapDispatchToPRops)(withRouter(withBibapi(LoginFormContainer)));
