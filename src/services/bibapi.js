import axios from 'axios';
axios.defaults.baseURL = 'https://polyacovda.ru/potatoTodoApi/public/api/';
axios.defaults.headers.common['Authorization'] = localStorage.getItem('token');
axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded';
export default class Bibapi {
    login = (username, password) => {
        return axios({
            method: 'post',
            url: '/login',
            data: {
                name: username,
                password
            }
        });
    }
} 