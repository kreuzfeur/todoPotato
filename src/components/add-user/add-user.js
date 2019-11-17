//react
import React from 'react';
//styles
import './add-user.scss';
import logo from '../../img/logoPutcko.jpg';

const AddUser = ({ onAddUser, loader, roleItems }) => {
    return (
        <section className="addUser row">
            <div className="col-5 text-center">
                <img src={logo} alt="Логотип Пуцко" />
                <h1>Добавить пользователя</h1>
                <form className="m-2 jumbotron" onSubmit={(evt) => onAddUser(evt)}>
                    {loader}
                    <div className="row">
                        <div className="col">
                            <input type="text" className="form-control" placeholder="Логин" />
                        </div>
                        <div className="col">
                            <input type="password" className="form-control" placeholder="Пароль" />
                        </div>
                        <div className="col">
                            <input type="password" className="form-control" placeholder="Пароль" />
                        </div>
                        <div className="col-4">
                            <select id="inputState" className="form-control">
                                {roleItems}
                            </select>
                        </div>
                        <div className="col">
                            <button type="submit" className="btn btn-success">Добавить</button>
                        </div>
                        <div className="col-12">
                            <small className="form-text text-danger text-center">123</small>
                        </div>
                    </div>
                </form>
            </div>
        </section>
    )
}
export default AddUser;