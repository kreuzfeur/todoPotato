export default class UsersService {
    changeUrlByRole = () => {
        if(localStorage.getItem('role') === 'admin') {
            console.log(localStorage.getItem('role'))
            return 'adminPanel'
        }else {
            return 'userPanel'
        }
    }
}