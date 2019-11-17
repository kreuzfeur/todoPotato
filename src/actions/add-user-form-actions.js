const fetchAddUserFormGetRolesPending = () => {
    return {
        type: "FETCH_ADD_USER_FORM_GET_ROLES_PENDING"
    }
}
const fetchAddUserFormGetRolesSuccess = (data) => {
    return {
        type: "FETCH_ADD_USER_FORM_GET_ROLES_SUCCESS",
        payload: data
    }
}
const fetchAddUserFormGetRolesError = () => {
    return {
        type: "FETCH_ADD_USER_FORM_GET_ROLES_ERROR"
    }
}
export {
    fetchAddUserFormGetRolesPending,
    fetchAddUserFormGetRolesError,
    fetchAddUserFormGetRolesSuccess
}