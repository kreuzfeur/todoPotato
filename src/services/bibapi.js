import axios from 'axios';
axios.defaults.baseURL = 'http://31.132.169.72//potatoTodoApi/public/api/';
axios.defaults.headers.common['Authorization'] = `Bearer ${localStorage.getItem('token')}`;
axios.defaults.headers.common['Accept'] = 'application/json';
axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded';
export default class Bibapi {
    initAxios = (token) => {
        axios.defaults.headers.common['Authorization'] = `Bearer ${token}`;
    }
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
    getRoles = () => {
        return axios(
            {
                method: 'get',
                url: '/roles',
            }
        )
    }
    //test
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
    getUsers = (page) => {
        return axios({
            method: 'get',
            url: `/users`
        })
    }
    deleteUser = (userId) => {
        return axios({
            method: 'delete',
            url: `/users/${userId}`
        })
    }
    editUser = (userId, password, password_confirmation, role_id) => {
        let data = {};
        if (!password) {
            data = {
                role_id
            }
        } else {
            data = {
                password,
                password_confirmation,
                role_id
            }
        }
        return axios({
            method: 'put',
            url: `/users/${userId}`,
            data
        })
    }
} 