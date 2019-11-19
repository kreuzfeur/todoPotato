const fetchAddUserFormGetRolesSuccess = (data) => {
    return {
        type: "FETCH_ADD_USER_FORM_GET_ROLES_SUCCESS",
        payload: data
    }
}
const fetchAddUserFormPending = () => {
    return {
        type: 'FETCH_ADD_USER_FORM_PENDING',
    }
}
const fetchAddUserFormSuccess = (response) => {
    return {
        type: 'FETCH_ADD_USER_FORM_SUCCESS',
        payload: response
    }
}
const fetchAddUserFormError = (error) => {
    return {
        type: 'FETCH_ADD_USER_FORM_ERROR',
        payload: error
    }
}
const addUserFormLoginInputChange = (inputValue) => {
    return {
        type: 'ADD_USER_FORM_LOGIN_INPUT_CHANGE',
        payload: inputValue
    }
}
const addUserFormPasswordInputChange = (inputValue) => {
    return {
        type: 'ADD_USER_FORM_PASSWORD_INPUT_CHANGE',
        payload: inputValue
    }
}
const addUserFormPasswordConfirmationInputChange = (inputValue) => {
    return {
        type: 'ADD_USER_FORM_PASSWORD_CONFIRMATION_INPUT_CHANGE',
        payload: inputValue
    }
}
const changeRole = (roleId) => {
    return {
        type: 'ADD_USER_FORM_ROLE_CHANGE',
        payload: roleId
    }
}
export {
    fetchAddUserFormGetRolesSuccess,
    fetchAddUserFormPending,
    fetchAddUserFormSuccess,
    fetchAddUserFormError,
    addUserFormLoginInputChange,
    addUserFormPasswordInputChange,
    addUserFormPasswordConfirmationInputChange,
    changeRole
}