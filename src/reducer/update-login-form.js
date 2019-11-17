const updateLoginForm = (state, action) => {
    if (state === undefined) {
        return {
            loading: false,
            login: '',
            password: '',
            passwordFieldMessage: '',
            loginFieldMessage: '',
            serverMessage: ''
        }
    }
    switch (action.type) {
        case 'FETCH_LOGIN_FORM_SUCCESS':
            return {
                ...state.loginForm,
                loading: false,
            }
        case 'FETCH_LOGIN_FORM_PENDING':
            return {
                ...state.loginForm,
                loading: true,
                serverMessage: ''
            }
        case 'FETCH_LOGIN_FORM_ERROR':
            return {
                ...state.loginForm,
                loading: false,
                serverMessage: action.payload
            }
        case 'CHANGE_PASSWORD_INPUT_VALUE':
            return {
                ...state.loginForm,
                password: action.payload,
                passwordFieldMessage: ''
            }
        case 'CHANGE_LOGIN_INPUT_VALUE':
            return {
                ...state.loginForm,
                login: action.payload,
                loginFieldMessage: ''
            }
        case 'CHANGE_PASSWORD_FIELD_MESSAGE':
            return {
                ...state.loginForm,
                passwordFieldMessage: 'Не может быть пустым'
            }
        case 'CHANGE_LOGIN_FIELD_MESSAGE':
            return {
                ...state.loginForm,
                loginFieldMessage: 'Не может быть пустым'
            }
        default:
            return state.loginForm
    }
}
export default updateLoginForm;