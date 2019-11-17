const updateAddUserForm = (state, action) => {
    if (state === undefined) {
        return {
            login: '',
            password: '',
            password_confirmation: '',
            roles: [],
            loading: false,
            serverMessage: ''
        }
    }
    switch (action.type) {
        case 'FETCH_ADD_USER_FORM_SUCCESS':
            return {
                ...state.addUserForm
            }
        case 'FETCH_ADD_USER_FORM_PENDING':
            return {
                ...state.addUserForm
            }
        case 'FETCH_ADD_USER_FORM_ERROR':
            return {
                ...state.addUserForm
            }
        case 'FETCH_ADD_USER_FORM_GET_ROLES_SUCCESS':
            return {
                ...state.addUserForm,
                loading: false,
                roles: action.payload
            }
        case 'FETCH_ADD_USER_FORM_GET_ROLES_PENDING':
            return {
                ...state.addUserForm,
                loading: true
            }
        case 'FETCH_ADD_USER_FORM_GET_ROLES_ERROR':
            return {
                ...state.addUserForm,
                loading: false
            }
        default:
            return state.addUserForm
    }
}
export default updateAddUserForm;