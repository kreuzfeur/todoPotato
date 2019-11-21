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
const editUserGetGlobalRolesSuccess = (data) => {
    return {
        type: 'EDIT_USER_GET_GLOBAL_ROLES_SUCCESS',
        payload: data
    }
}
const editUserDeleteUser = (userId) => {
    return {
        type: 'EDIT_USER_DELETE_USER',
        payload: userId
    }
}
const editUserSuccessMessage = (message) => {
    return {
        type: 'EDIT_USER_SUCCESS_MESSAGE',
        payload: message
    }
}
export {
    editUserDataPending,
    editUserDataSuccess,
    editUserGetGlobalRolesSuccess,
    editUserDataError,
    editUserDeleteUser,
    editUserSuccessMessage
}