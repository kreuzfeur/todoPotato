import updateLoginForm from './update-login-form.js';
import upadteAddUserForm from './update-add-user-form';
import updateEditUser from './update-edit-user';
const reducer = (state, action) => {
    return {
        loginForm: updateLoginForm(state, action),
        addUserForm: upadteAddUserForm(state, action),
        editUser: updateEditUser(state, action),
    }
}
export default reducer;