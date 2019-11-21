const onUserDelete = (userId, users) => {
    return users.filter(({ id }) => userId !== id)
}
const updateEditUser = (state, action) => {
    if (state === undefined) {
        return {
            loading: true,
            data: [],
            globalRoles: [],
            responseErrorMessage: null,
            responseSuccessMessage: null
        }
    }
    switch (action.type) {
        case 'EDIT_USER_DATA_PENDING':
            return {
                ...state.editUser,
                loading: true
            }
        case 'EDIT_USER_DATA_SUCCESS':
            return {
                ...state.editUser,
                loading: false,
                data: action.payload
            }
        case 'EDIT_USER_DATA_ERROR':
            return {
                ...state.editUser,
                loading: false,
                responseErrorMessage: action.payload
            }
        case 'EDIT_USER_GET_GLOBAL_ROLES_SUCCESS':
            return {
                ...state.editUser,
                globalRoles: action.payload,
            }
        case 'EDIT_USER_DELETE_USER':
            const newUsers = onUserDelete(action.payload, state.editUser.data.users)
            return {
                ...state.editUser,
                data: {
                    ...state.editUser.data,
                    users: newUsers
                }
            }
        case 'EDIT_USER_SUCCESS_MESSAGE':
            return {
                ...state.editUser,
                responseSuccessMessage: action.payload
            }
        default:
            return state.editUser
    }
}
export default updateEditUser;