import updateLoginForm from './update-login-form.js';

const reducer = (state, action) => {
    return {
        loginForm: updateLoginForm(state, action),

    }
}
export default reducer;