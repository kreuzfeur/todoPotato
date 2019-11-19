//react
import React, { Component } from 'react';
//components
import AddUser from '../add-user';
import Loader from '../loader';
import {ResponseHandlingMessagesContainer} from '../../components/containers';
//services
import { withBibapi, withResponseHandle, withValidatorService } from '../hoc';
//redux
import { connect } from 'react-redux';
import {
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
        const { fetchAddUserFormPending, fetchAddUserFormError, fetchAddUserFormGetRolesSuccess, responseHandleSuccess, responseHandleError } = this.props;
        fetchAddUserFormPending()
        this.props.bibapi.getRoles()
            .then(response => {
                const data = responseHandleSuccess(response)
                return fetchAddUserFormGetRolesSuccess(data)
            })
            .catch((response) => {
                const data = responseHandleError(response);
                fetchAddUserFormError(data)
            });

    }
    onAddUser = (evt) => {
        evt.preventDefault();
        const { fetchAddUserFormPending, fetchAddUserFormSuccess, fetchAddUserFormError, login, password, passwordConfirmation, roleId, responseHandleSuccess, responseHandleError } = this.props;
        fetchAddUserFormPending()
        this.props.bibapi.addUser(login, password, passwordConfirmation, roleId)
            .then(response => {
                const data = responseHandleSuccess(response);
                fetchAddUserFormSuccess(data);
            })
            .catch((response) => {
                const data = responseHandleError(response)
                fetchAddUserFormError(data);
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
    render() {
        const { loading, roles, login, password, responseErrorMessage, responseSuccessMessage, passwordConfirmation } = this.props;
        const loader = (loading) ? <Loader /> : null;
        const roleItems = roles.map(({ role, id }) => {
            return (<option key={id} value={id}>{role}</option>)
        })
        const changeDisabled = this.props.validator.isEmpty([login, password, passwordConfirmation]);
        return (
            <AddUser
                onAddUser={this.onAddUser}
                loader={loader}
                roleItems={roleItems}
                login={login}
                password={password}
                passwordConfirmation={passwordConfirmation}
                onLoginChange={this.onLoginChange}
                onPasswordChange={this.onPasswordChange}
                onPasswordConfirmationChange={this.onPasswordConfrimationChange}
                changeDisabled={changeDisabled}
                onRoleChange={this.onRoleChange}
            >
                <ResponseHandlingMessagesContainer errors={responseErrorMessage} success={responseSuccessMessage} />
            </AddUser>
        )
    }
}
const mapStateToProps = ({ addUserForm: { loading, roles, responseErrorMessage, responseSuccessMessage, login, password, password_confirmation: passwordConfirmation, roleId } }) => {
    return {
        loading,
        roles,
        passwordConfirmation,
        password,
        login,
        responseErrorMessage,
        responseSuccessMessage,
        roleId
    }
}
const mapDispatchToProps = {
    fetchAddUserFormGetRolesSuccess,
    addUserFormLoginInputChange,
    addUserFormPasswordInputChange,
    addUserFormPasswordConfirmationInputChange,
    fetchAddUserFormPending,
    fetchAddUserFormSuccess,
    fetchAddUserFormError,
    changeRole
}
export default connect(mapStateToProps, mapDispatchToProps)(withResponseHandle(withBibapi(withValidatorService(AddUserContainer))));