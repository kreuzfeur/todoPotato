//react
import React from 'react';
//styles
import './edit-user.scss';

const EditUser = ({loader, users, children}) => {
        return (      
            <section className="editUser row">
                {children}
                <div className="col-6">
                    {loader}
                    <table className="table table-hover text-center">
                        <thead>
                            <tr >
                                <th>#</th>
                                <th>Пользователь</th>
                                <th>Изменить пароль</th>
                                <th width="20%">Права</th>
                                <th width="20%"></th>
                            </tr>
                        </thead>
                        <tbody>
                            {users}
                        </tbody>
                    </table>
                </div>
            </section >
        )
}

export default EditUser;