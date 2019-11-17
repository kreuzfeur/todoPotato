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
} 