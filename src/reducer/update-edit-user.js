const updateEditUser = (state, action) => {
    if (state === undefined) {
        return {
            loading: true,
            data: []
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
        default:
            return state.editUser
    }
}
export default updateEditUser;