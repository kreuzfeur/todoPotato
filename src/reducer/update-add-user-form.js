const updateAddUserForm = (state, action) => {
    if (state === undefined) {
        return {
            login: '',
            password: '',
            password_confirmation: '',
            roles: [],
            loading: false,
            serverMessage: '',
            roleId: 1
        }
    }
    switch (action.type) {
        case 'FETCH_ADD_USER_FORM_SUCCESS':
            return {
                ...state.addUserForm,
                serverMessage: action.payload,
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
                serverMessage: action.payload,
                loading: false
            }
        case 'FETCH_ADD_USER_FORM_GET_ROLES_SUCCESS':
            return {
                ...state.addUserForm,
                loading: false,
                roles: action.payload,
                serverMessage: ''
            }
        case 'FETCH_ADD_USER_FORM_GET_ROLES_PENDING':
            return {
                ...state.addUserForm,
                loading: true,
                serverMessage: ''
            }
        case 'FETCH_ADD_USER_FORM_GET_ROLES_ERROR':
            return {
                ...state.addUserForm,
                loading: false,
                serverMessage: action.payload
            }
        case 'ADD_USER_FORM_LOGIN_INPUT_CHANGE':
            return {
                ...state.addUserForm,
                login: action.payload,
                serverMessage: ''
            }
        case 'ADD_USER_FORM_PASSWORD_INPUT_CHANGE':
            return {
                ...state.addUserForm,
                password: action.payload,
                serverMessage: ''
            }
        case 'ADD_USER_FORM_PASSWORD_CONFIRMATION_INPUT_CHANGE':
            return {
                ...state.addUserForm,
                password_confirmation: action.payload,
                serverMessage: ''
            }
        case 'ADD_USER_FORM_ROLE_CHANGE':
            return {
                ...state.addUserForm,
                roleId: action.payload,
                serverMessage: ''
            }
        default:
            return state.addUserForm
    }
}
export default updateAddUserForm;