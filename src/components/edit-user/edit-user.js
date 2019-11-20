//react
import React, { Component } from 'react';
//redux
import { connect } from 'react-redux';
import { editUserDataPending, editUserDataSuccess } from '../../actions';
//services
import { withBibapi, withResponseHandle } from '../hoc';
//router
import { NavLink } from 'react-router-dom';
//components
import Loader from '../loader';
//styles
import './edit-user.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSave, faTrash } from '@fortawesome/free-solid-svg-icons';

class EditUser extends Component {
    componentDidMount() {
        const { bibapi, responseHandleSuccess, responseHandleError, editUserDataPending, editUserDataSuccess } = this.props;
        const { getRoles, getUsers } = bibapi;
        editUserDataPending();
        getUsers()
            .then(response => {
                const data = responseHandleSuccess(response);
                editUserDataSuccess(data)
            })
            .catch(response => {
                const data = responseHandleError(response);
                console.log(data)
            })
    }
    render() {
        const { loading, data } = this.props;
        const loader = (loading) ? <Loader /> : null;
        const users = [];
        if (!loading) {
            data.users.forEach(user => {
                const {id, username, role:{role, roleId}} = user;
                console.log(role)
                users.push(
                    <tr key={user.id}>
                        <td scope="row" className="align-middle">{id}</td>
                        <td className="align-middle">{username}</td>
                        <td>
                            <input placeholder="Новый пароль" className="form-control" type="password" />
                        </td>
                        <td>
                            <select id="inputState" className="form-control" defaultValue={{ label: {role}, value: roleId }}>
                                {/* <option>Администратор</option>
                                <option>Пользователь</option> */}
                            </select>
                        </td>
                        <td>
                            <button className="btn btn-success" disabled>
                                <FontAwesomeIcon icon={faSave} />
                            </button>
                            <button className="btn btn-danger">
                                <FontAwesomeIcon icon={faTrash} />
                            </button>
                        </td>
                    </tr>
                )
            });
        }
        return (
            <section className="editUser row">
                <div className="col-6">
                    {loader}
                    <table className="table table-hover text-center">
                        <thead>
                            <tr>
                                <th scope="col">#</th>
                                <th scope="col">Пользователь</th>
                                <th scope="col">Изменить пароль</th>
                                <th scope="col">Права</th>
                                <th scope="col"></th>
                            </tr>
                        </thead>
                        <tbody>
                            {users}
                        </tbody>
                    </table>
                    <nav>
                        <ul className="pagination justify-content-center">
                            <li className="page-item"><NavLink className="page-link" to="editUser/">Назад</NavLink></li>
                            <li className="page-item"><NavLink className="page-link" to="editUser/page=1/">1</NavLink></li>
                            <li className="page-item"><NavLink className="page-link" to="editUser/page=2/">2</NavLink></li>
                            <li className="page-item"><NavLink className="page-link" to="editUser/page=3/">3</NavLink></li>
                            <li className="page-item"><NavLink className="page-link" to="editUser/">Вперед</NavLink></li>
                        </ul>
                    </nav>
                </div>
            </section >
        )
    }

}
const mapStateToProps = ({ editUser: { loading, data } }) => {
    return {
        loading,
        data
    }
}
const mapDispatchToProps = {
    editUserDataPending,
    editUserDataSuccess
}
export default connect(mapStateToProps, mapDispatchToProps)(withResponseHandle(withBibapi(EditUser)));