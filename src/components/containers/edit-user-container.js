//react
import React, { Component } from 'react';
//redux
import { connect } from 'react-redux';
import { editUserDataPending, editUserDataSuccess, editUserGetGlobalRolesSuccess, editUserDataError, editUserDeleteUser } from '../../actions';
//services
import { withBibapi, withResponseHandle } from '../hoc';
//axios
import axios from 'axios';
//components
import Loader from '../loader';
import { ResponseHandlingMessagesContainer } from '../containers';
import EditUserRow from '../edit-user/edit-user-row/';
//styles
import EditUser from '../edit-user/edit-user';

class EditUserContainer extends Component {
    componentDidMount() {
        const { bibapi, responseHandleSuccess, responseHandleError, editUserDataPending, editUserDataSuccess, editUserGetGlobalRolesSuccess, editUserDataError } = this.props;
        const { getRoles, getUsers } = bibapi;
        editUserDataPending();
        axios.all([
            getUsers(),
            getRoles()
        ])
            .then(([usersDataResponse, rolesDataResponse]) => {
                const rolesData = responseHandleSuccess(rolesDataResponse);
                editUserGetGlobalRolesSuccess(rolesData)
                const usersData = responseHandleSuccess(usersDataResponse);
                editUserDataSuccess(usersData)
            })
            .catch(response => {
                editUserDataError();
                const errorData = responseHandleError(response);
                editUserDataError(errorData);
            })
    }
    onDelete = (userId) => {
        const { bibapi, responseHandleSuccess, responseHandleError, editUserDeleteUser, editUserDataError, editUserDataSuccess } = this.props;
        bibapi.deleteUser(userId)
            .then(response => {
                const data = responseHandleSuccess(response);
                editUserDeleteUser(userId);
                // editUserDataSuccess(undefined, data);
            })
            .catch(response => {
                const errorData = responseHandleError(response);
                editUserDataError(errorData);
            })
    }
    onSave = (userId) => {
        console.log(userId)
    }
    render() {
        const { loading, data, globalRoles, responseErrorMessage, responseSuccessMessage } = this.props;
        console.log(responseSuccessMessage)
        const loader = (loading) ? <Loader /> : null;
        const users = [];
        const options = globalRoles.map(({ id, role }) => {
            return {
                label: role,
                value: id
            }
        })
        if (!loading) {
            data.users.forEach(user => {
                const { id, username, role } = user;
                users.push(
                    <EditUserRow
                        key={id}
                        role={role}
                        username={username}
                        options={options}
                        id={id}
                        onDelete={this.onDelete}
                        onSave={this.onSave}
                    />
                )
            });
        }
        return (
            <EditUser loader={loader} users={users}>
                <ResponseHandlingMessagesContainer errors={responseErrorMessage} success={responseSuccessMessage} />
            </EditUser>
        )
    }

}
const mapStateToProps = ({ editUser: { loading, data, globalRoles, responseErrorMessage, responseSuccessMessage } }) => {
    return {
        loading,
        data,
        globalRoles,
        responseErrorMessage,
        responseSuccessMessage
    }
}
const mapDispatchToProps = {
    editUserDataPending,
    editUserDataSuccess,
    editUserGetGlobalRolesSuccess,
    editUserDataError,
    editUserDeleteUser
}
export default connect(mapStateToProps, mapDispatchToProps)(withResponseHandle(withBibapi(EditUserContainer)));