import updateLoginForm from './update-login-form.js';
import upadteAddUserForm from './update-add-user-form';
const reducer = (state, action) => {
    return {
        loginForm: updateLoginForm(state, action),
        addUserForm: upadteAddUserForm(state, action)
    }
}
export default reducer;