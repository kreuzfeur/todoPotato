//react
import React from 'react';
//styles
import './edit-user.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSave, faTrash } from '@fortawesome/free-solid-svg-icons';

const EditUser = () => {
    return (
        <section className="editUser row">
            <div className="col-5">
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
                        <tr>
                            <th scope="row" className="align-middle">id</th>
                            <td className="align-middle">user</td>
                            <td>
                                <input placeholder="Новый пароль" className="form-control" type="password" />
                            </td>
                            <td>
                                <select id="inputState" className="form-control">
                                    <option>Администратор</option>
                                    <option>Пользователь</option>
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
                    </tbody>
                </table>
                <nav>
                    <ul class="pagination justify-content-center">
                        <li class="page-item"><a class="page-link" href="#">Назад</a></li>
                        <li class="page-item"><a class="page-link" href="#">1</a></li>
                        <li class="page-item"><a class="page-link" href="#">2</a></li>
                        <li class="page-item"><a class="page-link" href="#">3</a></li>
                        <li class="page-item"><a class="page-link" href="#">Вперед</a></li>
                    </ul>
                </nav>
            </div>
        </section >
    )
}

export default EditUser;