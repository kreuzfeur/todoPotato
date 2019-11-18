const updateLoginForm = (state, action) => {
    if (state === undefined) {
        return {
            loading: false,
            login: '',
            password: '',
            responseErrorMessage: null,
            responseSuccessMessage: null
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
                responseErrorMessage: '',
                responseSuccessMessage: ''
            }
        case 'FETCH_LOGIN_FORM_ERROR':
            return {
                ...state.loginForm,
                loading: false,
                responseErrorMessage: action.payload
            }
        case 'CHANGE_PASSWORD_INPUT_VALUE':
            return {
                ...state.loginForm,
                password: action.payload,
            }
        case 'CHANGE_LOGIN_INPUT_VALUE':
            return {
                ...state.loginForm,
                login: action.payload,
            }
        default:
            return state.loginForm
    }
}
export default updateLoginForm;