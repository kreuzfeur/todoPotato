//react
import React, { Component } from 'react';
//components
import AddUser from '../add-user';
import Loader from '../loader';
//services
import { withBibapi } from '../hoc';
//redux
import { connect } from 'react-redux';
import {
    fetchAddUserFormGetRolesPending,
    fetchAddUserFormGetRolesError,
    fetchAddUserFormGetRolesSuccess
} from '../../actions';

class AddUserContainer extends Component {
    componentDidMount() {
        document.title = 'Добавить пользователя';
        const { fetchAddUserFormGetRolesPending, fetchAddUserFormGetRolesError, fetchAddUserFormGetRolesSuccess } = this.props;
        fetchAddUserFormGetRolesPending()
        this.props.bibapi.getRoles()
            .then(response => fetchAddUserFormGetRolesSuccess(response))
            .catch((err) => fetchAddUserFormGetRolesError());
    }
    onAddUser = (evt) => {
        evt.preventDefault();
    }
    render() {
        const { loading, roles } = this.props;
        const loader = (loading) ? <Loader /> : null;
        // console.log(roles)
        const roleItems = roles.map(({role, id}) => {
            return (<option key={id} value={id}>{role}</option>)
        })
        return (
            <AddUser onAddUser={this.onAddUser} loader={loader} roleItems={roleItems} />
        )
    }
}
const mapStateToProps = ({ addUserForm: { loading, roles } }) => {
    // console.log(roles)
    return {
        loading,
        roles
    }
}
const mapDispatchToProps = {
    fetchAddUserFormGetRolesPending,
    fetchAddUserFormGetRolesError,
    fetchAddUserFormGetRolesSuccess
}
export default connect(mapStateToProps, mapDispatchToProps)(withBibapi(AddUserContainer));