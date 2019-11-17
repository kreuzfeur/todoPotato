import axios from 'axios';
axios.defaults.baseURL = 'https://polyacovda.ru/potatoTodoApi/public/api/';
axios.defaults.headers.common['Authorization'] = `Bearer ${localStorage.getItem('token')}`;
axios.defaults.headers.common['Accept'] = 'application/json';
axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded';
export default class Bibapi {
    login = (username, password) => {
        return axios({
            method: 'post',
            url: '/login',
            data: {
                username,
                password
            }
        });
    }
    getRoles = async () => {
        const roles = await axios(
            {
                method: 'get',
                url: '/roles',
            }
        )
        return this._transformRoles(roles.data)
    }
    addUser = (username, password, password_confirmation, role_id) => {
        return axios({
            method: 'post',
            url: '/register',
            data: {
                username,
                password,
                password_confirmation,
                role_id
            }
        })
    }
    _transformRoles = (roles) => {
        return roles.map(role => {
            switch (role.role) {
                case 'admin':
                    return {
                        ...role,
                        role: 'администратор'
                    }
                case 'user':
                    return {
                        ...role,
                        role: 'пользователь'
                    }
                default:
                    return role
            }
        })
    }
} 