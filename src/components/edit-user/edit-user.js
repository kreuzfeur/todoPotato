//react
import React from 'react';
//styles
import './edit-user.scss';

const EditUser = ({loader, users, children}) => {
        return (      
            <section className="editUser row">
                {children[0]}
                {loader}
                <div className="col-6">
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
                {children[1]}
            </section >
        )
}

export default EditUser;