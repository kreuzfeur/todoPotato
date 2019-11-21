const editUserDataPending = () => {
    return {
        type: 'EDIT_USER_DATA_PENDING'
    }
}
const editUserDataSuccess = (data) => {
    return {
        type: 'EDIT_USER_DATA_SUCCESS',
        payload: data
    }
}
const editUserDataError = (data) => {
    return {
        type: 'EDIT_USER_DATA_ERROR',
        payload: data
    }
}
const editUserGetGlobalRolesSuccess = (data, successMessage = null) => {
    return {
        type: 'EDIT_USER_GET_GLOBAL_ROLES_SUCCESS',
        payload: data,
        successMessage: successMessage
    }
}
const editUserDeleteUser = (userId) => {
    return {
        type: 'EDIT_USER_DELETE_USER',
        payload: userId
    }
}
export {
    editUserDataPending,
    editUserDataSuccess,
    editUserGetGlobalRolesSuccess,
    editUserDataError,
    editUserDeleteUser
}