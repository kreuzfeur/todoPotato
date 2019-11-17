export default class UsersService {
    changeUrlByRole = () => {
        if(localStorage.getItem('role') === 'admin') {
            return 'adminPanel'
        }else {
            return 'userPanel'
        }
    }
}