//react
import React, { Component } from 'react';
//redux
import { connect } from 'react-redux';
import { editUserDataPending, editUserDataSuccess, editUserGetGlobalRolesSuccess, editUserDataError, editUserDeleteUser, editUserSuccessMessage } from '../../actions';
//services
import { withBibapi, withResponseHandle } from '../hoc';
//axios
import axios from 'axios';
//components
import Loader from '../loader';
import { ResponseHandlingMessagesContainer } from '../containers';
import EditUserRow from '../edit-user/edit-user-row/';
import PagePaginator from '../page-paginator';
//router
import { Redirect } from 'react-router-dom';
//styles
import EditUser from '../edit-user/edit-user';


class EditUserContainer extends Component {
    getAllUsers = (page = 1) => {
        const { bibapi, responseHandleSuccess, responseHandleError, editUserDataPending, editUserDataSuccess, editUserGetGlobalRolesSuccess, editUserDataError } = this.props;
        const { getRoles, getUsers } = bibapi;
        editUserDataPending();
        axios.all([
            getUsers(page),
            getRoles()
        ])
            .then(([usersDataResponse, rolesDataResponse]) => {
                const rolesData = responseHandleSuccess(rolesDataResponse);
                const usersData = responseHandleSuccess(usersDataResponse);
                editUserGetGlobalRolesSuccess(rolesData);
                editUserDataSuccess(usersData);
            })
            .catch(response => {
                editUserDataError();
                const errorData = responseHandleError(response);
                editUserDataError(errorData);
            })
    }
    componentDidMount() {
        const page = this.props.match.params.id;
        this.getAllUsers(page);
    }
    componentDidUpdate(prevProps) {
        if (this.props.match.params.id !== prevProps.match.params.id) {
            this.getAllUsers(this.props.match.params.id);
        }
    }
    onDelete = (userId) => {
        const { bibapi, responseHandleSuccess, responseHandleError, editUserDeleteUser, editUserDataError, editUserSuccessMessage } = this.props;
        bibapi.deleteUser(userId)
            .then(response => {
                const page = this.props.match.params.id ;
                const data = responseHandleSuccess(response);
                editUserDeleteUser(userId);
                editUserSuccessMessage(data);
                this.getAllUsers(page)
            })
            .catch(response => {
                const errorData = responseHandleError(response);
                editUserDataError(errorData);
            })
    }
    onSave = ({ password, passwordConfirmation, userId, roleId }) => {
        const { editUserDataError, bibapi, responseHandleError, editUserSuccessMessage, responseHandleSuccess } = this.props;
        if (password === passwordConfirmation) {
            bibapi.editUser(userId, password, passwordConfirmation, roleId)
                .then(response => {
                    const data = responseHandleSuccess(response);
                    editUserSuccessMessage(`Пользователь ${data.user.username} успешно изменен`);
                })
                .catch(response => {
                    const errorData = responseHandleError(response);
                    editUserDataError(errorData);
                })
        } else this.props.editUserDataError("Пароли не совпадают")
    }
    render() {
        const { loading, data, globalRoles, responseErrorMessage, responseSuccessMessage } = this.props;
        const loader = (loading) ? <Loader /> : null;
        const users = [];
        const options = globalRoles.map(({ id, role }) => {
            return {
                label: role,
                value: id
            }
        })
        if (!loading) {
            if (!data.users.length && data.page > data.total_pages) {
                return <Redirect to={`/adminPanel/editUser/page/${data.total_pages}`} />
            }
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
                );
            });
        }
        return (
            <EditUser loader={loader} users={users}>
                <ResponseHandlingMessagesContainer errors={responseErrorMessage} success={responseSuccessMessage} />
                <PagePaginator page={data.page} totalPages={data.total_pages} url='/adminPanel/editUser/page/' />
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
    editUserDeleteUser,
    editUserSuccessMessage
}
export default connect(mapStateToProps, mapDispatchToProps)(withResponseHandle(withBibapi(EditUserContainer)));