//react
import React, { Component } from 'react';
//components
import AddUser from '../add-user';
import Loader from '../loader';
//services
import { withBibapi, withResponseHandle} from '../hoc';
//redux
import { connect } from 'react-redux';
import {
    fetchAddUserFormGetRolesPending,
    fetchAddUserFormGetRolesError,
    fetchAddUserFormGetRolesSuccess,
    fetchAddUserFormPending,
    fetchAddUserFormSuccess,
    fetchAddUserFormError,
    addUserFormLoginInputChange,
    addUserFormPasswordInputChange,
    addUserFormPasswordConfirmationInputChange,
    changeRole
} from '../../actions';

class AddUserContainer extends Component {
    componentDidMount() {
        document.title = 'Добавить пользователя';
        const { fetchAddUserFormGetRolesPending, fetchAddUserFormGetRolesError, fetchAddUserFormGetRolesSuccess, responseHandleSuccess } = this.props;
        fetchAddUserFormGetRolesPending()
        this.props.bibapi.getRoles()
            .then(response => {

                return fetchAddUserFormGetRolesSuccess(response)
            })
            .catch(({ response }) => {
                if (!response) return fetchAddUserFormGetRolesError('говно');
                if (response.status === 401 || response.status === 403) {
                    localStorage.clear();
                    return this.props.history.push('/login');
                }
                fetchAddUserFormGetRolesError(response.data.error.message)
            });
            
    }
    onAddUser = (evt) => {
        evt.preventDefault();
        const { fetchAddUserFormPending, fetchAddUserFormSuccess, fetchAddUserFormError, login, password, passwordConfirmation, roleId } = this.props;
        fetchAddUserFormPending()
        this.props.bibapi.addUser(login, password, passwordConfirmation, roleId)
            .then(response => fetchAddUserFormSuccess(response))
            .catch(({ response }) => {
  
                const { data: { error: { message } } } = response;
                fetchAddUserFormError(message);
            })

    }
    onLoginChange = (inputValue) => {
        this.props.addUserFormLoginInputChange(inputValue)
    }
    onPasswordChange = (inputValue) => {
        this.props.addUserFormPasswordInputChange(inputValue)
    }
    onPasswordConfrimationChange = (inputValue) => {
        this.props.addUserFormPasswordConfirmationInputChange(inputValue)
    }
    onRoleChange = (roleId) => {
        this.props.changeRole(roleId)
    }
    changeDisabled = () => {
        const { login, password, passwordConfirmation } = this.props;
        if (login && password && passwordConfirmation) {
            return false
        } else {
            return true
        }
    }
    render() {
        const { loading, roles, serverMessage, login, password, passwordConfirmation } = this.props;
        const loader = (loading) ? <Loader /> : null;
        // const roleItems = roles.map(({ role, id }) => {
        //     return (<option key={id} value={id}>{role}</option>)
        // })
        const roleItems = null
        let serverMessageItems = null;
        if (serverMessage) {
            for (const key in serverMessage) {
                serverMessageItems = serverMessage[key].map((err, id) => {
                    return <small className="form-text text-danger text-center" key={id}>{err}</small>
                })
            }
        }
        return (
            <AddUser
                onAddUser={this.onAddUser}
                loader={loader}
                roleItems={roleItems}
                serverMessageItems={serverMessageItems}
                login={login}
                password={password}
                passwordConfirmation={passwordConfirmation}
                onLoginChange={this.onLoginChange}
                onPasswordChange={this.onPasswordChange}
                onPasswordConfirmationChange={this.onPasswordConfrimationChange}
                changeDisabled={this.changeDisabled}
                onRoleChange={this.onRoleChange}
            />
        )
    }
}
const mapStateToProps = ({ addUserForm: { loading, roles, serverMessage, login, password, password_confirmation: passwordConfirmation, roleId } }) => {
    return {
        loading,
        roles,
        serverMessage,
        password,
        login,
        passwordConfirmation,
        roleId
    }
}
const mapDispatchToProps = {
    fetchAddUserFormGetRolesPending,
    fetchAddUserFormGetRolesError,
    fetchAddUserFormGetRolesSuccess,
    addUserFormLoginInputChange,
    addUserFormPasswordInputChange,
    addUserFormPasswordConfirmationInputChange,
    fetchAddUserFormPending,
    fetchAddUserFormSuccess,
    fetchAddUserFormError,
    changeRole
}
export default connect(mapStateToProps, mapDispatchToProps)(withResponseHandle(withBibapi(AddUserContainer)));