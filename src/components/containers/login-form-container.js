//react
import React, { Component } from 'react';
//components
import { withBibapi, withResponseHandle } from '../hoc';
import Loader from '../loader';
import LoginForm from '../login-form/';
import {ResponseHandlingMessagesContainer} from '../containers';
//redux
import { connect } from 'react-redux';
//actions
import {
    fetchLoginFormSuccess,
    fetchLoginFormPending,
    fetchLoginFormError,
    changePasswordInputValue,
    changeLoginInputValue
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
        const { fetchLoginFormPending, fetchLoginFormSuccess, fetchLoginFormError, bibapi, history, responseHandleSuccess, responseHandleError } = this.props;
        const { login, password } = this.props.loginForm;
        fetchLoginFormPending();
        bibapi.login(login, password)
            .then((response) => {
                const data = responseHandleSuccess(response);
                fetchLoginFormSuccess()
                const { token, user: { username, role } } = data;
                localStorage.setItem('token', token);
                localStorage.setItem('username', username);
                localStorage.setItem('role', role);
                history.push(`/${usersService.changeUrlByRole()}`);
            })
            .catch((response) => {
                const errorMessage = responseHandleError(response)
                fetchLoginFormError(errorMessage);
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
        const { loading, responseErrorMessage, responseSuccessMessage } = this.props.loginForm;
        const loadingIndicator = (loading) ? <Loader /> : null;
        return (
            <div>
                <ResponseHandlingMessagesContainer errors={responseErrorMessage} success={responseSuccessMessage}/>
                <LoginForm
                    loadingIndicator={loadingIndicator}
                    loginForm={this.props.loginForm}
                    changeDisabled={this.changeDisabled}
                    onLogin={this.onLogin}
                    onLoginChange={this.onLoginChange}
                    onPasswordChange={this.onPasswordChange}
                />
            </div>
        )
    }
}

const mapStateToProps = ({loginForm}) => {
    return {
        loginForm
    }
}
const mapDispatchToPRops = {
    fetchLoginFormSuccess,
    fetchLoginFormPending,
    fetchLoginFormError,
    changePasswordInputValue,
    changeLoginInputValue,
}
export default connect(mapStateToProps, mapDispatchToPRops)(withRouter(withResponseHandle(withBibapi(LoginFormContainer))));
