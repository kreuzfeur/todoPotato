const updateAddUserForm = (state, action) => {
    if (state === undefined) {
        return {
            login: '',
            password: '',
            password_confirmation: '',
            roles: [],
            loading: false,
            responseErrorMessage: null,
            responseSuccessMessage: null,
            roleId: 1
        }
    }
    switch (action.type) {
        case 'FETCH_ADD_USER_FORM_SUCCESS':
            return {
                ...state.addUserForm,
                responseSuccessMessage: action.payload,
                responseErrorMessage: null,
                loading: false
            }
        case 'FETCH_ADD_USER_FORM_PENDING':
            return {
                ...state.addUserForm,
                loading: true
            }
        case 'FETCH_ADD_USER_FORM_ERROR':
            return {
                ...state.addUserForm,
                responseSuccessMessage: null,
                responseErrorMessage: action.payload,
                loading: false
            }
        case 'FETCH_ADD_USER_FORM_GET_ROLES_SUCCESS':
            return {
                ...state.addUserForm,
                loading: false,
                roles: action.payload,
            }
        case 'ADD_USER_FORM_LOGIN_INPUT_CHANGE':
            return {
                ...state.addUserForm,
                login: action.payload,
            }
        case 'ADD_USER_FORM_PASSWORD_INPUT_CHANGE':
            return {
                ...state.addUserForm,
                password: action.payload,
            }
        case 'ADD_USER_FORM_PASSWORD_CONFIRMATION_INPUT_CHANGE':
            return {
                ...state.addUserForm,
                password_confirmation: action.payload,
            }
        case 'ADD_USER_FORM_ROLE_CHANGE':
            return {
                ...state.addUserForm,
                roleId: action.payload,
            }
        default:
            return state.addUserForm
    }
}
export default updateAddUserForm;